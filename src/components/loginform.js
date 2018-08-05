import React, { Component } from 'react';

export default class LoginFom extends Component {
	Submit(e)
	{
		e.preventDefault();
		let username = e.target.username.value === "admin";
		let password = e.target.password.value === "123456";
		if(username && password)
		{
			this.props.singin();
		} else {
			console.log(false);
		}
	}
	render() {
		console.log();
		return (
			<form onSubmit={this.Submit.bind(this)}>
				<div className="username">
					<input type="text" name="username" id="username" required />
					<label htmlFor="username" className="h-style">user name</label>
				</div>
				<div className="password">
					<input type="password" name="password" id="password" required />
					<label htmlFor="password" className="h-style">password</label>
				</div>
				<div className="submit">
					<label>
						<input type="submit" name="login" value="login" className="h-style"/>
					</label>
				</div>
			</form>
		);
	}
}
