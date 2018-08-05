import React, { Component } from 'react';
//components
import LoginFom from '../components/loginform';
import Loginservices from '../components/loginservices';
const Login = ({singin}) => {
	return (
		<main>
			<section className="sign">
				<div className="container">
					<div className="sign-box">
						<h1> sign in</h1>
						<LoginFom singin={singin}/>
						<hr/>
						<Loginservices />
					</div>
				</div>
			</section>
		</main>
	);
}
export default Login;