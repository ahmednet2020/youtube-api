import React, { Component } from 'react';
import Navlist from './navlist';

export default class Navtoggel extends Component 
{
	constructor(props) {
		super(props);
		this.toggelButton = this.toggelButton.bind(this);
		this.state = {
			on:false
		};
	}
	toggelButton(){
		this.setState({
			on:!this.state.on
		});
	}
	render()
	{
		const { children } = this.props;
		return (
			<div className={`navbar ${this.state.on? "show": ""}`} ref={(node) => this.nav = node}>
				<button type="button" className="nav-toggel" onClick={this.toggelButton} aria-controls="navlist" aria-expanded={this.state.on? "true":"false"} aria-label="Toggle menu">
					menu
					<span className="line-toggel">
						<span className="line"></span>
					</span>
				</button>
				<Navlist on={this.state.on}/>
			</div>
		);
	}
}