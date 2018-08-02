import React from 'react';
import ReactDOM from 'react-dom';
//react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import compponents
import Navbar from './components/navbar';
//app class
class App extends React.Component
{
	render()
	{
		return (
			<Router>
				<React.Fragment>
					<Route path="/" component={Navbar}/>
					<Switch>
						<Route exact path="/" render={() => <h1> home </h1>}/>
						<Route path="/login" render={() =>  <h1> login </h1>}/>
						<Route path="/chanel" render={() => <h1> chanel </h1>}/>
						<Route render={({location}) => <h1>no thing here {location.pathname}</h1>} />
					</Switch>
				</React.Fragment>
			</Router>
		)
	}
}

//render jsx
ReactDOM.render(<App />, document.getElementById('app'));