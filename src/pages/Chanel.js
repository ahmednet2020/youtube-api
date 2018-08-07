import React, { Component } from 'react';
import {Route, Switch, Link } from "react-router-dom";
//components
import preload from '../components/preload';
import SearchInput from '../components/searchinput';
import ChannelTabel from '../components/channeltabel';
import Videos from '../components/videos';
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
							<Link to={`${path}/channelinfo`} className="h-style">channelinfo</Link>
							<Link to={`${path}/videos`} className="h-style">videos</Link>
						</div>
						<Switch>
							<Route exact path={`${path}/channelinfo`} render={(props) =><ChannelTabel {...props} channel={this.props.channel}/> }/>
							<Route exact path={`${path}/videos`} render={(props) => <Videos {...props} channel={this.props.channel} />  }/>
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
