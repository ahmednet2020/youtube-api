import React from 'react';
import ReactDOM from 'react-dom';
//service-workers
import serviceWorkers from '../worker/workers';
//react router
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//import compponents
import Navbar from './components/navbar';
import Private from './components/private';
import preload from './components/preload';
//import pages
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Chanel from './pages/Chanel';
import Page404 from './pages/Page404';
//api key
import { CLIENT_ID, DISCOVERY_DOCS, SCOPES } from './apiConfig';
//app class
class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {login:false,channel:''};
		this.Signin = this.Signin.bind(this);
		this.Signout = this.Signout.bind(this);
		this.getChannel = this.getChannel.bind(this);
	}
	Signin()
	{
		gapi.auth2.getAuthInstance().signIn();
	}
	Signout()
	{
		this.setState({login:false});
		gapi.auth2.getAuthInstance().signOut();
	}
	getChannel(forUsername)
	{
		gapi.client.youtube.channels.list({
          part: 'snippet,contentDetails,statistics',
          forUsername,
        }).then((response) => {
        	const channel = response.result.items[0];
			this.setState({channel});
        }).catch((err) => {
        	console.log(`channels error:${erro}`);
        });
	}
	render()
	{
		return (
			<Router>
				<React.Fragment>
					<Switch>
						<Route path="/404" render={()=> <span></span>}/> // to remove nav in 404 page
						<Route path="/" render={(props)=><Navbar {...props} on={this.state.login}/>}/>
					</Switch>
					<Switch>
						<Route exact path="/" render={(props) => <Home {...props} channel={this.state.channel} />}/>
						<Route exact path="/logout" render={()=> this.state.login?  <Logout Signout={this.Signout}/> : <Redirect to="/login"/>}/>
						<Route path="/login" render={() => this.state.login? <Redirect to="/logout"/> : <Login singin={this.Signin}/> } />
						<Private path="/chanel" auth={this.state.login} getChannel={this.getChannel} channel={this.state.channel} component={Chanel} />
						<Route path="/404" component={Page404}/>
						<Route render={() => <Redirect to="/404"/>} />
					</Switch>
				</React.Fragment>
			</Router>
		)
	}
	componentDidMount()
	{
       // On load, called to load the auth2 library and API client library.
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }
      handleClientLoad();
       /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      const updateSigninStatus = (isSignedIn) => {
        if (isSignedIn) {
        	this.setState({login:true});
          	this.getChannel('OsamaElzero');
          	console.log("login");
        } else {
        	this.setState({login:false});
          	console.log("logout");
        }
      }
      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          discoveryDocs: DISCOVERY_DOCS,
          clientId: CLIENT_ID,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
      }
  }
}

//render jsx
ReactDOM.render(<App />, document.getElementById('app'));
serviceWorkers();