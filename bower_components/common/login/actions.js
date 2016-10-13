import R from 'ramda';

import userService from 'services/user';
import referenceDataService from 'services/referenceData';
import marketService from 'services/markets';

import permissionsService from 'services/permissions';
import featureUtil from 'ui/util/feature';


export const USER_LOAD = 'USER_LOAD';
export const LOGOUT = 'LOGOUT';
export const SET_MARKET = 'SET_MARKET';
export const BOOTSTRAP = 'BOOTSTRAP';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const SET_GB_COMPANY = 'SET_GB_COMPANY';

export const NOT_LOGGED_IN = 'User not logged in.';

export function loadUser () {
	return {
		type: USER_LOAD,
		payload: {
			promise: userService.load()
		}
	};
}

export function createBootstrapPromise () {
	const userPromise = userService.load()
	.then(user => {
		// if the user's market is not one they can see
		// in the UI, change their market to NYC.
		return marketService.load().then(markets => {
			let userMarket = markets.find(market => market.id === user.preferences.currentMarketId);
			if (!userMarket) {
				userService.clearAll();
				user = R.clone(user);
				user.preferences.currentMarketId = 1;
				return userService.savePreferences(user);
			}
			return user;
		});
	});

	return userPromise.then(() => {
		var referenceDataPromise = referenceDataService.load();

		var permissionsPromise = userPromise.then(function (user) {
			return permissionsService.load(user.id);
		});
		permissionsPromise.then(featureUtil.update);

		return Promise.all([
			userPromise,
			referenceDataPromise,
			userService.loadSession(),
			permissionsPromise,
			marketService.load()
		]).then(function (things) {
			return {
				user		   : things[0],
				referenceData  : things[1],
				session		   : things[2],
				permissions	   : things[3],
				markets		   : things[4]
			};
		});
	});
}

export function logout () {
	return {
		type: LOGOUT,
		payload: {
			promise: userService.logout()
		}
	};
}

export function bootstrap () {
	return {
		type: BOOTSTRAP,
		payload: {
			promise: createBootstrapPromise().catch(() => {
				// If the user is not logged in this will be rejected
				// but really that just means the user needs to try to
				// log in, so we catch that here.
				return Promise.reject(NOT_LOGGED_IN);
			})
		}
	};
}

export function login (creds) {
	var promise = userService.login(creds)
	.then(createBootstrapPromise);

	return {
		type: BOOTSTRAP,
		meta: {
			username: creds.username
		},
		payload: {
			promise
		}
	};
}

export function acceptTerms (asCompany) {
	var promise = userService.load().then((user) => {
		return userService.acceptTerms(user, asCompany);
	}).then(createBootstrapPromise);

	return {
		type: BOOTSTRAP,
		payload: {
			promise
		}
	};
}

export function declineTerms () {
	var promise = userService.load().then((user) => {
		return userService.declineTerms(user);
	}).then(userService.logout);

	return {
		type: LOGOUT,
		payload: {
			promise
		}
	};
}

export function setAsCompany (value) {
	return {
		type: SET_GB_COMPANY,
		payload: value
	};
}

export function forgotPassword (email) {
	return {
		type: FORGOT_PASSWORD,
		payload: {
			promise: userService.sendForgotPassword(email)
		}
	};
}

export function resetPassword (uuid, password) {
	let promise = userService.resetPassword(uuid, password)
	.then(payload => userService.login({
		username: payload.user.email,
		password,
		rememberMe: true
	}))
	.then(createBootstrapPromise);

	return {
		type: BOOTSTRAP,
		payload: {
			promise
		}
	};
}

export function createAccount (registrationToken, password, touAsCompany) {
	let promise = userService.createAccount(registrationToken, password, touAsCompany)
	.then(payload => userService.login({
		username: payload.user.email,
		password,
		rememberMe: true
	}))
	.then(createBootstrapPromise);

	return {
		type: BOOTSTRAP,
		payload: {
			promise
		}
	};
}
