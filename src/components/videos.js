import React, { Component } from 'react';
import Playlist from './playlist';
export default class Videos extends Component {
	constructor(props)
	{
		super(props);
		this.state = {playlist:'...loading'};
		this.mount = false;// memory leak fix,
	}
	render() {
		if(Array.isArray(this.state.playlist))
		{
			return ( <Playlist playlist={this.state.playlist} /> );
		} else {
			return (
				<div className="play-list">
					<div>{this.state.playlist}</div>
				</div>
			);
		}
	}
	playlistRequest()
	{
		let playlistId = this.props.channel.contentDetails.relatedPlaylists.uploads
		let requestOptions = {
		    playlistId,
		    part: 'snippet',
		    maxResults: 10
		  };
		let request = gapi.client.youtube.playlistItems.list(requestOptions);
		request.execute((response) => {
			if(this.mount) {
				this.setState({playlist:response.items});
			} else {
				console.log("Unmount");//test 
			}
		})
	}
	componentDidUpdate()
	{
		this.playlistRequest()	
	}
	componentDidMount()
	{
		this.mount = true;
		this.playlistRequest()
	}
	componentWillUnmount() {
		this.mount = false;
	}
}
