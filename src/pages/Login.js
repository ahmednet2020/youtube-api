import React, { Component } from 'react';
//components
import LoginFom from '../components/loginform';
import Loginservices from '../components/loginservices';
import preload from '../components/preload';

export default class Login extends Component {
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
						<div className="sign-box">
							<h1> sign in</h1>
							<LoginFom />
							<hr/>
							<Loginservices singin={this.props.singin}/>
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