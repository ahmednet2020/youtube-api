import React, { Component } from 'react';
import Navtoggel from './navtoggel';
import { Link } from "react-router-dom";
const Navbar = (props) => (
	<nav>
		<div className="container">
			<Link className="brand h-style" to="/where/are/this">heros</Link>
			<Navtoggel/>
		</div>
	</nav>
);
export default Navbar;