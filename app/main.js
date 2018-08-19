import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//import './main.sass';
import LandingContainer from './components/landing-home';


import ReactGA from 'react-ga';
import withTracker from './withTracking';

const DEFAULT_CONFIG = {
  trackingId: 'UA-119389791-11',
  debug: false,
  gaOptions: {
    cookieDomain: 'none'
  }
};


class Layout extends React.Component {

	constructor(props, context) {
	    super(props, context);

	    this.state = {
	      reactGaInitialised: false,
	      configs: [DEFAULT_CONFIG]
	    };
	  }

	  initReactGA = () => {
	  	console.log("initialize ReactGA");

	    ReactGA.initialize(this.state.configs);
	    // Send initial test view
	    ReactGA.pageview('/');
	    this.setState({ reactGaInitialised: true });
	  };

	  componentDidMount(){

	  	this.initReactGA();
	  }

	render(){
		return (
			<Router>
				<div>
					<Route path="/" exact component={withTracker(LandingContainer)} />
				</div>
				
			</Router>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);