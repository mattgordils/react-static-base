import React from 'react';

export default class Davis extends React.Component {
	render () {
		var widthHeight = {};
		if (this.props.width) {
			widthHeight.width = this.props.width;
		}
		if (this.props.height) {
			widthHeight.height = this.props.height;
		}
		return (<svg viewBox="0 0 159 37" {...widthHeight}>
			<path fill="#FFFFFF" d="M16.2,14.7c0-1.1,0-1.8-0.1-2.3c0.5,0,1.3,0,2.3,0.1c0.9,0,1.4,0,1.7,0c0.3,0,1,0,2.1,0c0.8,0,1.4,0,1.8-0.1 C24,13,24,13.7,24,14.7h-0.4L23.5,14c0-0.4-0.1-0.6-0.1-0.7c0-0.1,0-0.1-0.1-0.1c0,0-0.1,0-0.1-0.1c-0.1,0-0.3,0-0.7-0.1 c-0.4,0-0.7,0-0.9,0h-0.8c0,0.4-0.1,1-0.1,1.8v4c0,0.6,0,1.2,0,1.8c0,0.4,0,0.7,0.1,0.8c0.1,0.1,0.1,0.1,0.3,0.2 c0.1,0,0.4,0.1,1,0.1v0.4c-0.8,0-1.4-0.1-1.8-0.1c-0.2,0-0.9,0-2.1,0.1v-0.4c0.5,0,0.9,0,1-0.1c0.1,0,0.2-0.1,0.2-0.2 c0.1-0.1,0.1-0.3,0.1-0.7c0-0.1,0-0.7,0-1.9v-4c0-0.2,0-0.4,0-0.6l0-1.2h-1c-0.6,0-1.1,0-1.4,0.1c-0.1,0-0.2,0-0.2,0.1 c0,0.1-0.1,0.3-0.1,0.7l-0.1,0.7H16.2z M25.2,13c0,0.1,0.1,0.4,0.1,0.9c0,0.8,0,0.9,0,1.7v3.5c0,1.2,0,1.9,0,2c0,0.2,0,0.4-0.1,0.5 c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.1,0-0.2,0.1l-0.6,0v0.4c0.9,0,1.5,0,1.8,0c0.3,0,0.9,0,1.7,0v-0.4c-0.5,0-0.7,0-0.8,0 c-0.1,0-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.3-0.1-0.5c0-0.1,0-0.7,0-1.9v-0.8c0-0.4,0-0.6,0-0.7c0-0.1,0.1-0.2,0.1-0.3 c0.1-0.2,0.3-0.3,0.4-0.5s0.3-0.3,0.5-0.3c0.2-0.1,0.4-0.1,0.7-0.1c0.4,0,0.7,0.1,1,0.3c0.2,0.2,0.4,0.4,0.5,0.6 c0.1,0.2,0.1,0.6,0.1,1.1v1.7c0,0.6,0,1.3-0.1,2c0.6,0,1,0,1.2,0c0.2,0,0.6,0,1.1,0v-0.4c-0.4,0-0.7,0-0.7,0c-0.1,0-0.1,0-0.2-0.1 c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.3-0.1-0.5c0-0.1,0-0.4,0-1l0-0.9v-1.2c0-0.6-0.1-1-0.2-1.3c-0.1-0.3-0.4-0.5-0.8-0.7 c-0.4-0.2-0.8-0.3-1.2-0.3c-0.2,0-0.5,0-0.7,0.1c-0.2,0-0.3,0.1-0.4,0.1c0,0-0.1,0.1-0.2,0.2c-0.1,0-0.2,0.2-0.5,0.5 c-0.3,0.3-0.5,0.4-0.5,0.5v-2l0-0.4c0-0.6,0-1.3,0-2.1l0-0.2c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0 c-0.4,0.2-1.1,0.3-2.1,0.5v0.4c0.6,0,0.9,0,0.9,0C25.1,12.9,25.2,12.9,25.2,13z M32.7,20.8c-0.3-0.5-0.4-1.1-0.4-1.7 c0-0.5,0.1-1,0.2-1.4c0.1-0.4,0.3-0.7,0.5-0.9c0.1-0.1,0.3-0.3,0.6-0.5c0.3-0.2,0.6-0.3,0.8-0.4c0.4-0.2,0.7-0.2,1.2-0.2 c0.5,0,1,0.1,1.4,0.3c0.4,0.2,0.7,0.5,0.9,0.9c0.2,0.4,0.3,0.9,0.3,1.4c0,0.1,0,0.3,0,0.5c-0.3,0.1-0.6,0.1-0.9,0.1 c-0.5,0-1,0.1-1.5,0.1h-2.2c0,0.7,0.1,1.2,0.3,1.6c0.2,0.4,0.5,0.7,0.9,0.9c0.4,0.2,0.8,0.3,1.2,0.3c0.3,0,0.6,0,0.8-0.1 c0.3-0.1,0.6-0.3,1-0.5l0.1,0.1l-0.2,0.5c-0.3,0.2-0.5,0.3-0.7,0.4c-0.2,0.1-0.5,0.2-0.7,0.2c-0.3,0.1-0.6,0.1-0.9,0.1 c-0.6,0-1.1-0.1-1.6-0.4C33.3,21.7,33,21.3,32.7,20.8z M33.6,18.3c0.1,0,0.4,0,0.7,0c0.7,0,1.1,0,1.4,0c0.6,0,1,0,1.2,0 c0-0.1,0-0.2,0-0.3c0-0.7-0.1-1.2-0.4-1.6c-0.3-0.3-0.7-0.5-1.2-0.5c-0.5,0-0.9,0.2-1.2,0.6C33.7,16.9,33.6,17.5,33.6,18.3z M49.5,14.3c0.5,0.7,0.7,1.5,0.7,2.4c0,0.7-0.1,1.3-0.3,1.9c-0.2,0.6-0.5,1.1-0.9,1.6c-0.4,0.5-0.8,0.8-1.2,1.1 c-0.4,0.3-0.9,0.5-1.4,0.6c-0.5,0.1-1.1,0.2-2,0.2c-0.3,0-0.7,0-1.1,0c-0.6,0-1,0-1.2,0c-0.3,0-0.8,0-1.5,0v-0.3 c0.3-0.1,0.5-0.3,0.7-0.4c0-0.3,0-0.7,0.1-1.3c0-0.9,0-1.6,0-1.9v-2.8c0-0.4,0-1,0-1.6c0-0.4-0.1-0.6-0.1-0.7c0-0.1-0.1-0.1-0.1-0.1 c-0.2-0.1-0.5-0.1-0.9-0.1v-0.4c0.7,0,1.2,0,1.8,0c0.4,0,0.9,0,1.6,0c0.7,0,1.2,0,1.6,0c1.1,0,2,0.1,2.7,0.4 C48.5,13.1,49,13.6,49.5,14.3z M48.8,17.1c0-0.8-0.2-1.6-0.5-2.2c-0.3-0.6-0.8-1.1-1.4-1.4c-0.6-0.3-1.4-0.5-2.5-0.5 c-0.6,0-1.1,0-1.7,0.1c0,0.2,0,0.6,0,1.2l0,1V18l0,2.1c0,0.3,0,0.7,0,1.2c0.5,0.1,1,0.1,1.6,0.1c0.6,0,1.1,0,1.5-0.1 c0.4-0.1,0.8-0.2,1.1-0.4c0.3-0.2,0.6-0.4,0.9-0.8c0.3-0.4,0.5-0.8,0.7-1.4C48.7,18.2,48.8,17.6,48.8,17.1z M56.7,21.7l0.4,0v0.4 c-0.4,0-0.7,0-1,0c-0.3,0-0.6,0-1.1,0l0-1.2c-0.9,0.7-1.5,1.1-1.6,1.2c-0.2,0.1-0.4,0.1-0.7,0.1c-0.5,0-1-0.1-1.3-0.4 c-0.3-0.3-0.5-0.7-0.5-1.2c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.2-0.5,0.4-0.6c0.1-0.2,0.3-0.3,0.5-0.3c0.3-0.1,0.7-0.3,1.3-0.4 c0.6-0.1,1.2-0.2,1.8-0.3c0-0.4,0-0.8-0.2-1c-0.1-0.2-0.3-0.4-0.6-0.6c-0.3-0.2-0.6-0.2-0.9-0.2c-0.3,0-0.5,0-0.7,0.1 c-0.2,0.1-0.3,0.1-0.4,0.2l-0.1,0.2c-0.1,0.3-0.2,0.5-0.3,0.6l-0.4-0.1c0-0.1,0-0.2,0-0.4c0-0.2,0-0.3,0-0.5 c0.6-0.4,1.1-0.6,1.4-0.8c0.3-0.1,0.6-0.1,0.9-0.1c0.5,0,1,0.1,1.3,0.3c0.4,0.2,0.6,0.5,0.8,0.8c0.1,0.3,0.2,0.6,0.2,1l0,1.2v2 c0,0.2,0,0.4,0.1,0.5c0,0.1,0.1,0.1,0.1,0.1C56.5,21.7,56.6,21.7,56.7,21.7z M55.1,18.5c-0.6,0.1-1.1,0.2-1.5,0.3 c-0.4,0.1-0.7,0.2-0.9,0.4c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.4,0.3,0.8,0.3 c0.3,0,0.6-0.1,0.9-0.3c0.3-0.2,0.6-0.4,0.9-0.8V18.5z M61.9,15.7v0.4c0.5,0,0.8,0.1,0.9,0.1c0.1,0,0.1,0.1,0.1,0.2 c0,0.1,0,0.1,0,0.2c-0.1,0.3-0.2,0.7-0.4,1.2c-0.4,0.9-0.6,1.4-0.6,1.5l-0.7,1.5c-0.1-0.2-0.2-0.5-0.5-1.1l-0.2-0.5l-0.8-2.1 c-0.2-0.4-0.3-0.7-0.3-0.9c0-0.1,0-0.2,0.1-0.2c0.1,0,0.4-0.1,0.9-0.1v-0.4c-0.7,0-1.2,0-1.6,0c-0.3,0-0.9,0-1.6,0v0.4 c0.3,0,0.4,0,0.5,0c0.1,0,0.1,0.1,0.2,0.1c0.1,0.1,0.1,0.2,0.2,0.4l1.4,3.2l0.6,1.3c0.1,0.2,0.2,0.5,0.4,0.9h0.7 c0.7-1.6,1.1-2.5,1.2-2.8L63,18c0.4-0.9,0.7-1.4,0.7-1.5c0.1-0.2,0.2-0.3,0.3-0.3c0.1-0.1,0.3-0.1,0.6-0.1v-0.4c-0.7,0-1.1,0-1.3,0 C63,15.8,62.6,15.7,61.9,15.7z M67.4,21.6c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.3-0.1-0.5c0-0.1,0-0.7,0-1.9v-1.2c0-0.5,0-1.3,0.1-2.2 l-0.2-0.1c-0.6,0.3-1.3,0.5-2.2,0.6v0.4c0.5,0,0.8,0,0.9,0.1c0.1,0,0.1,0.1,0.1,0.2c0,0.1,0.1,0.5,0.1,1.2v1.2c0,1.2,0,1.9,0,2 c0,0.2,0,0.4-0.1,0.5c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.1,0-0.2,0.1l-0.7,0v0.4c0.8,0,1.4,0,1.8,0c0.4,0,1,0,1.7,0v-0.4 c-0.5,0-0.7,0-0.8,0C67.5,21.7,67.4,21.7,67.4,21.6z M66.5,14.1c0.2,0,0.4-0.1,0.5-0.2c0.2-0.1,0.2-0.3,0.2-0.5 c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.2-0.3-0.2-0.5-0.2s-0.4,0.1-0.5,0.2c-0.2,0.1-0.2,0.3-0.2,0.5c0,0.2,0.1,0.4,0.2,0.5 C66.1,14,66.3,14.1,66.5,14.1z M73.3,18.7c-0.2-0.1-0.6-0.2-1.2-0.4L71,18.1c-0.2-0.1-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.2-0.3-0.3 c-0.1-0.1-0.1-0.3-0.1-0.5c0-0.3,0.1-0.6,0.4-0.8c0.2-0.2,0.6-0.4,1-0.4c0.3,0,0.5,0,0.7,0.1c0.2,0.1,0.4,0.2,0.5,0.2 c0.1,0.1,0.2,0.2,0.3,0.3c0,0.1,0.1,0.2,0.1,0.3s0.1,0.3,0.1,0.7h0.4c0-0.5,0-1,0.1-1.5c-0.2-0.1-0.5-0.2-0.9-0.3 c-0.4-0.1-0.7-0.1-1-0.1c-0.5,0-0.9,0.1-1.3,0.3c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.3,0.6-0.3,1c0,0.2,0,0.5,0.1,0.7 c0.1,0.2,0.2,0.4,0.4,0.5c0.2,0.1,0.4,0.3,0.6,0.3c0.2,0.1,0.5,0.2,1.1,0.3c0.6,0.1,1,0.2,1.1,0.3c0.2,0.1,0.3,0.2,0.4,0.3 c0.1,0.1,0.1,0.3,0.1,0.5c0,0.4-0.1,0.8-0.4,1c-0.3,0.2-0.7,0.4-1.1,0.4c-0.3,0-0.5,0-0.6,0c-0.1,0-0.3-0.1-0.4-0.1 c-0.1-0.1-0.3-0.1-0.4-0.2c-0.1-0.1-0.2-0.2-0.3-0.4c-0.1-0.1-0.1-0.3-0.1-0.5c0-0.2,0-0.4,0-0.6h-0.4c0,0.6,0,1,0,1.2 c0,0.2,0,0.4-0.1,0.6c0,0,0,0.1,0,0.1s0,0.1,0,0.1c0,0,0.2,0.1,0.6,0.1c0.7,0.1,1.2,0.2,1.6,0.2c0.9,0,1.5-0.2,2-0.7 c0.5-0.5,0.8-1,0.8-1.6c0-0.3-0.1-0.6-0.2-0.8C73.7,19,73.6,18.8,73.3,18.7z M79.1,13.8c0.3-0.3,0.7-0.6,1.2-0.7 c0.4-0.2,1-0.2,1.6-0.2c0.9,0,1.5,0.1,2,0.3c0.4,0.2,0.7,0.5,0.7,1l0,0.8H85c0-0.5,0.1-1,0.1-1.3c0-0.2,0.1-0.5,0.2-0.7 c-0.1,0-0.4-0.1-0.9-0.2c-0.5-0.1-0.9-0.2-1.3-0.3c-0.4,0-0.7-0.1-1.1-0.1c-1.7,0-3.1,0.5-4.1,1.4c-1,1-1.5,2.2-1.5,3.6 c0,0.6,0.1,1.1,0.2,1.6c0.1,0.5,0.4,0.9,0.7,1.3c0.3,0.4,0.7,0.8,1.1,1.1c0.5,0.3,1,0.6,1.6,0.8c0.6,0.2,1.3,0.3,2,0.3 c0.6,0,1.2-0.1,1.7-0.2c0.5-0.1,1-0.3,1.6-0.6l0.3-0.6l-0.1-0.1c-0.4,0.3-0.7,0.4-1.1,0.6c-0.5,0.2-1.1,0.3-1.7,0.3 c-1.4,0-2.5-0.4-3.3-1.3c-0.8-0.8-1.3-1.9-1.3-3.3c0-0.8,0.1-1.4,0.3-2C78.4,14.5,78.7,14.1,79.1,13.8z M91.8,16.4 c0.6,0.6,0.9,1.4,0.9,2.3c0,0.7-0.2,1.3-0.5,1.8c-0.3,0.6-0.7,1-1.3,1.3c-0.6,0.3-1.2,0.5-1.9,0.5c-0.5,0-1-0.1-1.3-0.3 c-0.4-0.2-0.7-0.4-0.9-0.7c-0.2-0.3-0.4-0.5-0.5-0.8c-0.2-0.5-0.3-1-0.3-1.6c0-1,0.3-1.8,1-2.5c0.6-0.6,1.5-1,2.5-1 C90.4,15.5,91.2,15.8,91.8,16.4z M91.4,19.3c0-0.7-0.1-1.3-0.3-1.9c-0.2-0.5-0.5-0.9-0.8-1.1c-0.3-0.2-0.7-0.3-1.1-0.3 c-0.6,0-1,0.2-1.4,0.6c-0.3,0.4-0.5,1-0.5,1.9c0,0.6,0.1,1.1,0.3,1.7c0.2,0.6,0.5,1,0.8,1.3c0.4,0.3,0.7,0.4,1.1,0.4 c0.5,0,1-0.2,1.3-0.6C91.2,20.8,91.4,20.2,91.4,19.3z M104.9,21.7c-0.5,0-0.7,0-0.8,0c-0.1,0-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.1 c0-0.1-0.1-0.3-0.1-0.5c0-0.1,0-0.4,0-1l0-0.9v-0.7c0-0.8,0-1.3-0.1-1.5c-0.1-0.3-0.3-0.7-0.7-0.9c-0.4-0.3-0.8-0.4-1.3-0.4 c-0.2,0-0.4,0-0.6,0.1c-0.2,0.1-0.4,0.1-0.5,0.2c-0.1,0-0.2,0.1-0.3,0.3l-0.8,0.7c-0.2-0.4-0.4-0.7-0.8-0.9 c-0.3-0.2-0.7-0.3-1.2-0.3c-0.2,0-0.4,0-0.6,0.1c-0.2,0-0.3,0.1-0.4,0.2c0,0-0.1,0.1-0.2,0.2l-0.9,0.8c0-0.4,0-0.8,0-1 c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0-0.1,0c0,0-0.1,0-0.2,0.1c-0.4,0.2-1.1,0.4-2,0.5v0.4c0.5,0,0.8,0,0.9,0 c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0.2,0.1,0.5c0,0.4,0,0.8,0,1.2v0.8c0,1.2,0,1.9,0,2c0,0.2,0,0.4-0.1,0.5c0,0-0.1,0.1-0.1,0.1 c-0.1,0-0.1,0-0.2,0.1l-0.7,0v0.4c0.8,0,1.4,0,1.8,0c0.4,0,1,0,1.6,0v-0.4c-0.5,0-0.7,0-0.8,0c-0.1,0-0.1,0-0.2-0.1 c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.3-0.1-0.5c0-0.1,0-0.7,0-1.9v-0.4c0-0.4,0-0.8,0.1-1.1c0-0.2,0.1-0.4,0.2-0.6 c0.1-0.2,0.3-0.3,0.6-0.4c0.2-0.1,0.5-0.2,0.8-0.2c0.3,0,0.6,0.1,0.8,0.2c0.2,0.2,0.4,0.4,0.5,0.6c0.1,0.3,0.1,0.7,0.1,1.3v0.5 c0,1.2,0,1.9,0,2c0,0.2,0,0.4-0.1,0.5c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.1,0-0.2,0.1l-0.7,0v0.4c0.9,0,1.5,0,1.8,0c0.4,0,0.9,0,1.6,0 v-0.4c-0.5,0-0.7,0-0.8,0c-0.1,0-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.3-0.1-0.5c0-0.1,0-0.4,0-1l0-0.9v-0.5 c0-0.7,0-1.1,0.1-1.3c0.1-0.2,0.2-0.4,0.4-0.6c0.3-0.2,0.6-0.3,1-0.3c0.3,0,0.6,0.1,0.9,0.3c0.2,0.2,0.4,0.4,0.5,0.7 c0.1,0.3,0.1,0.8,0.1,1.6v0.6l0,0.7l-0.1,1.9c0.6,0,1,0,1.2,0c0.2,0,0.6,0,1.2,0V21.7z M112.1,17c0.2,0.4,0.3,0.9,0.3,1.3 c0,0.3,0,0.6-0.1,0.8c-0.1,0.3-0.2,0.5-0.3,0.7c-0.1,0.2-0.2,0.4-0.3,0.6c-0.1,0.2-0.2,0.3-0.4,0.4c-0.1,0.1-0.2,0.2-0.5,0.4 c-0.3,0.2-0.5,0.4-0.9,0.6c-0.3,0.2-0.5,0.3-0.6,0.3c-0.3,0.1-0.5,0.1-0.8,0.1c-0.2,0-0.4,0-0.7-0.1c-0.2-0.1-0.5-0.1-0.7-0.3V23 c0,1.1,0,1.8,0,1.9c0,0.2,0,0.4,0.1,0.5c0,0,0,0.1,0.1,0.1c0,0,0.1,0.1,0.2,0.1c0,0,0.3,0,0.8,0V26c-0.6,0-1.3,0-2.3,0 c-0.5,0-0.9,0-1.2,0v-0.4l0.7,0c0.1,0,0.2,0,0.2-0.1c0.1,0,0.1-0.1,0.1-0.1c0.1-0.1,0.1-0.3,0.1-0.5c0-0.1,0-0.7,0-1.9v-2.4 c0-0.8,0-1.6,0-2.4c0-0.8,0-1.3-0.1-1.4c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.2-0.1l-0.8,0v-0.4c0.1,0,0.3,0,0.5-0.1 c0.3,0,0.6-0.1,0.9-0.2c0.3-0.1,0.6-0.2,0.7-0.3c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.2 c0,0.1,0,0.3,0,0.4v0.7c0.8-0.7,1.2-1.1,1.4-1.2c0.2-0.1,0.6-0.2,1.1-0.2c0.6,0,1.1,0.1,1.5,0.4C111.7,16.2,112,16.5,112.1,17z M111.2,18.8c0-0.5-0.1-0.9-0.3-1.3c-0.2-0.4-0.5-0.6-0.8-0.8c-0.3-0.2-0.7-0.3-1-0.3c-0.3,0-0.5,0.1-0.8,0.2 c-0.3,0.1-0.5,0.3-0.7,0.4c-0.2,0.2-0.3,0.4-0.4,0.6c0,0.1,0,0.3,0,0.5v2.6c0.2,0.2,0.5,0.4,0.8,0.6c0.3,0.1,0.6,0.2,1,0.2 c0.4,0,0.8-0.1,1.1-0.3c0.3-0.2,0.6-0.5,0.8-1C111.1,19.8,111.2,19.3,111.2,18.8z M118.9,21.7l0.4,0v0.4c-0.4,0-0.7,0-1,0 c-0.3,0-0.6,0-1.1,0l0-1.2c-0.9,0.7-1.5,1.1-1.6,1.2c-0.2,0.1-0.4,0.1-0.7,0.1c-0.5,0-1-0.1-1.3-0.4c-0.3-0.3-0.5-0.7-0.5-1.2 c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.2-0.5,0.4-0.6c0.1-0.2,0.3-0.3,0.5-0.3c0.3-0.1,0.7-0.3,1.3-0.4c0.6-0.1,1.2-0.2,1.8-0.3 c0-0.4,0-0.8-0.2-1c-0.1-0.2-0.3-0.4-0.6-0.6c-0.3-0.2-0.6-0.2-0.9-0.2c-0.3,0-0.5,0-0.7,0.1c-0.2,0.1-0.3,0.1-0.4,0.2l-0.1,0.2 c-0.1,0.3-0.2,0.5-0.3,0.6l-0.4-0.1c0-0.1,0-0.2,0-0.4c0-0.2,0-0.3,0-0.5c0.6-0.4,1.1-0.6,1.4-0.8c0.3-0.1,0.6-0.1,0.9-0.1 c0.5,0,1,0.1,1.3,0.3c0.4,0.2,0.6,0.5,0.8,0.8c0.1,0.3,0.2,0.6,0.2,1l0,1.2v2c0,0.2,0,0.4,0.1,0.5c0,0.1,0.1,0.1,0.1,0.1 C118.7,21.7,118.8,21.7,118.9,21.7z M117.3,18.5c-0.6,0.1-1.1,0.2-1.5,0.3c-0.4,0.1-0.7,0.2-0.9,0.4c-0.1,0.1-0.2,0.2-0.3,0.3 c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.4,0.3,0.8,0.3c0.3,0,0.6-0.1,0.9-0.3c0.3-0.2,0.6-0.4,0.9-0.8V18.5z M126.5,21.6c0-0.1-0.1-0.1-0.1-0.3c0-0.2,0-0.6,0-1.2v-1.2c0-0.9,0-1.5,0-1.7c-0.1-0.3-0.2-0.6-0.3-0.9c-0.2-0.2-0.4-0.4-0.7-0.6 c-0.3-0.1-0.7-0.2-1-0.2c-0.3,0-0.7,0.1-1.1,0.2l-1.3,1.1c0-0.5,0-0.9,0-1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0-0.1,0 c0,0-0.1,0-0.2,0.1c-0.4,0.2-1.1,0.4-2,0.5v0.4c0.5,0,0.8,0,0.9,0c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0.2,0.1,0.5c0,0.4,0,0.8,0,1.2v0.8 c0,1.2,0,1.9,0,2c0,0.2,0,0.4-0.1,0.5c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.1,0-0.2,0.1l-0.7,0v0.4c0.9,0,1.5,0,1.9,0c0.4,0,1,0,1.5,0v-0.4 c-0.5,0-0.7,0-0.8,0c-0.1,0-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.1c0-0.1-0.1-0.3-0.1-0.5c0-0.1,0-0.7,0-1.9v-0.8c0-0.5,0.1-0.9,0.2-1.1 c0.1-0.2,0.3-0.4,0.6-0.6c0.3-0.2,0.6-0.2,0.9-0.2c0.4,0,0.7,0.1,1,0.3c0.3,0.2,0.4,0.4,0.5,0.7c0.1,0.2,0.1,0.7,0.1,1.4V20 c0,0.3,0,1-0.1,2.1c0.6,0,1,0,1.3,0c0.3,0,0.7,0,1.1,0v-0.4l-0.7,0C126.6,21.7,126.5,21.7,126.5,21.6z M129.8,13.8 c0.2-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.2-0.3-0.2-0.5-0.2s-0.4,0.1-0.5,0.2c-0.2,0.1-0.2,0.3-0.2,0.5 c0,0.2,0.1,0.4,0.2,0.5c0.1,0.2,0.3,0.2,0.5,0.2C129.4,14.1,129.6,14,129.8,13.8z M130.1,21.6c0,0-0.1-0.1-0.1-0.1 c0-0.1-0.1-0.3-0.1-0.5c0-0.1,0-0.7,0-1.9v-1.2c0-0.5,0-1.3,0.1-2.2l-0.2-0.1c-0.6,0.3-1.3,0.5-2.2,0.6v0.4c0.5,0,0.8,0,0.9,0.1 c0.1,0,0.1,0.1,0.1,0.2c0,0.1,0.1,0.5,0.1,1.2v1.2c0,1.2,0,1.9,0,2c0,0.2,0,0.4-0.1,0.5c0,0-0.1,0.1-0.1,0.1c-0.1,0-0.1,0-0.2,0.1 l-0.7,0v0.4c0.8,0,1.4,0,1.8,0c0.4,0,1,0,1.7,0v-0.4c-0.5,0-0.7,0-0.8,0C130.2,21.7,130.1,21.7,130.1,21.6z M137,16.8 c0.2,0.4,0.3,0.9,0.3,1.4c0,0.1,0,0.3,0,0.5c-0.3,0.1-0.6,0.1-0.9,0.1c-0.5,0-1,0.1-1.5,0.1h-2.2c0,0.7,0.1,1.2,0.3,1.6 c0.2,0.4,0.5,0.7,0.9,0.9c0.4,0.2,0.8,0.3,1.2,0.3c0.3,0,0.6,0,0.8-0.1c0.3-0.1,0.6-0.3,1-0.5l0.1,0.1l-0.2,0.5 c-0.3,0.2-0.5,0.3-0.7,0.4c-0.2,0.1-0.5,0.2-0.7,0.2c-0.3,0.1-0.6,0.1-0.9,0.1c-0.6,0-1.1-0.1-1.6-0.4c-0.5-0.2-0.9-0.6-1.1-1.1 c-0.3-0.5-0.4-1.1-0.4-1.7c0-0.5,0.1-1,0.2-1.4c0.1-0.4,0.3-0.7,0.5-0.9c0.1-0.1,0.3-0.3,0.6-0.5c0.3-0.2,0.6-0.3,0.8-0.4 c0.4-0.2,0.7-0.2,1.2-0.2c0.5,0,1,0.1,1.4,0.3C136.5,16.1,136.8,16.4,137,16.8z M136,18.1c0-0.7-0.1-1.2-0.4-1.6 c-0.3-0.3-0.7-0.5-1.2-0.5c-0.5,0-0.9,0.2-1.2,0.6c-0.3,0.4-0.5,0.9-0.5,1.7c0.1,0,0.4,0,0.7,0c0.7,0,1.1,0,1.4,0c0.6,0,1,0,1.2,0 C136,18.2,136,18.1,136,18.1z M142.2,18.7c-0.2-0.1-0.6-0.2-1.2-0.4l-1.1-0.3c-0.2-0.1-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.2-0.3-0.3 c-0.1-0.1-0.1-0.3-0.1-0.5c0-0.3,0.1-0.6,0.4-0.8c0.2-0.2,0.6-0.4,1-0.4c0.3,0,0.5,0,0.7,0.1c0.2,0.1,0.4,0.2,0.5,0.2 c0.1,0.1,0.2,0.2,0.3,0.3c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.3,0.1,0.7h0.4c0-0.5,0-1,0.1-1.5c-0.2-0.1-0.5-0.2-0.9-0.3 c-0.4-0.1-0.7-0.1-1-0.1c-0.5,0-0.9,0.1-1.3,0.3c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.3,0.6-0.3,1c0,0.2,0,0.5,0.1,0.7 c0.1,0.2,0.2,0.4,0.4,0.5c0.2,0.1,0.4,0.3,0.6,0.3c0.2,0.1,0.5,0.2,1.1,0.3c0.6,0.1,1,0.2,1.1,0.3c0.2,0.1,0.3,0.2,0.4,0.3 c0.1,0.1,0.1,0.3,0.1,0.5c0,0.4-0.1,0.8-0.4,1c-0.3,0.2-0.7,0.4-1.1,0.4c-0.3,0-0.5,0-0.6,0c-0.1,0-0.3-0.1-0.4-0.1 c-0.1-0.1-0.3-0.1-0.4-0.2c-0.1-0.1-0.2-0.2-0.3-0.4c-0.1-0.1-0.1-0.3-0.1-0.5c0-0.2,0-0.4,0-0.6h-0.4c0,0.6,0,1,0,1.2 c0,0.2,0,0.4-0.1,0.6c0,0,0,0.1,0,0.1s0,0.1,0,0.1c0,0,0.2,0.1,0.6,0.1c0.7,0.1,1.2,0.2,1.6,0.2c0.9,0,1.5-0.2,2-0.7 c0.5-0.5,0.8-1,0.8-1.6c0-0.3-0.1-0.6-0.2-0.8C142.6,19,142.4,18.8,142.2,18.7z M117.2,0v0.6h41.2V29h0.6V0H117.2z M0.6,7.8H0v29 h41.8v-0.6H0.6V7.8z"/>
		</svg>);
	}
}
