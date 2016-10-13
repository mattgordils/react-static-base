'use strict';
var React = require('react');

var LoginForm = React.createClass({

	acceptTerms: function () {
		this.props.loginActions.acceptTerms(this.props.authState.displayGBCompany);
	},

	toggleAsCompany: function (event) {
		event.preventDefault();
		this.props.loginActions.setAsCompany(!this.props.authState.displayGBCompany);
	},

	getGBContent: function () {
		var market = this.props.markets[this.props.user.primaryMarketId];
		if (market.countryCode !== 'GB') {
			return undefined;
		} else if (this.props.authState.displayGBCompany) {
			return (<p>
				Please review the <a href="http://www.compstak.com/legal?company={{companyName}}&email={{email}}#ModelContract" target="_blank">terms and conditions of our model contract</a>. By clicking "Accept", you acknowledge that you have read, understood and agree to be legally bound by the European Commission Standard Contractual Clauses (processors). If you are accepting these clauses on behalf of a company or other legal entity, you represent that you have the authority to bind such company or legal entity.

				<br />
				<br />

				Note: If you are not signing up on behalf of a company, or a legal entity <a href="#" onClick={this.toggleAsCompany}>click here.</a>
			</p>);

		} else {
			return (<p>
				If I am a resident of the European Union, then by clicking "Accept", I consent to the transfer of my personal data and the personal data of third parties that I provide to you from my country to the United States for processing in order that I may receive the services. I understand that the European Commission has determined that the US does not provide adequate security for the personal data of European citizens, and that I have the right to revoke my consent at any time upon notice to you and my personal data will be returned.


				<br />
				<br />

				Note: If you are signing up on behalf of a company, or a legal entity <a href="#" onClick={this.toggleAsCompany}>click here</a> to view and agree the applicable terms of use.

			</p>);
		}
	},

	render: function () {

		return (
			<div className="terms_content login_screen_content">

				<h1 className="login_terms_caption">
					Terms of Use
				</h1>

				<p>
					We have updated our Terms of Use. You can view it <a href="http://www.compstak.com/legal/" target="_blank">here</a>.
				</p>

				{this.getGBContent()}

				<div className="terms_table">
					<div className="terms_accept">
						<button className="button" onClick={this.acceptTerms}>
							<span>ACCEPT</span>
						</button>
					</div>

					<div className="terms_decline">
						<button className="button button_gray" onClick={this.props.loginActions.declineTerms}>
							<span>DECLINE</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = LoginForm;
