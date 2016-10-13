import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

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
		if (href && href.charAt(0) === '/') {
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

export default connect(null, function (dispatch) {
	return {
		redirect: (url) => dispatch(push(url))
	};
})(InternalLinkRouter);
