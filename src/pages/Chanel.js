import React, { Component } from 'react';
//components
import preload from '../components/preload';
export default class Chanel extends Component {
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
						<h1>we are login</h1>
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
