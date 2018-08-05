import React, { Component } from 'react';
import Navtoggel from './navtoggel';
import { Link } from "react-router-dom";
const Navbar = ({location}) => (
	<nav>
		<div className="container">
			<Link className="brand h-style" to="/where/are/this">heros</Link>
			<Navtoggel location={location.pathname}/>
		</div>
	</nav>
);
export default Navbar;