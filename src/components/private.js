import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

const  Private = ({ component: Component, path, auth, getChannel, channel}) => (
	<Route path={path} render={(props) => auth ? ( 
			<Component {...props} getChannel={getChannel} channel={channel}/> 
		) : (
			<Redirect to="/login" />
		)} />
	);

export default Private;