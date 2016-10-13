import React from 'react';

export default class CPP extends React.Component {
	render () {
		var widthHeight = {};
		if (this.props.width) {
			widthHeight.width = this.props.width;
		}
		if (this.props.height) {
			widthHeight.height = this.props.height;
		}
		return (<svg viewBox="0 0 129.5 32" {...widthHeight}>
			<path fill="none" d="M44,0h0.8v32.2H44V0z M56.8,8.4c0.4-0.9,0.8-2.2,0.8-2.2l-0.2-0.1c-0.2,0.5-0.6,1.1-0.9,1.4 c-0.4,0.3-0.8,0.5-1.4,0.5c-1.3,0-2.3-0.8-2.8-1.9c-0.2-0.4-0.3-1-0.3-1.7c0-1.9,1.3-2.9,2.7-2.9c0.7,0,1.4,0.1,1.9,0.7 c0.3,0.3,0.3,1.2,0.3,1.2h0.2c0-0.4,0.2-2.1,0.2-2.1l-0.2,0c0,0-0.1,0.2-0.3,0.2c-0.2,0-1-0.3-2.1-0.3c-2.6,0-4.3,1.6-4.3,3.7 c0,2.4,2.2,3.6,4.3,3.6c0.8,0,1.2-0.1,1.6-0.1C56.7,8.4,56.8,8.4,56.8,8.4 M61.9,5.8c1,0,3.1-0.5,3.1-2.4c0-0.7-0.3-1.2-0.9-1.6 c-0.6-0.4-1.5-0.6-2.8-0.6c-0.9,0-2.8,0-2.8,0v0.2c0,0,0.5,0,0.9,0.2c0.2,0.1,0.5,0.3,0.5,1.3c0,0.6,0,1,0,1.5c0,0.5,0,1.5,0,2 c0,0.6,0,1-0.4,1.3c-0.3,0.2-1,0.3-1,0.3v0.2h4.1V8.1c0,0-0.6,0-1-0.3c-0.3-0.2-0.4-0.8-0.4-1.3c0-0.6,0-1.4,0-2.1 c0-0.9,0.1-2.8,0.1-2.8c1,0,2.4,0.6,2.4,2.1c0,1.2-0.9,1.7-1.8,1.8v0.2H61.9 M69.2,5.8c1,0,3.1-0.5,3.1-2.4c0-0.7-0.3-1.2-0.9-1.6 c-0.6-0.4-1.5-0.6-2.8-0.6c-0.9,0-2.8,0-2.8,0v0.2c0,0,0.5,0,0.9,0.2c0.2,0.1,0.5,0.3,0.5,1.3c0,0.6,0,1,0,1.5c0,0.5,0,1.5,0,2 c0,0.6,0,1-0.4,1.3c-0.3,0.2-1,0.3-1,0.3v0.2h4.1V8.1c0,0-0.6,0-1-0.3c-0.3-0.2-0.4-0.8-0.4-1.3c0-0.6,0-1.4,0-2.1 c0-0.9,0.1-2.8,0.1-2.8c1,0,2.4,0.6,2.4,2.1c0,1.2-0.9,1.7-1.8,1.8v0.2H69.2 M54.5,19.6v-0.2c0,0-0.9-0.1-1.1-0.3 c-0.3-0.2-0.3-0.8-0.4-1.3c0-0.4,0-1.2,0-1.8c0-0.6,0-1.3,0-1.8c0-0.6,0-1,0.4-1.3c0.3-0.2,1.1-0.3,1.1-0.3v-0.2h-4.1v0.2 c0,0,0.6,0,0.9,0.2c0.4,0.2,0.5,0.7,0.5,1.3c0,0.5,0,1.3,0,1.8c0,0.4,0,1.3,0,1.7c0,0.5,0,1-0.4,1.3c-0.2,0.2-1,0.3-1,0.3v0.2H54.5z M79.6,17.2c-0.2,0.6-0.4,1.1-0.8,1.5c-0.4,0.3-1,0.5-1.5,0.5c-0.6,0-0.9-0.1-1-0.4c-0.1-0.3-0.1-0.7-0.1-1.1c0-0.3,0-1.4,0-1.4h1 c0.4,0,0.7,0.1,0.8,0.2c0.2,0.2,0.3,0.7,0.3,0.9h0.2v-2.5h-0.2c-0.1,0.3-0.2,0.7-0.3,0.8c-0.1,0.1-0.4,0.1-0.8,0.1 c-0.4,0-1.1,0-1.1,0s0-1.6,0-2.8c0.5,0,1,0,1.2,0c0.5,0,0.9,0.1,1.2,0.3c0.3,0.3,0.4,0.8,0.4,1h0.2l0-2H79c-0.1,0.1-0.2,0.2-0.8,0.2 h-2.8c-0.8,0-2,0-2,0v0h-3.1v0.2c0.2,0,0.8,0,0.8,0.5c0,0.2-0.1,0.5-0.3,1c-0.8,1.9-1.6,3.6-1.6,3.6s-0.9-1.7-1.7-3.6 c-0.2-0.4-0.3-0.7-0.3-0.9c0-0.5,0.5-0.5,0.7-0.6v-0.2h-3.6h-0.1h-3.2v0.2c0,0,0.5,0,0.9,0.2c0.3,0.1,0.4,0.4,0.5,1.3 c0.1,1.3,0.1,3.4,0.1,3.4s-2.6-2.7-4.4-4.6c0-0.3,0.6-0.3,0.6-0.3v-0.2h-3.5v0.2c0.6,0.1,1,0.1,1.7,0.9c0,0,0,3.1-0.1,4 c0,0.9-0.1,1.3-0.4,1.5c-0.3,0.2-1,0.2-1,0.2v0.2h3.4v-0.2c0,0-0.6,0-1-0.3c-0.3-0.1-0.3-0.6-0.4-1.7c0-0.9,0-3.2,0-3.2l0,0 c1.5,1.6,5.2,5.5,5.2,5.5l0.4,0c0,0,0-0.9,0-1.1c0-1.9,0-3.3,0-4.2c0-1.1,0.2-1.2,0.5-1.4c0.3-0.1,0.6-0.2,0.8-0.2 c0.2,0,0.6,0.1,0.9,0.2c0.3,0.2,0.6,0.6,1,1.3c1.1,2.3,1.6,3.4,2.4,5.4l0.3-0.1c0.2-0.5,1.7-3.6,2.5-5.3c0.4-0.9,0.7-1.1,1-1.3 c0.3-0.2,0.9-0.2,0.9-0.2v0c0.4,0.1,0.8,0.2,1,0.3c0.3,0.2,0.3,0.7,0.3,1.2c0,0.5,0,1.1,0,1.6c0,0.5,0,1.4,0,2c0,0.4,0,0.9-0.2,1.1 c-0.2,0.2-0.5,0.3-1.1,0.4v0.2h5.8c0.3-0.9,0.6-2.4,0.6-2.4L79.6,17.2z M83.1,19.7c1.6,0,2.8-0.8,2.8-2.2c0-1.4-1.4-1.8-2.3-2.3 c-0.6-0.3-1.1-0.6-1.1-1.3c0-0.8,0.7-1.1,1.2-1.1c0.5,0,0.9,0.1,1.3,0.6c0.3,0.3,0.3,0.7,0.4,1l0.2,0l-0.1-1.9h-0.2 c0,0-0.1,0.2-0.3,0.2c-0.3,0-0.7-0.3-1.5-0.3c-1.3,0-2.3,0.8-2.3,1.8c0,1.5,1.2,1.8,2.2,2.4c0.8,0.4,1.2,0.6,1.2,1.4 c0,0.9-0.8,1.3-1.5,1.3c-0.7,0-1.2-0.4-1.5-0.7c-0.2-0.3-0.4-0.7-0.5-1.2l-0.2,0l0.2,2.2h0.2l0.2-0.3C81.4,19.3,82.1,19.7,83.1,19.7 M94,12.3l-0.2,0c-0.2,0.4-0.5,0.4-1.4,0.4c-0.9,0-1.5,0-2.1,0c-0.7,0-1.3,0-2.3,0c-1,0-1-0.2-1-0.4l-0.2,0l-0.6,2l0.2,0 c0,0,0.2-0.5,0.4-0.8c0.2-0.2,0.4-0.4,1-0.4c0.9,0,1.5,0,1.5,0s0,2,0,2.6c0,0.6,0,1.2,0,1.9c0,1.1-0.1,1.4-0.4,1.5 c-0.3,0.2-1,0.2-1,0.2v0.2h4.2v-0.2c0,0-0.7-0.1-1-0.2c-0.3-0.2-0.4-0.4-0.4-1.5c0-0.5,0-1.4,0-1.9c0-0.7,0-2.6,0-2.6s0.7,0,1.5,0 c1,0,1,0.2,1,0.6c0,0.2-0.1,0.6-0.1,0.6l0.2,0L94,12.3z M104.8,19.6v-0.2c-0.4-0.1-0.6-0.1-0.7-0.2c-0.3-0.1-0.6-0.2-0.7-1.4 c-0.1-0.9-0.3-3.1-0.3-3.9c0-0.7,0.2-0.9,0.5-1c0.3-0.1,0.6-0.1,0.6-0.1v-0.2h-3.5v0.2c0,0,0.9,0,1,0.6c-0.8,1.6-1.6,3-2.3,4.3 c-0.7-1.7-2-4.1-2-4.3c0-0.4,0.9-0.5,0.9-0.5v-0.2h-3.5v0.2c0.7,0.1,1,0.3,1.3,0.9c0,0.6-0.4,3.3-0.5,3.8c-0.1,0.9-0.3,1.5-0.7,1.7 c-0.3,0.1-0.9,0.2-0.9,0.2v0.2h3.4v-0.2c0,0-0.6-0.1-0.9-0.2C96.1,19,96,19,96,18.4c0-1.2,0.4-4.1,0.4-4.1h0 c0.2,0.6,1.3,2.7,1.9,4.2c0.2,0.4,0.4,1.1,0.4,1.1h0.2c0,0,0.2-0.7,0.6-1.5c0.9-1.7,1.8-3.2,2.2-4h0c0,1.2,0.3,3,0.3,4 c0,0.5,0,0.7-0.3,1c-0.3,0.3-1.1,0.3-1.1,0.3v0.2H104.8z M111.3,19.6c0.3-0.9,0.6-2.4,0.6-2.4l-0.2,0c-0.2,0.6-0.4,1.1-0.8,1.5 c-0.4,0.3-1,0.5-1.5,0.5c-0.6,0-0.9-0.1-1-0.4c-0.1-0.3-0.1-0.7-0.1-1.1c0-0.3,0-1.4,0-1.4h1c0.4,0,0.7,0.1,0.8,0.2 c0.2,0.2,0.3,0.7,0.3,0.9h0.2v-2.5h-0.2c-0.1,0.3-0.2,0.7-0.3,0.8c-0.1,0.1-0.4,0.1-0.8,0.1c-0.4,0-1.1,0-1.1,0s0-1.6,0-2.8 c0.5,0,1,0,1.2,0c0.5,0,0.9,0.1,1.2,0.3c0.3,0.3,0.4,0.8,0.4,1h0.2l0-2h-0.2c-0.1,0.1-0.2,0.2-0.8,0.2h-2.8c-0.8,0-2,0-2,0v0.2 c0.5,0.1,0.8,0.2,1,0.3c0.3,0.2,0.3,0.7,0.3,1.2c0,0.5,0,1.1,0,1.6c0,0.5,0,1.4,0,2c0,0.4,0,0.9-0.2,1.1c-0.2,0.2-0.5,0.3-1.1,0.4 v0.2H111.3 M120.8,13c0.3-0.2,0.8-0.2,0.8-0.2v-0.2h-3.3v0.2c0,0,0.5,0,0.9,0.2c0.3,0.1,0.4,0.4,0.5,1.3c0.1,1.3,0.1,3.4,0.1,3.4 s-2.6-2.7-4.4-4.6c0-0.3,0.6-0.3,0.6-0.3v-0.2h-3.5v0.2c0.6,0.1,1,0.1,1.7,0.9c0,0,0,3.1-0.1,4c0,0.9-0.1,1.3-0.4,1.5 c-0.3,0.2-1,0.2-1,0.2v0.2h3.4v-0.2c0,0-0.6,0-1-0.3c-0.3-0.1-0.3-0.6-0.4-1.7c0-0.9,0-3.2,0-3.2l0,0c1.5,1.6,5.2,5.5,5.2,5.5l0.4,0 c0,0,0-0.9,0-1.1c0-1.9,0-3.3,0-4.2C120.4,13.3,120.5,13.1,120.8,13 M129.5,12.3l-0.2,0c-0.2,0.4-0.5,0.4-1.4,0.4 c-0.9,0-1.5,0-2.1,0c-0.7,0-1.3,0-2.3,0c-1,0-1-0.2-1-0.4l-0.2,0l-0.6,2l0.2,0c0,0,0.2-0.5,0.4-0.8c0.2-0.2,0.4-0.4,1-0.4 c0.9,0,1.5,0,1.5,0s0,2,0,2.6c0,0.6,0,1.2,0,1.9c0,1.1-0.1,1.4-0.4,1.5c-0.3,0.2-1,0.2-1,0.2v0.2h4.2v-0.2c0,0-0.7-0.1-1-0.2 c-0.3-0.2-0.4-0.4-0.4-1.5c0-0.5,0-1.4,0-1.9c0-0.7,0-2.6,0-2.6s0.7,0,1.5,0c1,0,1,0.2,1,0.6c0,0.2-0.1,0.6-0.1,0.6l0.2,0 L129.5,12.3z M57,28.9c0,1.3-1.4,2-2.9,2c-0.5,0-1.2,0-1.8,0h-2.1v-0.2c0,0,0.7,0,1-0.3c0.2-0.1,0.3-0.4,0.4-1c0.1-0.9,0-1.5,0-2.1 c0-0.4,0-1.6,0-2c0-0.8-0.2-0.9-0.3-1c-0.2-0.2-1-0.3-1-0.3v-0.2c0,0,2.2,0,3.4,0c2,0,2.7,0.7,2.7,1.5c0,1.2-1.4,1.6-1.7,1.7v0 C56,27.2,57,27.7,57,28.9 M55.6,29c0-1.1-1-1.6-2.2-1.6v-0.3c1,0,1.7-0.5,1.7-1.4c0-1.5-1.4-1.5-2-1.5c0,0-0.1,1.1-0.1,3 c0,1,0,1.8,0,2.3c0.1,0.7,0.5,1,1.1,1C54.6,30.5,55.6,30.4,55.6,29 M65.9,27.3c0,2.1-1.8,3.7-4,3.7c-2.3,0-4-1.4-4-3.7 c0-2.2,1.8-3.7,4-3.7C64.3,23.7,65.9,25.1,65.9,27.3 M64.3,27.3c0-0.8-0.2-1.5-0.5-2.1c-0.4-0.7-1-1.1-1.8-1.1c-0.9,0-1.6,0.5-2,1.4 c-0.3,0.6-0.4,1.1-0.4,1.8c0,0.9,0.2,1.5,0.5,2c0.4,0.7,1.1,1.2,1.9,1.2c0.9,0,1.5-0.5,1.9-1.3C64.1,28.8,64.3,28.2,64.3,27.3 M70.3,27.6L69.2,25h0l-0.9,2.5H70.3z M72.2,29c0.4,1,0.6,1.2,0.9,1.4c0.2,0.2,0.6,0.2,0.9,0.2v0.2h-4v-0.2c0.3,0,1.1,0,1.1-0.6 c0-0.2,0-0.5-0.2-0.8c-0.2-0.5-0.4-1.2-0.4-1.2h-2.4c-0.2,0.4-0.3,0.8-0.4,1.1c-0.1,0.3-0.2,0.6-0.2,0.8c0,0.6,0.8,0.6,1,0.6v0.2 h-3.2v-0.2c0.3,0,0.7-0.1,1-0.3c0.3-0.2,0.5-0.7,0.8-1.4c0.5-1.1,1.8-4.4,1.8-4.4C68.8,24,68.2,24,67.8,24v-0.2h3.4V24 c0,0-0.7,0-0.8,0.4C70.4,24.4,71.9,28.1,72.2,29 M88.1,29.9c0.7-0.7,0.9-1.6,0.9-2.5c0-1-0.6-2-1.4-2.6c-0.9-0.6-1.5-0.6-2.5-0.6 c0,0,0,2,0,3c0,1,0,1.9,0,2.4c0,0.9,0.9,1,1.3,1C87,30.6,87.7,30.3,88.1,29.9 M77.7,27.4c0.6-0.1,1.2-0.7,1.2-1.7 c0-1.3-1.1-1.6-2.1-1.6c0,0,0,1,0,3.1L77.7,27.4 M85.8,23.8c2.4,0,4.8,1,4.8,3.5c0,2-1.7,3.6-4.2,3.6c-0.6,0-1.4-0.1-2.1-0.1 c-0.6,0-1.1,0-1.5,0c-0.3,0-0.8,0.1-1.2,0.1c-1.2,0-2.2-0.4-2.9-1.4c-0.5-0.7-0.7-1.4-0.9-1.8L76.7,28c0,0,0,0.5,0,1.2 c0,0.3,0,1,0.4,1.2c0.3,0.2,0.9,0.2,0.9,0.2v0.2h-4.1v-0.2c0,0,0.7-0.1,1-0.3c0.3-0.2,0.3-0.3,0.4-1.2c0-0.5,0-1.2,0-1.7 c0-0.7,0-1.6,0-2.1c0-0.8-0.2-1-0.4-1.1c-0.4-0.2-1-0.3-1-0.3v-0.2c0,0,2.2,0,3.1,0c1.7,0,3.1,0.5,3.1,1.8c0,1-0.9,1.5-1.4,1.7 c0,0,0.4,0.9,1.4,2.1c0.2,0.3,0.8,0.7,1.3,0.9c0.4,0.2,0.8,0.3,1,0.3c0.2,0,0.6-0.1,0.8-0.2c0.3-0.2,0.3-0.5,0.4-1.1 c0-0.5,0.1-1.4,0.1-2.1c0-0.5,0-1.4,0-1.8c0-0.9-0.2-1-0.4-1.1c-0.4-0.2-1-0.3-1-0.3v-0.2C82.3,23.8,84.3,23.8,85.8,23.8 M34,15.9 c-0.6,0.9-1.5,1.8-2.5,2.9l-1.8-0.7c2-3.1,2.9-5.8,3.1-8.1c1,0.3,2,0.7,3,1.3c-0.2,1.6-0.7,2.8-1.3,4c-0.8-0.2-1.6-0.3-2.5-0.4 c-0.1,0.1-0.1,0.3-0.2,0.5C32.6,15.5,33.3,15.7,34,15.9 M31.9,9.1c-1.1-0.1-2.3,0-3.6,0.1c0.1-0.9,0.2-1.7,0.1-2.5 c0.9-0.3,1.8-0.4,2.8-0.3C31.5,7.1,31.8,8,31.9,9.1 M27.7,9.3c-1.9,0.3-4,0.9-6,1.8c-0.5-1.3-1.2-2.5-1.9-3.6 c0.8-1.2,1.8-2.1,2.8-2.8c0.6,1.1,1.1,2.5,1.3,4.2c0.1-0.2,0.2-0.3,0.3-0.5c-0.2-1.6-0.6-2.9-1.1-4.1c1-0.6,2-0.9,2.8-0.9 c0.8,0.6,1.3,1.6,1.6,2.8C26.3,7,25.1,8.1,24,9.8c0.3-0.1,0.4-0.1,0.7-0.2c0.9-1.1,1.9-2,2.9-2.6C27.7,7.7,27.7,8.5,27.7,9.3 M19,7.5c-0.7,1.1-1.4,2.3-1.9,3.6c-2-0.9-4.1-1.5-6-1.8C11,8.5,11,7.7,11.1,7c1,0.6,2,1.4,2.9,2.6c0.3,0.1,0.4,0.1,0.7,0.2 c-1.1-1.7-2.3-2.8-3.5-3.5c0.3-1.2,0.8-2.2,1.6-2.8c0.7-0.1,1.7,0.2,2.8,0.9c-0.5,1.2-0.9,2.5-1.1,4.1c0.1,0.2,0.2,0.3,0.3,0.5 c0.2-1.7,0.7-3.1,1.3-4.2C17.2,5.4,18.2,6.4,19,7.5 M10.4,9.2C9.2,9,7.9,9,6.8,9.1c0.1-1.1,0.4-2,0.7-2.7c1-0.1,1.9,0,2.8,0.3 C10.3,7.5,10.3,8.3,10.4,9.2 M16.6,4c0.8-1.1,1.7-1.8,2.7-2.1c1,0.3,2,1,2.7,2.1c-0.9,0.8-1.9,1.8-2.7,3C18.5,5.8,17.5,4.8,16.6,4 M6,10c0.2,2.3,1.1,5,3.1,8.1l-1.8,0.7c-1.1-1.1-1.9-2-2.5-2.9c0.7-0.2,1.4-0.4,2.3-0.6c-0.1-0.2-0.1-0.3-0.2-0.5 c-0.9,0.1-1.7,0.2-2.5,0.4c-0.7-1.2-1.1-2.4-1.3-4C4,10.7,5,10.3,6,10 M13.5,26.2L13.5,26.2c0.4-0.4,0.7-0.7,0.7-1 c0-0.3-0.3-0.6-0.8-0.7c-2.6-0.5-9.8-2.8-12-7.1c0.5-0.4,1.3-0.8,2.5-1.3c1.8,2.5,4.8,5.1,8.7,7.3c0.2,0.1,0.3-0.1,0.2-0.2l-4.5-3.9 l1.8-0.6c0.4-0.1,0.4-0.5,0.3-0.7l-1.8-2.7c-1.2-2.2-1.6-4.1-1.6-5.7c1.3-0.3,2.5-0.3,3.7-0.1c0.2,1,0.6,2,1.2,3l0.1-0.5 c-0.3-0.8-0.6-1.6-0.7-2.4c2.2,0.4,4.2,1.3,5.9,2.3c0.3,0.1,0.5,0.1,0.7-0.3l1.1-2.6c0.2-0.4,0.3-0.7,0.5-1.1 c0.2,0.3,0.4,0.7,0.5,1.1l1.1,2.6c0.2,0.4,0.4,0.4,0.7,0.3c1.7-1,3.6-1.9,5.9-2.3c-0.1,0.8-0.4,1.7-0.7,2.4l0.1,0.5c0.6-1,1-2,1.2-3 c1.2-0.1,2.4-0.1,3.7,0.1c0,1.6-0.4,3.5-1.6,5.7l-1.8,2.7c-0.1,0.2-0.2,0.6,0.3,0.7l1.8,0.6L26,23.3c-0.1,0.1-0.1,0.3,0.2,0.2 c3.9-2.3,6.8-4.9,8.7-7.3c1.2,0.4,2,0.9,2.5,1.3c-0.8,2.5-6.5,6-12,7.1c-0.3,0-0.2,0.3,0,0.3c7-0.5,12.4-4.6,13.4-7.7 c-1-0.7-2.2-1.2-3.4-1.6c1.2-1.8,1.7-3.4,1.6-4.8c-1-0.8-2.4-1.3-4.2-1.6c0-1.5-0.2-2.7-0.6-3.8c-1.1-0.2-2.5-0.1-3.9,0.5 c-0.3-1.7-1-3-1.9-3.7c-1-0.2-2.3,0.3-3.7,1.4c-0.9-1.6-2.1-2.7-3.4-3.1c-1.2,0.4-2.4,1.4-3.4,3.1c-1.4-1-2.7-1.5-3.7-1.4 c-0.9,0.7-1.6,2-1.9,3.7C9,5.3,7.7,5.2,6.6,5.4C6.2,6.5,5.9,7.7,6,9.2c-1.8,0.2-3.3,0.8-4.2,1.6c-0.1,1.3,0.5,3,1.6,4.8 C2.2,15.9,1,16.4,0,17.1c1.2,3.2,5.2,6.5,12.8,7.9c0.4,0.1,0.6,0.2,0.6,0.4c0,0.1-0.1,0.3-0.3,0.4l-0.8,0.7C11.9,26.7,12,27,12.3,27 l5.5-0.4l0.4,4.7c0.1,0.1,0.4,0.1,0.6,0l0.2-4.3c0.1-1.1-0.1-1.5-1-1.4L13.5,26.2L13.5,26.2z M15.4,15.8L15.4,15.8l-0.9-4.4 c0.3,0.1,0.5,0.3,0.8,0.4l1.8,6.7l-4.3-4.3l-0.2,1.3c-0.1,0.6-0.3,0.8-1,0.6l-2.6-0.8c-0.1-0.2-0.3-0.4-0.4-0.6l3.2,0.5l0.5-2.5 L15.4,15.8z M24.3,11.4c-0.3,0.1-0.5,0.3-0.8,0.4l-1.8,6.7l4.3-4.3l0.2,1.3c0.1,0.6,0.3,0.8,1,0.6l2.6-0.8c0.1-0.2,0.3-0.4,0.4-0.6 L27,15.2l-0.5-2.5l-3.1,3.1l0,0L24.3,11.4"/>
		</svg>);
	}
}