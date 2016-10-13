// core imports
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

// middleware
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';

import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';

// dev stuff
//import {createDevTools} from 'redux-devtools';
// console.log(createDevTools);

// app related stuff
import * as reducers from './reducers';

const rootReducer = combineReducers({
	routing: routerReducer,
	...reducers
});


let store;

const createdRouterMiddleware = routerMiddleware(browserHistory);

if (process.env.NODE_ENV === 'production' || !localStorage.getItem('logs')) {
	store = createStore(
		rootReducer,
		applyMiddleware(
			createdRouterMiddleware,
			promiseMiddleware()
		)
	);
} else {
	// compose allow store to use middleware, devTools and other utils
	store = createStore(
		rootReducer,
		applyMiddleware(
			createdRouterMiddleware,
			promiseMiddleware(),
			createLogger()
		)
	);
}

export default store;
