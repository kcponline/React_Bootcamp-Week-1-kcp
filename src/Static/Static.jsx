// import React, { Component } from 'react';
// remove { Component } because this is static
// then inject the html code inside the div container
// the final part is to export the const Static
import React from 'react';

const Static = () => {
	return (
		<div>
			<Header />
			<Banner />
			<ChargerList />
			<StallList />
			<Footer />
		</div>
	);
}

const Header = () => {
	return (
		<header className="main-header">
			<HeaderLogo 
				title={"EV Angel"}
				href={"http://www.yahoo.com"}
				target={"_blank"}
			/>
			<Navigation />
		</header>
	);
}

const HeaderLogo = (props) => {
	console.log('parent properties', props);
	return (
		<h1 className="name">
			<a href={props.href} target="props.target">
				{props.title}
			</a>
		</h1>
	);
}

const Navigation = () => {
	return (
		<ul className="main-nav">
	        <NavLink 
	        	title={"History"}
	        	href={"http://www.history.com"}
	        	target={"_blank"}
	        />
	        <NavLink 
	        	title={"Account"}
	        	href={"http://www.google.com"}
	        	target={"_blank"}
	        />
	  	</ul>
	);
}

const NavLink = (navprops) => {
	return (
		<li>
			<a href={navprops.href} target={navprops.target}>
				{navprops.title}
			</a>
		</li>
	);
}
// notice that the reusability with only the const name being different
// const Nav = (navprops) => {
// 	return (
// 		<li>
// 			<a href={navprops.href} target={navprops.target}>
// 				{navprops.title}
// 			</a>
// 		</li>
// 	);
// }

const Banner = () => {
	return (
		<div className="banner">
			<Headline 
				title={"EV Angel"}
			/>
			<Tagline 
				title={"Helping you to get your EV Charging"}
			/>
		</div>
	);
}

const Headline = (bannerprops) => {
	return (
		<h1 className="headline">
			{bannerprops.title}
		</h1>
	);
}

const Tagline = (bannerprops) => {
	return (
	  	<span className="tagline">
	  		{bannerprops.title}
	  	</span>
	);
}

const ChargerList = () => {
	return (
		<div className="row">
			<Charger 
				station={"CHARGER 1"}
				chargerStatus={"STALL 1"}
				buttonName={"SELECT"}
			/>
			<Charger 
				station={"CHARGER 2"}
				chargerStatus={"OPEN"}
				buttonName={"SELECT"}
			/>
			<Charger 
				station={"CHARGER 3"}
				chargerStatus={"RIGHT 2"}
				buttonName={"SELECT"}
			/>
		</div>
	);
}

const Charger = (chargerprops) => {
	return (
		<div className="col">
			<h2>
				{chargerprops.station}
			</h2>
	  		<p>
	  			{chargerprops.chargerStatus}
	  		</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				{chargerprops.buttonName}
	  			</a>
	  		</button>
		</div>
	);
}
// const Charger = () => {
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
// const Charger = () => {
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
			<Stall 
				stallName={"LEFT 2"}
				chargerName={"CHARGER:NONE"}
				stallStatus={"STALL:OPEN"}
				startTime={"START:N/A"}
				evangelName={"EVANGEL:KENT"}
				buttonName={"SELECT"}
			/>
			<Stall 
				stallName={"LEFT 1"}
				chargerName={"CHARGER:NONE"}
				stallStatus={"STALL:OPEN"}
				startTime={"START:N/A"}
				evangelName={"EVANGEL:KENT"}
				buttonName={"SELECT"}			
			/>
			<Stall 
				stallName={"STALL 1"}
				chargerName={"CHARGER:1"}
				stallStatus={"CHARGING"}
				startTime={"START: 3:30PM"}
				evangelName={"EVANGEL:KENT"}
				buttonName={"SELECT"}			
			/>
			<Stall 
				stallName={"STALL 2"}
				chargerName={"CHARGER:2"}
				stallStatus={"FINISHED"}
				startTime={"START: 2:30PM"}
				evangelName={"EVANGEL:KENT"}
				buttonName={"SELECT"}			
			/>
			<Stall 
				stallName={"STALL 3"}
				chargerName={"CHARGER:NONE"}
				stallStatus={"WAITING"}
				startTime={"START: 5:20PM"}
				evangelName={"EVANGEL:KENT"}
				buttonName={"SELECT"}			
			/>
			<Stall 
				stallName={"RIGHT 1"}
				chargerName={"CHARGER:NONE"}
				stallStatus={"WAITING"}
				startTime={"START: 4:45PM"}
				evangelName={"EVANGEL:KENT"}
				buttonName={"SELECT"}			
			/>
			<Stall 
				stallName={"RIGHT 2"}
				chargerName={"CHARGER:3"}
				stallStatus={"CHARGING"}
				startTime={"START: 4:25PM"}
				evangelName={"EVANGEL:KENT"}
				buttonName={"SELECT"}			
			/>
		</div>
	);
}

const Stall = (stallprops) => {
	return (
		<div className="col">
			<h2>
				{stallprops.stallName}
			</h2>
	  		<p>
	  			{stallprops.chargerName}
	  		</p>
	  		<p>
	  			{stallprops.stallStatus}
	  		</p>
 			<p>
 				{stallprops.startTime}
 			</p>
  			<p>
  				{stallprops.evangelName}
  			</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				{stallprops.buttonName}
	  			</a>
	  		</button>
		</div>
	);
}
// const Stall02 = () => {
// 	return (
// 		<div className="col">
// 			<h2>
// 				LEFT 1
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
			<span>&copy;2018 React-CBC EV Angel</span>
		</footer>
	);
}

export default Static;
