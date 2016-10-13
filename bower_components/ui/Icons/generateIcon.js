import React from 'react';
import InlineSVG from 'svg-inline-react';

export default function generateIcon (src) {
	return class Icon extends React.Component {
		render () {
			return (<InlineSVG
				src={src}
			/>);
		}
	};
}
