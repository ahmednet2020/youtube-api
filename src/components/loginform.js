import React, { Component } from 'react';
import { Prompt } from "react-router-dom";
export default class LoginFom extends Component {
	constructor(props)
	{
		super(props);
		this.state = {isBlocking:true};
	}
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
				<Prompt when={this.state.isBlocking} message={location => `Are you sure you want to go to ${location.pathname}`}/>
			</form>
		);
	}
}
