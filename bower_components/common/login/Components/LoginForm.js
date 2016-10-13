'use strict';
var React = require('react');
var Router = require('react-router');

var errorMessages = require('./errorMessages');
var LoginForm = React.createClass({

	getInitialState: function () {
		return {
			username: '',
			password: '',
			rememberMe: true,
			errorMessage: null
		};
	},

	submitIfEnter: function (event) {
		if (event.keyCode === 13) {
			this.signin();
		}
	},

	updateState: function (event) {
		var obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj);
	},

	updateRememberMe: function (event) {
		this.setState({rememberMe: event.target.checked});
	},

	signin: function (event) {
		if (event) {
			event.preventDefault();
		}
		if (!this.state.username && !this.state.password) {
			this.setState({errorMessage: errorMessages.noUsernameOrPassword});
			return;
		}
		if (!this.state.username) {
			this.setState({errorMessage: errorMessages.noUsername});
			return;
		}
		if (!this.state.password) {
			this.setState({errorMessage: errorMessages.noPassword});
			return;
		}

		this.setState({
			errorMessage: null
		});

		this.props.loginActions.login({
			username: this.state.username,
			password: this.state.password,
			rememberMe: this.state.rememberMe
		});
	},

	errorMessageIfNeeded: function () {
		let message = this.state.errorMessage || this.props.authState.errorMessage;
		if (message) {
			return (<div className="error_message">
				{message}
			</div>);
		}
		return '';
	},

	render: function () {
		return (
			<div className="login_form_content login_screen_content" key="login-form">

				{this.errorMessageIfNeeded()}

				<input type="text" placeholder="Username or Email" name="username" onChange={this.updateState}	onKeyDown={this.submitIfEnter}/>
				<input type="password" name="password" placeholder="Password" onChange={this.updateState}	 onKeyDown={this.submitIfEnter}/>

				<div className="content_below_inputs delayed-item">
					<input type="checkbox" id="remember_me" checked={this.state.rememberMe} className="checkbox checkbox_minimal" onChange={this.updateRememberMe} />
					<label htmlFor="remember_me">Keep me logged in</label>

					<div className="forgot_password_link" ref="rememberme">
						<a href="/forgotPassword">Forgot password?</a>
					</div>
				</div>

				{this.props.authState.checking ?
					<button className="button disabled" disabled>
						<div className="spinner small" />
					</button>
					:
					<button className="button" onClick={this.signin}>
						Login
					</button>
				}
			</div>
		);
	}
});

module.exports = LoginForm;
