var proxyTo = process.env.PROXY_TO || 'staging';

var app = require('./build/server').default;

module.exports = {
	proxy: {
		'/api/*': 'http://' + proxyTo + '.cs-int-592.com:5450/'
	},
	app: app,
	port: 5250
};
