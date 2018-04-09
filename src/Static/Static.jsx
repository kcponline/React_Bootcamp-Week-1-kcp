// import React, { Component } from 'react';
// remove { Component } because this is static
// then inject the html code inside the div container
// the final part is to export the const Static
import React, { Component } from 'react';

class Static extends Component {
	state = {
		chargername: "OPEN CHARGER: 2",
		stallname: "OPEN STALL: L2 L1",
		openchargercount: 1,
		openstallcount: 2,
		// reduced version of array for ez proving
		// chargers: [
		// 	{
		// 	station: "1"
		// 	},
		// 	{
		// 	station: "2"
		// 	},
		// 	{
		// 	station: "3"
		// 	},
		// ]
		chargers: [
			// {
			// station: "NONE",
			// chargerStatus: "N/A",
			// buttonName: "N/A"
			// },
			// {
			// station: "NONE",
			// chargerStatus: "N/A",
			// buttonName: "N/A"
			// },
			{
			station: "1",
			chargerStatus: "STALL 1",
			buttonName: "SELECT"
			},
			{
			station: "2",
			chargerStatus: "OPEN",
			buttonName: "SELECT"
			},
			{
			station: "3",
			chargerStatus: "RIGHT 2",
			buttonName: "SELECT"
			},
			// {
			// station: "NONE",
			// chargerStatus: "N/A",
			// buttonName: "N/A"
			// },
			// {
			// station: "NONE",
			// chargerStatus: "N/A",
			// buttonName: "N/A"
			// },
		],
		stalls: [
			{
			stallName: "LEFT 2",
			chargerName: "CHARGER: NONE",
			stallStatus: "STALL: OPEN",
			startTime: "START: N/A",
			evangelName: "EVANGEL: KENT",
			buttonName: "SELECT"
			},
			{
			stallName: "LEFT 1",
			chargerName: "CHARGER: NONE",
			stallStatus: "STALL: OPEN",
			startTime: "START: N/A",
			evangelName: "EVANGEL: KENT",
			buttonName: "SELECT"			
			},
			{
			stallName: "STALL 1",
			chargerName: "CHARGER: 1",
			stallStatus: "CHARGING",
			startTime: "START: 3:30PM",
			evangelName: "EVANGEL: KENT",
			buttonName: "SELECT"			
			},
			{
			stallName: "STALL 2",
			chargerName: "CHARGER: 2",
			stallStatus: "FINISHED",
			startTime: "START: 2:30PM",
			evangelName: "EVANGEL: KENT",
			buttonName: "SELECT"			
			},
			{
			stallName: "STALL 3",
			chargerName: "CHARGER: NONE",
			stallStatus: "WAITING",
			startTime: "START: 5:20PM",
			evangelName: "EVANGEL: KENT",
			buttonName: "SELECT"			
			},
			{
			stallName: "RIGHT 1",
			chargerName: "CHARGER: NONE",
			stallStatus: "WAITING",
			startTime: "START: 4:45PM",
			evangelName: "EVANGEL: KENT",
			buttonName: "SELECT"			
			},
			{
			stallName: "RIGHT 2",
			chargerName: "CHARGER: 3",
			stallStatus: "CHARGING",
			startTime: "START: 4:25PM",
			evangelName: "EVANGEL: KENT",
			buttonName: "SELECT"
			},
		]
	};

	render() {
		const { chargername, stallname, openchargercount, openstallcount, chargers, stalls } = this.state;
		return (
			<div>
				<Header 
					chargername={chargername}
					stallname={stallname}
					openchargercount={openchargercount}
					openstallcount={openstallcount}
				/>
				<Banner />
				<ChargerList 
					chargers={chargers}
				/>
				<StallList
					stalls={stalls}
				/>
				<Footer />
			</div>
		);
	}
}
// static component
const Header = (props) => {
	return (
		<header className="main-header">
			<NowOpenCharger 
				chargername={props.chargername}
			/>
			<NowOpenStall 
				stallname={props.stallname}
			/>
			<Openchargercount 
				openchargercount={props.openchargercount}
			/>
			<Openstallcount 
				openstallcount={props.openstallcount}
			/>

		</header>
	);
}

const NowOpenCharger = (props) => {
	console.log('parent properties', props);
	return (
		<ul className="name">
			{props.chargername}
		</ul>
	);
}

const NowOpenStall = (props) => {
	console.log('parent properties', props);
	return (
		<ul className="name">
			{props.stallname}
		</ul>
	);
}

const Openchargercount = (props) => {
	console.log('parent properties', props);
	return (
		<ul className="name">
			OPEN CHARGER COUNT: {props.openchargercount}
		</ul>
	);
}

const Openstallcount = (props) => {
	console.log('parent properties', props);
	return (
		<ul className="name">
			OPEN STALL COUNT: {props.openstallcount}
		</ul>
	);
}

// const Navigation = () => {
// 	return (
// 		<ul className="main-nav">
// 	        <NavLink 
// 	        	title={"History"}
// 	        	href={"http://www.history.com"}
// 	        	target={"_blank"}
// 	        />
// 	        <NavLink 
// 	        	title={"Account"}
// 	        	href={"http://www.google.com"}
// 	        	target={"_blank"}
// 	        />
// 	  	</ul>
// 	);
// }

// const NavLink = (navprops) => {
// 	return (
// 		<li>
// 			<a href={navprops.href} target={navprops.target}>
// 				{navprops.title}
// 			</a>
// 		</li>
// 	);
// }
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

const ChargerList = (props) => {
	// console.log just to make sure that the props are passing down correctly
	console.log('chargers: ', props);
	return (
		<div className="row">
			{
			props.chargers.map((charger, index) => (
				<ChargerCard
					key={index}
					station={charger.station}
					chargerStatus={charger.chargerStatus}
					buttonName={charger.buttonName}
				/>
			))
			}
		</div>
	);
}

const ChargerCard = (props) => {
	return (
		<div className="col">
			<h2>
				CHARGER NO. {props.station}
			</h2>
			<h3>
				STATUS: {props.chargerStatus}
			</h3>
			<button className="btn-blue">	
				{props.buttonName}
			</button>
		</div>
	);
}

const StallList = (props) => {
	console.log('stalls: ', props);
	return (
		<div className="row">
			{
			props.stalls.map((stall, index) => (
				<StallCard
					key={index}
					stallName={stall.stallName}
					stallStatus={stall.stallStatus}
					evangelName={stall.evangelName}
					chargerName={stall.chargerName}
					startTime={stall.startTime}
					buttonName={stall.buttonName}
				/>
			))
			}
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


// const StallList = () => {
// 	return (
// 		<div className="row">
// 			<Stall 
// 				stallName={"LEFT 2"}
// 				chargerName={"CHARGER:NONE"}
// 				stallStatus={"STALL:OPEN"}
// 				startTime={"START:N/A"}
// 				evangelName={"EVANGEL:KENT"}
// 				buttonName={"SELECT"}
// 			/>
// 			<Stall 
// 				stallName={"LEFT 1"}
// 				chargerName={"CHARGER:NONE"}
// 				stallStatus={"STALL:OPEN"}
// 				startTime={"START:N/A"}
// 				evangelName={"EVANGEL:KENT"}
// 				buttonName={"SELECT"}			
// 			/>
// 			<Stall 
// 				stallName={"STALL 1"}
// 				chargerName={"CHARGER:1"}
// 				stallStatus={"CHARGING"}
// 				startTime={"START: 3:30PM"}
// 				evangelName={"EVANGEL:KENT"}
// 				buttonName={"SELECT"}			
// 			/>
// 			<Stall 
// 				stallName={"STALL 2"}
// 				chargerName={"CHARGER:2"}
// 				stallStatus={"FINISHED"}
// 				startTime={"START: 2:30PM"}
// 				evangelName={"EVANGEL:KENT"}
// 				buttonName={"SELECT"}			
// 			/>
// 			<Stall 
// 				stallName={"STALL 3"}
// 				chargerName={"CHARGER:NONE"}
// 				stallStatus={"WAITING"}
// 				startTime={"START: 5:20PM"}
// 				evangelName={"EVANGEL:KENT"}
// 				buttonName={"SELECT"}			
// 			/>
// 			<Stall 
// 				stallName={"RIGHT 1"}
// 				chargerName={"CHARGER:NONE"}
// 				stallStatus={"WAITING"}
// 				startTime={"START: 4:45PM"}
// 				evangelName={"EVANGEL:KENT"}
// 				buttonName={"SELECT"}			
// 			/>
// 			<Stall 
// 				stallName={"RIGHT 2"}
// 				chargerName={"CHARGER:3"}
// 				stallStatus={"CHARGING"}
// 				startTime={"START: 4:25PM"}
// 				evangelName={"EVANGEL:KENT"}
// 				buttonName={"SELECT"}			
// 			/>
// 		</div>
// 	);
// }

const StallCard = (stall) => {
	return (
		<div className="col">
			<h2>
				{stall.stallName}
			</h2>
	  		<p>
	  			{stall.stallStatus}
	  		</p>
 			<p>
 				{stall.startTime}
 			</p>
	  		<h2>
	  			{stall.chargerName}
	  		</h2>
  			<p>
  				{stall.evangelName}
  			</p>
	  		<button className="btn-blue">
	  			<a href="#">
	  				{stall.buttonName}
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
