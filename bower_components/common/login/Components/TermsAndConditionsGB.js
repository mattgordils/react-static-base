'use strict';
var React = require('react');

var LoginForm = React.createClass({

	acceptTerms: function () {
		this.loginActions.acceptTerms()
	},

	declineTerms: function () {
		this.setState({inProgress: false});
	},

	getContent: function () {
		var market = this.props.markets[this.props.user.primaryMarketId];
		if (market.countryCode === 'GB') {
			return (<p>
				PUT GB STUFF HERE
			</p>);
		} else {
			return (<p>
				We have updated our Terms of Use. You can view it <a href="http://www.compstak.com/legal/" target="_blank">here</a>.
			</p>);
		}
	},

	render: function () {

		return (
			<div className="terms_content login_screen_content">

				<h1 className="login_terms_caption">
					Terms of Use
				</h1>

				{this.getContent()}

				<div className="terms_table">
					<div className="terms_accept">
						<button className="button" onClick={this.acceptTerms}>
							<span>ACCEPT</span>
						</button>
					</div>

					<div className="terms_decline">
						<button className="button button_gray" onClick={this.declineTerms}>
							<span>DECLINE</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = LoginForm;
