import React, { Component } from 'react';

export default class Loginservices extends Component {
	render() {
		return (
			<div className="login-services">
				<p>or sign in with one of these services</p>
				<div className="btn-services">
					<button type="button" aria-label="facebook">
						<span className="icon-services"><i className="fab fa-facebook" aria-hidden="true"></i></span>
						<span className="name-services">facebook</span>
					</button>
					<button type="button" aria-label="google" onClick={this.props.singin}>
						<span className="icon-services"><i className="fab fa-google" aria-hidden="true"></i></span>
						<span className="name-services">google</span>
					</button>
					<button type="button" aria-label="twitter">
						<span className="icon-services"><i className="fab fa-twitter-square" aria-hidden="true"></i></span>
						<span className="name-services">twitter</span>
					</button>
				</div>
			</div>
		);
	}
}
