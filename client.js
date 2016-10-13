import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import Cookie from 'cookies-js';

import LinkRouter from 'common/Components/InternalLinkRouter';

import routesGenerator from './src/router';
import storeFactory from './src/store';

import './src/stylesheets/main.less';

const setCookie = (key, val) => {
	Cookie.set(key, val, {expires: 9999999});
};

const store = storeFactory();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
	<Provider store={store}>
		<LinkRouter>
			<Router history={history}>
				{routesGenerator(store, setCookie)}
			</Router>
		</LinkRouter>
	</Provider>
), document.getElementById('root'));
