import React, { Component } from 'react';
import {Route, Switch, Link } from "react-router-dom";
//components
import preload from '../components/preload';
import SearchInput from '../components/searchinput';
import ChannelTabel from '../components/channeltabel';
import Videos from '../components/videos';

let RouteMap = [
	{
		To:'channelinfo',
		exact:true,
		Render:ChannelTabel
	},
	{
		To:'videos',
		exact:true,
		Render:Videos
	}
];

export default class Chanel extends Component {
	constructor(props)
	{
		super(props);
		preload().start();
	}
	render() {
		let path = this.props.match.path;
		return (
			<main>
				<section className="chanel">
					<div className="container">
						<h1>search for channels</h1>
						<SearchInput getChannel={this.props.getChannel}/>
						<div className="tabs">
						{
							RouteMap.map(({To}) => (
								<Link to={`${path}/${To}`} className="h-style" key={To}>
									{To}
								</Link>
							))
						}
						</div>
						<Switch>
						{
							RouteMap.map(({To, exact, Render}) => (
								<Route key={To} exact={exact} path={`${path}/${To}`} render={ (props) => <Render {...props} channel={this.props.channel} /> }/>
							))
						}
						</Switch>
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
