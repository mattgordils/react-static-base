import React from 'react';

export default class ARCapital extends React.Component {
	render () {
		var widthHeight = {};
		if (this.props.width) {
			widthHeight.width = this.props.width;
		}
		if (this.props.height) {
			widthHeight.height = this.props.height;
		}
		return (<svg viewBox="0 0 60.5 49" {...widthHeight}>
			<path fill="none" d="M39.6,31.3c1.9-0.1,4.1-0.3,5.6-0.8c1.9-0.7,5.3-3.1,5.3-7.7c0-3.1-2.7-6.8-12.5-6.8l-3.9-0.2c-1,0-3.9,0-5-0.1 L29,14.9l8.8,0c3.8,0,9.3,0,12.5,1.3c2.5,1,4,2.7,4,5.3c0,2.9-3,6.8-6.4,9c0.4,0.9,7.8,13.1,12.5,18.1l-1.9,0.2 C56.6,47.3,44.7,33.2,44,32.2c-1.1,0.1-3,0.2-4.4,0.2 M19.4,2.2L7.1,36.7c-1,2.8-2.1,4.9-4.6,5.2C2.1,41.9,1.3,42,1,42 c-0.3,0-0.5,0.1-0.5,0.3c0,0.3,0.3,0.4,1,0.4c2.6,0,5.5-0.2,6.1-0.2c0.6,0,2.9,0.2,4.2,0.2c0.5,0,0.8-0.1,0.8-0.4 c0-0.2-0.2-0.3-0.5-0.3h-0.5c-0.9,0-2.1-0.5-2.1-1.6c0-1,0.3-2.3,0.8-3.7l3.3-9.8c0.1-0.3,0.3-0.4,0.5-0.4h11.7 c0.3,0,0.4,0.1,0.5,0.3l5.1,13.7c0.3,0.9,0,1.4-0.3,1.5c-0.2,0.1-0.4,0.2-0.4,0.4c0,0.3,0.6,0.3,1.6,0.4c3.7,0.1,7.7,0.1,8.5,0.1 c0.6,0,1.1-0.1,1.1-0.4c0-0.3-0.2-0.3-0.5-0.3c-0.5,0-1.4-0.1-2.2-0.3c-1.1-0.3-2.7-1.2-4.7-6.2C31.2,27.1,22.6,4.1,21.8,2 c-0.7-1.7-0.9-2-1.2-2C20.3,0,20.1,0.3,19.4,2.2 M14.7,24.4c-0.2,0-0.3-0.1-0.2-0.4l4.8-15c0.3-0.8,0.5-0.8,0.8,0l5.2,15 c0.1,0.2,0.1,0.4-0.2,0.4H14.7z M3.5,47.4L3.5,47.4c-0.1,0.1,0,0.1,0,0.2c0,0.1-0.6,0.5-1.3,0.5c-0.8,0-1.4-0.5-1.4-1.2 c0-0.7,0.6-1.2,1.4-1.2c0.6,0,1.2,0.3,1.2,0.5c0,0,0,0,0,0l0.1,0l0.5-0.8l-0.1,0c-0.1,0-0.1,0-0.2,0c-0.2,0-0.7-0.3-1.5-0.3 c-1.3,0-2.1,0.8-2.1,1.8c0,1,0.8,1.8,2,1.8c1,0,1.6-0.6,1.8-0.6c0,0,0.1,0,0.1,0.1l0.1,0L3.5,47.4 M9.7,46.1c0,0,0,0.1,0,0.1l-1,2.1 c-0.1,0.2-0.1,0.3-0.3,0.3v0.1h1v-0.1c-0.1,0-0.2-0.1-0.2-0.2c0,0,0-0.1,0-0.1L9.4,48h1.3l0.2,0.4c0,0,0,0.1,0,0.1 c0,0.1-0.1,0.1-0.2,0.2v0.1h1.1v-0.1c-0.2,0-0.2-0.2-0.3-0.3l-1.1-2.1c0,0,0-0.1,0-0.1c0-0.1,0.1-0.1,0.2-0.2v-0.1H9.5v0.1 C9.6,45.9,9.7,46,9.7,46.1 M10,46.6l0.5,0.9H9.6L10,46.6z M18.2,48.6c-0.1,0-0.2-0.1-0.2-0.2v-0.9h1.1c0.7,0,1.1-0.3,1.1-0.9 c0-0.5-0.4-0.8-1.2-0.8h-1.9v0.1c0.1,0,0.2,0.1,0.2,0.2v2.3c0,0.1,0,0.2-0.2,0.2v0.1L18.2,48.6L18.2,48.6 M18.8,46.3 c0.5,0,0.8,0.1,0.8,0.3c0,0.2-0.3,0.3-0.8,0.3h-0.8v-0.7H18.8z M26.9,48.6c-0.1,0-0.2-0.1-0.2-0.2v-2.3c0-0.1,0-0.2,0.2-0.2v-0.1h-1 v0.1c0.1,0,0.2,0.1,0.2,0.2v2.3c0,0.1,0,0.2-0.2,0.2v0.1L26.9,48.6L26.9,48.6 M32.6,46.5c0-0.1,0.1-0.2,0.2-0.2h0.8v2 c0,0.1,0,0.2-0.2,0.2v0.1h1v-0.1c-0.1,0-0.2-0.1-0.2-0.2v-2h0.8c0.1,0,0.2,0,0.2,0.2h0.1v-0.9h-0.1c0,0.1-0.1,0.2-0.2,0.2h-2.4 c-0.1,0-0.2,0-0.2-0.2h-0.1L32.6,46.5L32.6,46.5 M41.9,46.1c0,0,0,0.1,0,0.1l-1,2.1c-0.1,0.2-0.1,0.3-0.3,0.3v0.1h1v-0.1 c-0.1,0-0.2-0.1-0.2-0.2c0,0,0-0.1,0-0.1l0.2-0.4h1.3l0.2,0.4c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.2,0.2v0.1h1.1v-0.1 c-0.2,0-0.2-0.2-0.3-0.3l-1.1-2.1c0,0,0-0.1,0-0.1c0-0.1,0.1-0.1,0.2-0.2v-0.1h-1.1v0.1C41.9,45.9,41.9,46,41.9,46.1 M42.3,46.6 l0.5,0.9h-0.9L42.3,46.6z M50.5,45.9L50.5,45.9l-1-0.1v0.1c0.1,0,0.2,0.1,0.2,0.2v2.3c0,0.1,0,0.2-0.2,0.2v0.1h2.6 c0.1,0,0.2,0,0.2,0.2h0.1V48h-0.1c0,0.1-0.1,0.2-0.2,0.2h-1.8v-2C50.3,46,50.4,45.9,50.5,45.9"/>
		</svg>);
	}
}
