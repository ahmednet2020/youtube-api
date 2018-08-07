import React, { Component } from 'react';
export default class SearchInput extends Component {
	constructor(props)
	{
		super(props);
		this.state = {text:''};
	}
	Change(e)
	{
		let text = e.target.value;
		this.setState({text});
	}
	Submit(e)
	{
		e.preventDefault();
		this.props.getChannel(this.state.text);
	}
	render() {
		return (
			<form onSubmit={this.Submit.bind(this)}>
				<div className="search input">
					<input type="text" name="search" id="search" required onChange={this.Change.bind(this)} value={this.state.text}/>
					<label htmlFor="search" className="h-style">user name</label>
				</div>
				<div className="submit">
					<label>
						<input type="submit" name="search" value="search" className="h-style"/>
					</label>
				</div>
			</form>
		);
	}
}
