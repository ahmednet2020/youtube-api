import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

const  Private = ({ component: Component, path, auth  }) => (
	<Route path={path} render={(props) => auth ? ( 
			<Component {...props}/> 
		) : (
			<Redirect to="/login" />
		)} />
	);

export default Private;