import React from 'react';
import ReactDOM from 'react-dom';
//service-workers
import serviceWorkers from '../worker/workers';
//react router
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//import compponents
import Navbar from './components/navbar';
import Private from './components/private';
//import pages
import Home from './pages/Home';
import Login from './pages/Login';
import Chanel from './pages/Chanel';
import Page404 from './pages/Page404';
//app class
class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {login:false};
		this.Signin = this.Signin.bind(this);
		this.Signout = this.Signout.bind(this);
	}
	Signin()
	{
		this.setState({login:true});
	}
	Signout()
	{
		this.setState({login:false});
	}
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
						<Route exact path="/" component={Home}/>
						<Route path="/login" render={() =>this.state.login? <Redirect to="/"/> : <Login singin={this.Signin}/> } />
						<Private path="/chanel" auth={this.state.login} component={Chanel} />
						<Route path="/404" component={Page404}/>
						<Route strict render={() => <Redirect to="/404"/>} />
					</Switch>
				</React.Fragment>
			</Router>
		)
	}
}

//render jsx
ReactDOM.render(<App />, document.getElementById('app'));
serviceWorkers();