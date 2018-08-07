import React, { Component,Fragment } from 'react';

export default class ChannelTabel extends Component {
	render() {
		let channel = this.props.channel;
		return (
			<div className="channel-tabel">
				{ channel? ( 
						<Fragment>
							<table>
								<tbody>
									<tr>
										<th>title</th><td>{channel.snippet.title}</td>
									</tr>
									<tr>
										<th>id</th><td>{channel.id}</td>
									</tr>
									<tr>
										<th>publishedAt</th><td>{channel.snippet.publishedAt}</td>
									</tr>
									<tr>
										<th>subscriberCount</th><td>{channel.statistics.subscriberCount}</td>
									</tr>
									<tr>
										<th>videoCount</th><td>{channel.statistics.videoCount}</td>
									</tr>
									<tr>
										<th>viewCount</th><td>{channel.statistics.viewCount}</td>
									</tr>
								</tbody>
							</table>
							<p className="description">
								{channel.snippet.description}
							</p>
							<a className="visit h-style" target="_blank" href={`https://www.youtube.com/${channel.snippet.customUrl}`}>visit channel</a>
						</Fragment>
					) : (
						<h2>no channel</h2>
					)
				}
			</div>
		);
	}
}
