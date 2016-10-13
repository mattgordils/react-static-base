'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Icons = require('../../../components/Icons.jsx');
var Throbber = require('../../../components/Throbber');

var s = require('../../../store');
var actions = require('../../../actions');

var LoginForm = React.createClass({

	componentDidMount: function () {
		actions.loginerror.listen(this.updateErrorMessage, this);
	},

	componentWillUnmount: function () {
		actions.loginerror.unlisten(this.updateErrorMessage, this);
	},

	getInitialState: function () {
		return {
			password: '',
			confirmation: '',
			errorMessage: '',
			loginInProgress: false,
			confirmationTouched: false,
			
			isLongEnough: false,
			hasCapitalLetter: false,
			hasNumber: false,
			hasProhibitedWord: false,
			passwordIsGood: false,
			confirmationMatches: true
		};
	},

	submitIfEnter: function (event) {
		if (event.keyCode === 13) {
			this.signin();
		}
	},

	updateState: function (event) {
		var obj = {
			password: this.state.password,
			confirmation: this.state.confirmation
		};
		obj[event.target.name] = event.target.value;

		var goodMap = {
			isLongEnough: obj.password.length >= 8,
			hasCapitalLetter: /[A-Z]/.test(obj.password),
			hasNumber: /[0-9]/.test(obj.password),
			hasProhibitedWord: /password|user|username/i.test(obj.password),
			confirmationMatches: obj.password === obj.confirmation
		};

		goodMap.passwordIsGood = goodMap.isLongEnough && goodMap.hasCapitalLetter && goodMap.hasNumber && !goodMap.hasProhibitedWord;

		this.setState(obj);
		this.setState(goodMap);
	},

	updateErrorMessage: function () {
		var store = s();
		this.setState({
			errorMessage: store.get('loginErrorMessage'),
			loginInProgress: false
		});
	},

	resetPassword: function (event) {
		event.preventDefault();

		if (this.state.passwordIsGood && this.state.confirmationMatches) {
			var uuid = window.location.pathname.split('/')[2];
			
			actions.resetpassword({
				uuid: uuid, 
				password: this.state.password
			});

			this.setState({
				loginInProgress: true
			});
		}

	},

	setConfirmationTouched: function () {
		this.setState({
			confirmationTouched: true
		});
	},

	setConfirmationUntouched: function () {
		this.setState({
			confirmationTouched: false
		});
	},

	render: function () {
		
		return (
			<form className="reset_password_content login_screen_content" onSubmit={this.resetPassword}>

				<h1>Password Reset</h1>

				<div className="error_message">
					{this.state.confirmationMatches || !this.state.confirmationTouched ? 
							'' 
						: 
							<div className="error_container">
								Passwords don't match
							</div>
					}

					{this.state.errorMessage ? 
							<div className="error_container">
								{this.state.errorMessage}
							</div>
						:
							''
					}

				</div>
					
				<div className="input_group">

					<input type="password" className="input" placeholder="New Password" name="password" autocomplete="off" onChange={this.updateState} />

					<div className="validationIcon">
						<span className="icon">{this.state.passwordIsGood ? <Icons type="small_tick" width="13px" height="12px" /> : <Icons type="error" />}</span>
					</div>

					{this.state.passwordIsGood ? '' : 
						<div className="password_validator">
							<div className="validator_container">
								<h4 className="validator_title invalid">PASSWORD RULES</h4>
								<ul className="rules_list">
									<li>
										<span className="icon">{this.state.isLongEnough ? <Icons type="small_tick" width="13px" height="12px" /> : <Icons type="error" />}</span>
										<span className="error_message">
											Eight characters minimum
										</span>
									</li>

									<li>
										<span className="icon">{this.state.hasCapitalLetter ? <Icons type="small_tick" width="13px" height="12px" /> : <Icons type="error" />}</span>
										<span className="error_message">
											Contains at least one capital letter
										</span>
									</li>

									<li>
										<span className="icon">{this.state.hasNumber ? <Icons type="small_tick" width="13px" height="12px" /> : <Icons type="error" />}</span>
										<span className="error_message">
											Contains at least one number
										</span>
									</li>

									<li>
										<span className="icon">{this.state.hasProhibitedWord ? <Icons type="error" /> : <Icons type="small_tick" width="13px" height="12px" />}</span>
										<span className="error_message">
											Can't be password, user, username.
										</span>
									</li>
								</ul>
							</div>
						</div>
					}
				</div>

				<div className="input_group">

					<input type="password" className="input" placeholder="New Password Confirmation" name="confirmation" autocomplete="off" onChange={this.updateState} onBlur={this.setConfirmationTouched} onFocus={this.setConfirmationUntouched} />

					<div className="validationIcon">
						<span className="icon">{this.state.confirmationMatches ? <Icons type="small_tick" width="13px" height="12px" /> : <Icons type="error" />}</span>
					</div>

				</div>

				{this.state.loginInProgress ?
					<button className="button button_wide disabled" disabled>
						 <Throbber.Small />
					</button>
					:
					<button className="button button_wide" onClick={this.resetPassword}>
						 RESET PASSWORD
					</button>
				}


			</form>
		);
	}
});

module.exports = LoginForm;
