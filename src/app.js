import React from 'react';
import ReactDOM from 'react-dom';
//import compponents
//app class
class App extends React.Component
{
	render()
	{
		console.log(this);
		return (
			<div>
				welcome to youtube api
			</div>
		)
	}
}

//render jsx
ReactDOM.render(<App />, document.getElementById('app'));