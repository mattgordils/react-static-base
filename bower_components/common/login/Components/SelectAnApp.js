'use strict';
var React = require('react');

var util = require('../util');

var urls = util.getUrls(process.browser ? window.location : {hostname: 'compstak.com'});

module.exports = React.createClass({

	render: function () {
		var redirectPath = this.props.redirectUrl || '';
		return (
			<div className="select_an_app_content login_screen_content" key="select-an-app">

				<h1>
					The simple joys of being an admin.
				</h1>
				<h1>Select an app.</h1>
				<a className="button" href={urls.exchange + redirectPath}>Exchange</a>
				<a className="button" href={urls.enterprise + redirectPath}>Enterprise</a>
				<a className="button" href={urls.admin + redirectPath}>Admin</a>

				<a href="/logout">Log Out</a>
			</div>
		);
	}
});
