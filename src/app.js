import React from 'react';
import ReactDOM from 'react-dom';
//service-workers
import serviceWorkers from '../worker/workers';
//react router
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
					<Switch>
						<Route path="/404" render={()=> <span></span>}/> // to remove nav in 404 page
						<Route path="/" component={Navbar}/>
					</Switch>
					<Switch>
						<Route exact path="/" render={() => <h1> home </h1>}/>
						<Route path="/login" render={() =>  <h1> login </h1>}/>
						<Route path="/chanel" render={() => <h1> chanel </h1>}/>
						<Route path="/404" render={({location}) => <h1>no thing here {location.pathname}</h1>}/>
						<Route render={() => <Redirect to="/404"/>} />
					</Switch>
				</React.Fragment>
			</Router>
		)
	}
}

//render jsx
ReactDOM.render(<App />, document.getElementById('app'));
serviceWorkers();