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
// here inside header, both HeaderLogo & Navigation are static html
const Header = () => {
	return (
		<header className="main-header">

				<h1 className="name" id="HeaderLogo">
					<a href="http://www.yahoo.com" target="_blank">
						EV Angel
					</a>
				</h1>

				<ul className="main-nav" id="Navigation">
					<li>
						<a href="http://www.yahoo.com" target="_blank">
							HISTORY
						</a>
					</li>
					<li>
						<a href="http://www.yahoo.com" target="_blank">
							ACCOUNT
						</a>
					</li>
				</ul>
		</header>
	);
}

// const HeaderLogo = () => {
	
// 	return (
// 		<h1 className="name">
// 			<a href="http://www.yahoo.com" target="_blank">
// 				EV Angel
// 			</a>
// 		</h1>
// 	);
// }
// in contrast to HeaderLogo, this has grandchild component.
// const Navigation = () => {
// 	return (
// 		<ul className="main-nav">
// 	        <Nav01 />
// 	        <Nav02 />
// 	  	</ul>
// 	);
// }

// const Nav01 = () => {
// 	return (
// 		<li>
// 			<a href="http://www.yahoo.com" target="_blank">
// 				HISTORY
// 			</a>
// 		</li>
// 	);
// }
// later on, this could be reduced to just Nav component but dynamically differentiated.
// const Nav02 = () => {
// 	return (
// 		<li>
// 			<a href="http://www.yahoo.com" target="_blank">
// 				ACCOUNT
// 			</a>
// 		</li>
// 	);
// }

const Banner = () => {
	return (
		<div className="banner">

			<h1 className="headline">
				EV Angel
			</h1>

		  	<span className="tagline">
		  		Helping you to get your EV Charging
		  	</span>
		</div>
	);
}

// const Headline = () => {
// 	return (
// 		<h1 className="headline">
// 			EV Angel
// 		</h1>
// 	);
// }

// const Tagline = () => {
// 	return (
// 	  	<span className="tagline">
// 	  		Helping you to get your EV Charging
// 	  	</span>
// 	);
// }

const ChargerList = () => {
	return (
		<div className="row">
			<div className="col" id="Charger01">
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
			<div className="col" id="Charger02">
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
			<div className="col" id="Charger03">
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
		</div>
	);
}

// const Charger01 = () => {
// 	return (
// 		<div className="col">
// 			<h2>
// 				CHARGER 1
// 			</h2>
// 	  		<p>
// 	  			STALL 1
// 	  		</p>
// 	  		<button className="btn-blue">
// 	  			<a href="#">
// 	  				SELECT
// 	  			</a>
// 	  		</button>
// 		</div>
// 	);
// }
// const Charger02 = () => {
// 	return (
// 		<div className="col">
// 			<h2>
// 				CHARGER 2
// 			</h2>
// 	  		<p>
// 	  			OPEN
// 	  		</p>
// 	  		<button className="btn-blue">
// 	  			<a href="#">
// 	  				SELECT
// 	  			</a>
// 	  		</button>
// 		</div>
// 	);
// }
// const Charger03 = () => {
// 	return (
// 		<div className="col">
// 			<h2>
// 				CHARGER 3
// 			</h2>
// 	  		<p>
// 	  			RIGHT 2
// 	  		</p>
// 	  		<button className="btn-blue">
// 	  			<a href="#">
// 	  				SELECT
// 	  			</a>
// 	  		</button>
// 		</div>
// 	);
// }


const StallList = () => {
	return (
		<div className="row">

			<div className="col" id="Stall01">
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

			<div className="col" id="Stall02">
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

			<div className="col" id="Stall03">
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

			<div className="col" id="Stall04">
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

			<div className="col" id="Stall05">
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

			<div className="col" id="Stall06">
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

			<div className="col" id="Stall07">
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
		</div>
	);
}

// const Stall01 = () => {
// 	return (
// 		<div className="col">
// 			<h2>
// 				LEFT 2
// 			</h2>
// 	  		<p>
// 	  			CHARGER:NONE
// 	  		</p>
// 	  		<p>
// 	  			STALL:OPEN
// 	  		</p>
//  			<p>
//  				START:N/A
//  			</p>
//   			<p>
//   				EVANGEL:KENT
//   			</p>
// 	  		<button className="btn-blue">
// 	  			<a href="#">
// 	  				SELECT
// 	  			</a>
// 	  		</button>
// 		</div>
// 	);
// }
// const Stall02 = () => {
// 	return (
// 		<div className="col">
// 			<h2>
// 				LEFT 2
// 			</h2>
// 	  		<p>
// 	  			CHARGER:NONE
// 	  		</p>
// 	  		<p>
// 	  			STALL:OPEN
// 	  		</p>
//  			<p>
//  				START:N/A
//  			</p>
//   			<p>
//   				EVANGEL:KENT
//   			</p>
// 	  		<button className="btn-blue">
// 	  			<a href="#">
// 	  				SELECT
// 	  			</a>
// 	  		</button>
// 		</div>
// 	);
// }
// const Stall03 = () => {
// 	return (
// 		<div className="col">
// 			<h2>
// 				STALL 1
// 			</h2>
// 	  		<p>
// 	  			CHARGER:1
// 	  		</p>
// 	  		<p>
// 	  			CHARGING
// 	  		</p>
//  			<p>
//  				START: 3:30PM
//  			</p>
//   			<p>
//   				EVANGEL:KENT
//   			</p>
// 	  		<button className="btn-blue">
// 	  			<a href="#">
// 	  				SELECT
// 	  			</a>
// 	  		</button>
// 		</div>
// 	);
// }
// const Stall04 = () => {
// 	return (
// 		<div className="col">
// 			<h2>
// 				STALL 2
// 			</h2>
// 	  		<p>
// 	  			CHARGER:2
// 	  		</p>
// 	  		<p>
// 	  			FINISHED
// 	  		</p>
//  			<p>
//  				START: 2:30PM
//  			</p>
//   			<p>
//   				EVANGEL:KENT
//   			</p>
// 	  		<button className="btn-blue">
// 	  			<a href="#">
// 	  				SELECT
// 	  			</a>
// 	  		</button>
// 		</div>
// 	);
// }
// const Stall05 = () => {
// 	return (
// 		<div className="col">
// 			<h2>
// 				STALL 3
// 			</h2>
// 	  		<p>
// 	  			CHARGER:NONE
// 	  		</p>
// 	  		<p>
// 	  			WAITING
// 	  		</p>
//  			<p>
//  				START: 5:20PM
//  			</p>
//   			<p>
//   				EVANGEL:KENT
//   			</p>
// 	  		<button className="btn-blue">
// 	  			<a href="#">
// 	  				SELECT
// 	  			</a>
// 	  		</button>
// 		</div>
// 	);
// }
// const Stall06 = () => {
// 	return (
// 		<div className="col">
// 			<h2>
// 				RIGHT 1
// 			</h2>
// 	  		<p>
// 	  			CHARGER:NONE
// 	  		</p>
// 	  		<p>
// 	  			WAITING
// 	  		</p>
//  			<p>
//  				START: 4:45PM
//  			</p>
//   			<p>
//   				EVANGEL:KENT
//   			</p>
// 	  		<button className="btn-blue">
// 	  			<a href="#">
// 	  				SELECT
// 	  			</a>
// 	  		</button>
// 		</div>
// 	);
// }
// const Stall07 = () => {
// 	return (
// 		<div className="col">
// 			<h2>
// 				RIGHT 2
// 			</h2>
// 	  		<p>
// 	  			CHARGER:3
// 	  		</p>
// 	  		<p>
// 	  			CHARGING
// 	  		</p>
//  			<p>
//  				START: 4:25PM
//  			</p>
//   			<p>
//   				EVANGEL:KENT
//   			</p>
// 	  		<button className="btn-blue">
// 	  			<a href="#">
// 	  				SELECT
// 	  			</a>
// 	  		</button>
// 		</div>
// 	);
// }


const Footer = () => {
	return (
		<footer className="main-footer">
			<span>&copy;2018 React-CBC EV Helper</span>
		</footer>
	);
}

export default Static;
