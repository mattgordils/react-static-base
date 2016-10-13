var proxyTo = process.env.PROXY_TO || 'staging';

module.exports = {
	proxy: {
		'/api/*': 'http://' + proxyTo + '.cs-int-592.com/'
	},
	mockPath: 'mock',
	app: '/index.html',
	port: 3000
};
