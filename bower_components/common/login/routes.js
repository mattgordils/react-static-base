// libraries
import React from 'react';
import LoginLayout from './Layout';
import { Route } from 'react-router';

const routes = {
	login: (<Route path='/login' component={LoginLayout} />),
	forgotPassword: (<Route path='/forgotPassword' component={LoginLayout} />),
	resetPassword: (<Route path='/resetPassword/:uuid' component={LoginLayout} />),
	logout: (<Route path='/logout' component={LoginLayout} />)
};

export default routes;
