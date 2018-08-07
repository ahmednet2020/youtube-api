import React, { Component } from 'react';
import Playlist from './playlist';
export default class Videos extends Component {
	constructor(props)
	{
		super(props);
		this.state = {playlist:'...loading'};
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
			this.setState({playlist:response.items});
		})
	}
	componentDidUpdate()
	{
		this.playlistRequest()	
	}
	componentDidMount()
	{
		this.playlistRequest()
	}
}
