import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { push, syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import routes from './routes';

import 'ui/stylesheets/ui_components/throbber.less';
import 'ui/stylesheets/ui_components/button.less';
import 'ui/stylesheets/ui_components/input.less';


class InternalLinkRouter extends React.Component {

	constructor () {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick (event) {
		var el = event.target;
		var a;
		while (el && el.parentNode) {
			if (el.nodeName === 'A') {
				a = el;
				break;
			}
			el = el.parentNode;
		}

		if (!a) {
			return;
		}

		var href = a.getAttribute('href');
		if (href && href.charAt(0) === '/' && href.charAt(1) !== '/') {
			event.preventDefault();
			this.props.redirect(href);
		}

		if (href && href.charAt(0) === '#') {
			event.preventDefault();
		}
	}

	render () {
		return (<div onClick={this.handleClick} data-link-router>
			{this.props.children}
		</div>);
	}
}

const LinkRouter = connect(null, function (dispatch) {
	return {
		redirect: (url) => dispatch(push(url))
	};
})(InternalLinkRouter);

const history = syncHistoryWithStore(browserHistory, store);

function start (container) {
	ReactDOM.render((
		<Provider store={store}>
			<LinkRouter>
				<Router history={history}>
					{ routes.login }
					{ routes.logout }
					{ routes.forgotPassword }
					{ routes.resetPassword }
				</Router>
			</LinkRouter>
		</Provider>
	), container);
}

start(document.getElementById('app-container'));
