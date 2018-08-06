import React, { Component } from 'react';
import { Link } from "react-router-dom";
const Navlist = ({on, location, sing}) => (
	<ul className="nav-list" role="menu" id="navlist">
		<li className={`nav-item ${location === "/"? "active":""}`}><Link tabIndex={on? "1":"-1"} to="/" className="nav-link h-style" role="menuitem">home</Link></li>
		<li className={`nav-item ${location === "/chanel"? "active":""}`}><Link tabIndex={on? "1":"-1"} to="/chanel" className="nav-link h-style" role="menuitem">chanel</Link></li>
		{ sing ? (
			<li className={`nav-item ${location === "/logout"? "active":""}`}><Link tabIndex={on? "1":"-1"} to="/logout" className="nav-link h-style" role="menuitem">logout</Link></li>
			) : (
			<li className={`nav-item ${location === "/login"? "active":""}`}><Link tabIndex={on? "1":"-1"} to="/login" className="nav-link h-style" role="menuitem">login</Link></li> )
		}
	</ul>
);
export default Navlist;