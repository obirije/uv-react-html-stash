import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

//import './main.sass';
import LandingContainer from './components/landing-home';
import Profile from './components/profile/profile.js';
import Logo from './uvune-logo.png';


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

	    this.myLogo = new Image();
		this.myLogo.src = Logo;

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
			 
				    <div className="SiteWrapper">

				    	<Header myLogo={this.myLogo} />

				    	<MobileNav />

                        <Switch>

    						<Route path="/" exact component={withTracker(LandingContainer)} />
                            <Route path="/:phone" exact component={withTracker(Profile)} />

                            <Route component={withTracker(NoMatch)}/>

                        </Switch>

					</div>

				
			</Router>
		);
	}
}

const Header = (props) => {

	return (
		<header className="Header Header--withImage" data-js="header" style={{ backgroundColor: '#F2FFF5'}}>
            <div className="Header-Wrapper"> <a className="Header-Logo" href="https://uvune.com/" title="Uvune Home"> 
            <img src={props.myLogo.src} alt="Uvune logo" title="" className="lazyload Header-Logo--blue" width="450" height="300" /> </a>
                <div className="MainNavMenu">
                    <div className="MainNavMenu-Items">

                        <div className="Dropdown" data-js="dropdown">
                            <button type="button" data-js="dropdown-button" className="Button Button--primary Button-- Button--dropdown"> Make a payment </button>
                            <ul className="Dropdown-menu MainNav-submenu Dropdown-menu--button" data-js="dropdown-submenu">
                                <li className="Dropdown-item"><a href="#" className="Dropdown-link" title="Pay" target="_self">Pay</a></li>
                                <li className="Dropdown-item"><a href="#" className="Dropdown-link" title="Login" target="_self">Login</a></li>
                                <li className="Dropdown-item"><a href="#" className="Dropdown-link" title="Support" target="_self">Support</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button className="Header-ToggleButton" data-js="hamburgerMenuButton"></button>
            </div>
        </header>
	)
}

const MobileNav = (props) => {
	return(
		<div className="MainNavMenu-Mobile" data-js="mobileMenu" style={{ marginTop: '80px'}}>
            <div className="MainNavMenu-Mobile-Container" data-js="mobileMenuContainer" aria-label="Main menu" role="menu">
                <div className="MainNavMenu-Mobile-Header">

                    <div className="MainNavMenu-Mobile-CloseButton-Wrapper">
                        <button className="MainNavMenu-Mobile-CloseButton" data-js="mobileCloseMenuButton"></button>
                    </div>
                </div>
                <div className="MainNavMenu-Mobile-Container-Items" role="menu">

                    <div className="MainNavMenu-Mobile-Dropdown" role="menuitem"> <a href="#" className="MainNavMenu-Mobile-Dropdown-Current MainNavMenu-Mobile-Dropdown-Current--link" role="menuitem" tabIndex="0"> Company </a> </div>
                    <div className="MainNavMenu-Mobile-Dropdown" role="menuitem"> <a href="#" className="MainNavMenu-Mobile-Dropdown-Current MainNavMenu-Mobile-Dropdown-Current--link" role="menuitem" tabIndex="0"> Support </a> </div>
                    <div className="MainNavMenu-Mobile-Dropdown" role="menuitem"> <a href="#" className="MainNavMenu-Mobile-Dropdown-Current MainNavMenu-Mobile-Dropdown-Current--link" role="menuitem" tabIndex="0"> Account </a> </div>

                    <div className="MainNavMenu-Mobile-Dropdown" role="menuitem">
                        <button type="button" data-js="menuSection" className="Button Button--inverted Button--dropdown"> Make a payment </button>
                        <ul className="MainNavMenu-Mobile-Dropdown-List">
                            <li className="MainNavMenu-Mobile-Dropdown-Item"><a href="#" className="MainNavMenu-Mobile-Dropdown-Link" title="Pay">Pay</a></li>
                            <li className="MainNavMenu-Mobile-Dropdown-Item"><a href="#" className="MainNavMenu-Mobile-Dropdown-Link" title="Login">Login</a></li>
                            <li className="MainNavMenu-Mobile-Dropdown-Item"><a href="#" className="MainNavMenu-Mobile-Dropdown-Link" title="Support">Support</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
	)
}

const NoMatch = ({ location }) => (
  <div style={{ marginTop: '10%'}} >
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);