import React from 'react';

export default class AB extends React.Component {
	render () {
		var widthHeight = {};
		if (this.props.width) {
			widthHeight.width = this.props.width;
		}
		if (this.props.height) {
			widthHeight.height = this.props.height;
		}
		return (<svg viewBox="0 0 45 45" {...widthHeight}>
			<path fill="#231F20" d="M0,0v45h45V0H0z M20.4,5.2h4.2l0,0.1l4.1,13.3h-3.4L24.6,16h-4.1l-0.7,2.6h-3.4L20.4,5.2z M10.1,8H8v29h2.2 v2.8h-5V5.2l5,0V8z M27.6,30.4c0,1.1-0.7,2-1.7,2.4c1,0.3,1.7,1.2,1.7,2.4v1.3c0,1.9-1.1,3.3-3.8,3.3h-6.3V26.4h6.7 c2.1,0,3.3,1.1,3.3,2.9V30.4z M33.8,23.1H11.3v-1.1h22.5V23.1z M39.8,39.8h-5V37H37V8h-2.2V5.2l5,0V39.8z M22.5,8.6l1.3,4.7h-2.6 L22.5,8.6z M20.6,28.8h2.5c0.9,0,1.6,0.2,1.6,1.1v0.8c0,0.7-0.4,1.2-1.2,1.2h-2.9V28.8z M24.7,36.4c0,0.9-0.7,1.1-1.6,1.1h-2.5v-3 h2.9c0.8,0,1.2,0.5,1.2,1.2V36.4z"/>
		</svg>);
	}
}
