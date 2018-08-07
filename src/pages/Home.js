import React, { Component } from 'react';
import Playlist from '../components/playlist';
const Home = ({playlist}) => (
			<main>
				<section className="home">
					<div className="container">
						{Array.isArray(playlist)? (
								<Playlist playlist={playlist} /> 
							) : (
								<div>{playlist}</div>	
							)}
					</div>
				</section>
			</main>
		);
export default Home;