import { BOOTSTRAP, LOGOUT, USER_LOAD, FORGOT_PASSWORD, SET_GB_COMPANY } from './actions';

import Market from '../models/market';

import { Record, Maybe } from 'typed-immutable';

export function user (state = null, action = {}) {
	switch (action.type) {

		case LOGOUT + '_PENDING':
			state = false;
			break;

		case BOOTSTRAP + '_FULFILLED':
			state = action.payload.user;
			break;

		case BOOTSTRAP + '_REJECTED':
			state = null;
			break;

		case USER_LOAD + '_FULFILLED':
			state = action.payload;
			break;

	}
	return state;
}

export function markets (state=null, action) {
	switch (action.type) {
		case BOOTSTRAP + '_FULFILLED':
			var marketList = action.payload.markets.map(market => new Market(market));
			state = marketList.reduce((acc, market) => {
				acc[market.name] = market;
				acc[market.displayName] = market;
				acc[market.id] = market;
				return acc;
			}, {});
			state.list = marketList;
			break;

		case LOGOUT + '_PENDING':
		case BOOTSTRAP + '_REJECTED':
			state = null;
			break;
	}
	return state;
}

export function referenceData (state=null, action) {
	switch (action.type) {
		case BOOTSTRAP + '_FULFILLED':
			state = action.payload.referenceData;
			break;

		case LOGOUT + '_PENDING':
		case BOOTSTRAP + '_REJECTED':
			state = null;
			break;
	}
	return state;
}

export function permissions (state=null, action) {
	switch (action.type) {
		case BOOTSTRAP + '_FULFILLED':
			state = action.payload.permissions;
			break;

		case LOGOUT + '_PENDING':
		case BOOTSTRAP + '_REJECTED':
			state = null;
			break;
	}
	return state;
}

const defaultAuthState = new (Record({
	checking: false,
	checked: false,
	succeeded: false,
	termsNeeded: false,
	displayGBCompany: false,
	forgotPasswordPending: false,
	forgotPasswordSucceeded: Maybe(Boolean),
	errorMessage: Maybe(String),
	errorSuggestion: Maybe(String),
	usernameUsedToSignIn: Maybe(String)
}));

export function authState (state=defaultAuthState, action = {}) {

	if (state.forgotPasswordSucceeded) {
		state = state
		.set('forgotPasswordSucceeded', null)
		.set('forgotPasswordPending', false);
	}

	switch (action.type) {

		case LOGOUT + '_PENDING':
			state = defaultAuthState.set('checked', true);
			break;

		case SET_GB_COMPANY:
			state = state.set('displayGBCompany', action.payload);
			break;

		case FORGOT_PASSWORD + '_PENDING':
			state = state.set('forgotPasswordPending', true)
			.set('forgotPasswordSucceeded', null);
			break;

		case FORGOT_PASSWORD + '_FULFILLED':
			state = state.set('forgotPasswordPending', false)
			.set('forgotPasswordSucceeded', true);
			break;

		case FORGOT_PASSWORD + '_REJECTED':
			state = state.set('forgotPasswordPending', false)
			.set('forgotPasswordSucceeded', true);
			break;

		case BOOTSTRAP + '_REJECTED':
			state = defaultAuthState.set('checked', true);
			if (action.meta) {
				state = state.set('usernameUsedToSignIn', action.meta.username);
			}
			try {
				var error = JSON.parse(action.payload.response);
				state = state.set('errorMessage', error.error);
				if (error.reasons[0]) {
					state = state.set('errorSuggestion', error.reasons[0]);
				}
			} catch (e) {
				if (action.payload.response) {
					state = state.set('errorMessage', action.payload.response);
				} else {
					state = state.set('errorMessage', null);
				}
			}
			break;

		case BOOTSTRAP + '_FULFILLED':
			return state.set('checking', false)
			.set('checked', true)
			.set('succeeded', true)
			.set('errorMessage', null)
			.set('errorSuggestion', null);

		case BOOTSTRAP + '_PENDING':
			state = state.set('checking', true);
			if (action.meta) {
				state = state.set('usernameUsedToSignIn', action.meta.username);
			}
	}
	return state;
}

