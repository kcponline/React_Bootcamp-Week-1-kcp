// import React, { Component } from 'react';
// remove { Component } because this is static.
// then inject the html code inside the div container.
// the final part is to export the const Static.
import React from 'react';
// below is a typical stateless functional component as a base for starting point.
const Static = () => { // if this is stateful, then this would be " class Static extends Component { ".
	return ( // this would be "render" if stateful. also, state would added & defined. Notice, upper case is required for 1st letter of each component.
		<div>
			<Header />
			<Banner />
			<ChargerList />
			<StallList />
			<Footer />
		</div>
	);
}
// here inside header, headerlogo is stateless functional component with static props.
const Header = () => {
	return ( // again, noice upper case is required for each component's 1st letter.
		<header className="main-header">
			<HeaderLogo 
				title={"EV Angel"} // this is static because "EV Angel" hardcoded & only change manually by coder.
				href={"http://www.yahoo.com"}
				target={"_blank"}
			/>
			<Navigation />
		</header>
	);
}
// insert "props" to pass the static info from parent to this child component as an argument.
const HeaderLogo = (props) => {
	console.log('HeaderLogo properties', props);
	return (
		<h1 className="name">
			<a href={props.href} target="props.target">
				{props.title}
			</a>
		</h1>
	);
}
// in contrast to HeaderLogo, this has grandchild component. so the static info is defined in the child instead of in "Header".
const Navigation = () => {
	return (
		<ul className="main-nav">
	        <Nav01 
	        	title={"History"}
	        	href={"http://www.history.com"}
	        	target={"_blank"}
	        />
	        <Nav02 
	        	title={"Account"}
	        	href={"http://www.google.com"}
	        	target={"_blank"}
	        />
	  	</ul>
	);
}

const Nav01 = (navprops) => {
	return (
		<li>
			<a href={navprops.href} target={navprops.target}>
				{navprops.title}
			</a>
		</li>
	);
}
// notice that the reusability with only the const name being different
const Nav02 = (navprops) => {
	return (
		<li>
			<a href={navprops.href} target={navprops.target}>
				{navprops.title}
			</a>
		</li>
	);
}
// everything below this point is only statically coded as comparison but will be also turned into stateless props in the next branch
const Banner = () => {
	return (
		<div className="banner">
			<Headline />
			<Tagline />
		</div>
	);
}

const Headline = () => {
	return (
		<h1 className="headline">
			EV Angel
		</h1>
	);
}

const Tagline = () => {
	return (
	  	<span className="tagline">
	  		Helping you to get your EV Charging
	  	</span>
	);
}

const ChargerList = () => {
	return (
		<div className="row">
			<Charger01 />
			<Charger02 />
			<Charger03 />
		</div>
	);
}

const Charger01 = () => {
	return (
		<div className="col">
			<h2>
				CHARGER 1
			</h2>
	  		<p>
	  			STALL 1
	  		</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				SELECT
	  			</a>
	  		</button>
		</div>
	);
}
const Charger02 = () => {
	return (
		<div className="col">
			<h2>
				CHARGER 2
			</h2>
	  		<p>
	  			OPEN
	  		</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				SELECT
	  			</a>
	  		</button>
		</div>
	);
}
const Charger03 = () => {
	return (
		<div className="col">
			<h2>
				CHARGER 3
			</h2>
	  		<p>
	  			RIGHT 2
	  		</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				SELECT
	  			</a>
	  		</button>
		</div>
	);
}


const StallList = () => {
	return (
		<div className="row">
			<Stall01 />
			<Stall02 />
			<Stall03 />
			<Stall04 />
			<Stall05 />
			<Stall06 />
			<Stall07 />
		</div>
	);
}

const Stall01 = () => {
	return (
		<div className="col">
			<h2>
				LEFT 2
			</h2>
	  		<p>
	  			CHARGER:NONE
	  		</p>
	  		<p>
	  			STALL:OPEN
	  		</p>
 			<p>
 				START:N/A
 			</p>
  			<p>
  				EVANGEL:KENT
  			</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				SELECT
	  			</a>
	  		</button>
		</div>
	);
}
const Stall02 = () => {
	return (
		<div className="col">
			<h2>
				LEFT 2
			</h2>
	  		<p>
	  			CHARGER:NONE
	  		</p>
	  		<p>
	  			STALL:OPEN
	  		</p>
 			<p>
 				START:N/A
 			</p>
  			<p>
  				EVANGEL:KENT
  			</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				SELECT
	  			</a>
	  		</button>
		</div>
	);
}
const Stall03 = () => {
	return (
		<div className="col">
			<h2>
				STALL 1
			</h2>
	  		<p>
	  			CHARGER:1
	  		</p>
	  		<p>
	  			CHARGING
	  		</p>
 			<p>
 				START: 3:30PM
 			</p>
  			<p>
  				EVANGEL:KENT
  			</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				SELECT
	  			</a>
	  		</button>
		</div>
	);
}
const Stall04 = () => {
	return (
		<div className="col">
			<h2>
				STALL 2
			</h2>
	  		<p>
	  			CHARGER:2
	  		</p>
	  		<p>
	  			FINISHED
	  		</p>
 			<p>
 				START: 2:30PM
 			</p>
  			<p>
  				EVANGEL:KENT
  			</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				SELECT
	  			</a>
	  		</button>
		</div>
	);
}
const Stall05 = () => {
	return (
		<div className="col">
			<h2>
				STALL 3
			</h2>
	  		<p>
	  			CHARGER:NONE
	  		</p>
	  		<p>
	  			WAITING
	  		</p>
 			<p>
 				START: 5:20PM
 			</p>
  			<p>
  				EVANGEL:KENT
  			</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				SELECT
	  			</a>
	  		</button>
		</div>
	);
}
const Stall06 = () => {
	return (
		<div className="col">
			<h2>
				RIGHT 1
			</h2>
	  		<p>
	  			CHARGER:NONE
	  		</p>
	  		<p>
	  			WAITING
	  		</p>
 			<p>
 				START: 4:45PM
 			</p>
  			<p>
  				EVANGEL:KENT
  			</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				SELECT
	  			</a>
	  		</button>
		</div>
	);
}
const Stall07 = () => {
	return (
		<div className="col">
			<h2>
				RIGHT 2
			</h2>
	  		<p>
	  			CHARGER:3
	  		</p>
	  		<p>
	  			CHARGING
	  		</p>
 			<p>
 				START: 4:25PM
 			</p>
  			<p>
  				EVANGEL:KENT
  			</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				SELECT
	  			</a>
	  		</button>
		</div>
	);
}


const Footer = () => {
	return (
		<footer className="main-footer">
			<span>&copy;2018 React-CBC EV Helper</span>
		</footer>
	);
}

export default Static;
