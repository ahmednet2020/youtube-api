import React, { Component } from 'react';

 const Playlist = ({playlist}) => (
			<div className="play-list">
				<h3>last vedios</h3>
				<div className="vedio-list">{ playlist.map((vedio)=> (
					<div className="vedio-item" key={vedio.id}>
						<iframe width="100%"
						 		height="auto" 
						 		src={`https://www.youtube.com/embed/${vedio.snippet.resourceId.videoId}`} 
						 		frameBorder="0" allow="autoplay; encrypted-media" 
						 		allowFullScreen>
						</iframe>
						<h4>published At {new Date(vedio.snippet.publishedAt).toUTCString()}</h4>
					</div>
					)) }</div>
			</div>
		);
export default Playlist;