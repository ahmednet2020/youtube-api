import React, { Component } from 'react';
import { Link } from "react-router-dom";
function active(e)
{
	let liList = e.target.offsetParent.children;
	Array.from(liList).forEach((li)=>{
		li.classList.remove("active");
	});
	e.target.parentElement.classList.add("active");
}
const Navlist = ({on, home, login, chanel}) => (
	<ul className="nav-list" role="menu" id="navlist">
		<li className="nav-item active"><Link onClick={active} tabIndex={on? "1":"-1"} to="/" className="nav-link h-style" role="menuitem">home</Link></li>
		<li className="nav-item"><Link onClick={active} tabIndex={on? "1":"-1"} to="/login" className="nav-link h-style" role="menuitem">login</Link></li>
		<li className="nav-item"><Link onClick={active} tabIndex={on? "1":"-1"} to="/chanel" className="nav-link h-style" role="menuitem">chanel</Link></li>
	</ul>
);
export default Navlist;