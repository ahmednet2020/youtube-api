import React, { Component } from 'react';
//components
import preload from '../components/preload';

export default class Logout extends Component {
	constructor(props)
	{
		super(props);
		preload().start();
	}
	render() {
		return (
			<main>
				<section className="logout">
					<div className="container">
						<div className="logout-box">
							<h1>logout</h1>
							<button type="button" onClick={this.props.Signout} className="h-style">logout</button>
						</div>
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