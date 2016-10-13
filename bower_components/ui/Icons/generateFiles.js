/*

THIS FILE GENERATES ALL MISSING ICON FILES. RUN IT IN NODE

*/

var fs = require('fs');

function camelCase(input) {
    input = input.toLowerCase().replace(/[-_](.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
	input = input.charAt(0).toUpperCase() + input.slice(1);
	return input;
}

var reactIcons = fs.readdirSync('./');
var svgIcons = fs.readdirSync('../svg_icons');

var reactMap = reactIcons.reduce((acc, file) => {
	file = file.substr(0, file.length -3);
	acc[file] = true;
	return acc;
}, {});

var iconsToMake = svgIcons.map((file) => {
	var name = file.substr(0, file.length - 4);
	return {
		svg: file,
		name: camelCase(name)
	};
})
.filter((file) => {
	return !reactMap[file.name];
});

console.log('Making files for:');

iconsToMake.forEach((file) => {
	console.log('making ' + file.name);
	var name = file.name;
	var svg = file.svg.substr(0, file.svg.length - 4);
var contents = `import generateIcon from './generateIcon';

import template from '../svg_icons/${svg}.svg';

export default generateIcon(template);
`;

	fs.writeFileSync('./' + name + '.js', contents);
});
