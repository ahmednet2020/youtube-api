import React, { Component } from 'react';

const Navlist = ({on}) => (
	<ul className="nav-list" role="menu" id="navlist">
		<li><a tabIndex={on? "":"-1"} href="#!" className="nav-link h-style" role="menuitem">home</a></li>
		<li><a tabIndex={on? "":"-1"} href="#!" className="nav-link h-style" role="menuitem">login</a></li>
		<li><a tabIndex={on? "":"-1"} href="#!" className="nav-link h-style" role="menuitem">chanel</a></li>
	</ul>
);
export default Navlist;