import React, { Component } from 'react';
import { Link } from "react-router-dom";
const Page404 = ({location}) => {
	return (
		<main>
			<section className="sign">
				<div className="container">
					<h1>no thing here {location.pathname}</h1>
					<Link to="/">Home</Link>
				</div>
			</section>
		</main>
	);
}
export default Page404;