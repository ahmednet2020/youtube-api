import React, { Component } from 'react';
import Navtoggel from './navtoggel';
import { Link } from "react-router-dom";
const Navbar = ({location, on}) => (
	<nav>
		<div className="container">
			<Link className="brand h-style" to="/where/are/this">heros</Link>
			<Navtoggel location={location.pathname} on={on}/>
		</div>
	</nav>
);
export default Navbar;