import React from 'react';
import ReactDOM from 'react-dom';
//import compponents
import Navbar from './components/navbar';
//app class
class App extends React.Component
{
	render()
	{
		return (
			<React.Fragment>
				<Navbar/>
				<main>
					<h1> welcome to youtube api </h1>
				</main>
			</React.Fragment>
		)
	}
}

//render jsx
ReactDOM.render(<App />, document.getElementById('app'));