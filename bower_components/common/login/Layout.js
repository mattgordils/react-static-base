import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

import * as loginActions from './actions';
import actionWrapper from 'common/util/actionWrapper';

import SelectAnApp from './Components/SelectAnApp';
import LoginForm from './Components/LoginForm';
import ForgotPassword from './Components/ForgotPassword';
import TermsAndConditions from './Components/TermsAndConditions';

import Logo from 'ui/Icons/LogoNew';

import './stylesheets/login.less';

class LoginLayout extends React.Component {

	componentWillMount () {
		this.actUponState(this.props);
	}

	componentWillReceiveProps (newProps) {
		this.actUponState(newProps);
	}

	actUponState (props) {
		if (props.location.pathname === '/logout') {
			props.replace('/login');
			props.loginActions.logout();
		} else if (!props.authState.checked && !props.authState.checking) {
			props.loginActions.bootstrap();
		} else if (props.user && !props.user.termsNeeded && props.user.userType !== 'admin') {
			console.log('REDIRECT');
			// redirect
		}
	}

	getContent () {
		if (this.props.user && this.props.user.termsNeeded) {
			return (<TermsAndConditions key="terms-and-conditions" {...this.props} />);
		}

		if (!this.props.user) {
			if (this.props.location.pathname === '/forgotPassword') {
				return (<ForgotPassword key="forget-password" {...this.props} />);
				// show forgot password
			} else {
				return (<LoginForm key="login-form" {...this.props} />);
				// show login screen
			}
		} else if (this.props.user.userType === 'admin') {
			return (<SelectAnApp key="select-an-app" {...this.props} />);
		} else {
			return (<div key="sending">Sending you to your app.</div>);
		}
	}

	getSignupButton () {
		if (!this.props.appConfig) {
			return (<span />);
		}

		var link = this.props.appConfig.isEnterprise ? 'ondemand' : 'exchange';

		return (<div className="bottom-text">
			<span className="text">Don't Have Account?</span>
			<a
				className="button button_gray"
				href={'https://signup.compstak.com/' + link}
			>Sign Up</a>
		</div>);
	}

	render () {
		if (this.props.authState.checking || !this.props.authState.checked) {
			return (<div className="spinner large" key="spinner"></div>);
		}
		var viewName = false;
		return (
			<div className={'page-login ' + (viewName || 'mainlogin')}>
			<div className="login-form">
				<div>
					<span className="cs-icon-container">
						<Logo />
					</span>

					<div className="cs-icon-text">
						COMPSTAK
					</div>
				</div>
				<ReactCssTransitionGroup
					transitionName="login-screen"
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={1000}
				>
					{this.getContent()}
				</ReactCssTransitionGroup>
			</div>

			{this.getSignupButton()}

		</div>
		);
	}
}

function mapStoreToProps (store) {
	return {
		authState: store.authState,
		user: store.user,
		markets: store.markets,
		appConfig: store.appConfig
	};
}

function mapDispatchToProps (dispatch) {
	var actions = actionWrapper({
		loginActions
	}, dispatch);
	actions.replace = url => dispatch(replace(url));
	return actions;
}

export default connect(mapStoreToProps, mapDispatchToProps)(LoginLayout);

