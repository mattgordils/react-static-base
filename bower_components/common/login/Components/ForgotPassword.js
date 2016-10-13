'use strict';
var React = require('react');

var validate = require('common/util/validate');
var ArrowLeft = require('ui/Icons/ArrowLeft').default;
var Tick = require('ui/Icons/TickSmall').default;

var LoginForm = React.createClass({

	submitIfEnter: function (event) {
		if (event.keyCode === 13) {
			this.send();
		}
	},

	updateState: function (event) {
		this.setState({
			email: event.target.value,
			isValidEmail: validate.email(event.target.value)
		});
	},

	send: function (event) {
		if (event) {
			event.preventDefault();
		}

		if (!validate.email(this.state.email)) {
			this.setState({
				error: 'Please enter a valid email address.'
			});
			return;
		}

		this.setState({
			error: false
		});

		this.props.loginActions.forgotPassword(this.state.email);
	},

	button: function () {
		var button;
		if (this.props.authState.forgotPasswordSucceeded) {
			button = (<div></div>);
		} else if (this.props.authState.forgotPasswordPending) {
			button = (<button className="button disabled" disabled>
						<div className="spinner small" />
					</button>);
		} else {
			button = (<button
				className="button"
				onClick={this.send}
				disabled={!this.state || !this.state.isValidEmail}
			>
				SEND
			</button>);
		}
		return button;
	},

	render: function () {

		var message = '';
		var button = this.button();

		if (this.props.authState.forgotPasswordSucceeded === true) {
			message = (<div className="forget_password_success">
				<Tick />
				<div>
				<p><b>Please check your email for further instructions.</b></p>
				<p>If you didn't receive the reset email, check the spam folder of your inbox.</p>
				<p>
					We're here to help:<br/>
					<a href="mailto:help@compstak.com">help@compstak.com</a><br/>
					<a href="tel://1-646-926-6707">1-646-926-6707</a>
				</p>
				</div>
			</div>);
		} else if (this.props.authState.forgotPasswordSucceeded === false) {
			message = (<div className="forget_password_error">Unable to reset password</div>);
		} else if (this.state && this.state.error) {
			message = (<div className="forget_password_error">{this.state.error}</div>);
		}

		return (
			<div className="forget_password_content login_screen_content">

			<h1 className="login_forget_password_caption">
				Recover Your Password
			</h1>

			<p>Enter your email and we’ll send you a password reset link.</p>

			<div className="login_form_row">
				<input name="email" type="email" placeholder="Email address" className="login_input" onChange={this.updateState} onKeyDown={this.submitIfEnter} />
			</div>

			<div className="login_form_submit_wrapper">
				{button}
			</div>

			{message}

			<div className="back_to_login">
				<ArrowLeft />
				<a href="/login">Back to Login</a>
			</div>

			</div>
		);
	}
});

module.exports = LoginForm;
