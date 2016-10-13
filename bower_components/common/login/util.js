
exports.getUrls = function getUrls (location) {

	var hostname = location.hostname;

	if (location.port) {
		return {
			exchange:	'//' + hostname + ':' + 5050 + '/',
			enterprise: '//' + hostname + ':' + 5450 + '/',
			admin: '//' + hostname + ':' + 5550 + '/'
		};
	}

	if (hostname.indexOf('compstak.com') !== -1) {
		return {
			exchange: '//exchange.compstak.com/',
			enterprise: '//enterprise.compstak.com/',
			admin: '//admin.compstak.com/'
		};
	}

	var env = hostname.split('-')[0];
	var end = hostname.split('.').slice(-2).join('.');

	var enterpriseHost = env + '-enterprise.' + end;
	var exchangeHost = env + '-exchange.' + end;
	var adminHost = env + '-admin.' + end;

	return {
		exchange: '//' + exchangeHost + '/',
		enterprise: '//' + enterpriseHost + '/',
		admin: '//' + adminHost + '/'
	};

};
