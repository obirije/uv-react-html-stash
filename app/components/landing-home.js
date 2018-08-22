import React from 'React';

//import './landing.sass';

export default class LandingContainer extends React.Component {

	render(){

		return(
			
			<main className="Main" id="main">

				<section className="Hero-Transparent ">
	                <div className="Header-Background Header-Background--narrative">
	                    <div className="Header-Background-Margins">
	                        <div className="Header-Background-Gradient"></div>
	                        <div className="Header-Background-Fill " style={{backgroundImage: "url(https://www.datocms-assets.com/5835/1531927504-hero-education-desktop.svg)"}}></div>
	                    </div>
	                </div>
	                <div className="Wrapper Wrapper--hero">
	                    <h1 className="Hero-Transparent-Title ">Schools, parents and <br/>guardians, save time and <br/> money with Uvune.</h1>
	                    <h2 className="Hero-Transparent-Subtitle ">Uvune's payment solution for education is the standard for ease-of-use, innovation, and cost savings.</h2>
	                    <div className="Hero-Transparent-CTA "> <a href="#" className="Button Button--primary" title="Request a demo">Get an account</a> </div>
	                    <div className="Hero-Transparent-Illustration"> <img className="Hero-Transparent-Illustration-Image" src="https://www.datocms-assets.com/5835/1531383059-hero-education-mobile.svg" alt="" /> </div>
	                </div>
            	</section>
			</main>
			
		);
	};
}
