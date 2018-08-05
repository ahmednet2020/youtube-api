import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Page404 extends Component {
	constructor(props)
	{
		super(props);
		preload().start();
	}
	render() {
		return (
			<main>
				<section className="sign">
					<div className="container">
						<h1>no thing here {this.props.location.pathname}</h1>
						<Link to="/">Home</Link>
					</div>
				</section>
			</main>
		);
	}
	componentDidMount()
	{
		preload().end();
	}
}