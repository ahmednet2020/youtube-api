import React, { Component } from 'react';
import Navtoggel from './navtoggel';
const Navbar = (props) => (
	<nav>
		<div className="container">
			<a className="brand h-style" href="/">heros</a>
			<Navtoggel/>
		</div>
	</nav>
);
export default Navbar;