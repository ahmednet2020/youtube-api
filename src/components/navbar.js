import React, { Component } from 'react';
import Navtoggel from './navtoggel';


const Navbar = (props) => (
	<nav>
		<a className="brand h-style" href="/">heros</a>
		<Navtoggel/>
	</nav>
);
export default Navbar;