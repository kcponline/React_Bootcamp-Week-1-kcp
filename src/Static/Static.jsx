// remove { Component } when stateless static.
// import React, from 'react'; // use for stateless static mockup
import React, { Component } from 'react';
// then inject the html code inside the div container. the final part is to export the const Static
import { Menu, Button, Container, Card, Header, Grid } from 'semantic-ui-react';

class Static extends Component {
	state = {
		chargername: "2",
		stallname: "L1 L2",
		openchargercount: 3,
		openstallcount: 7,
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
			{
			station: "1",
			chargerStatus: "STALL 1",
			charging: true
			},
			{
			station: "2",
			chargerStatus: "OPEN",
			charging: false
			},
			{
			station: "3",
			chargerStatus: "RIGHT 2",
			charging: true
			},
		]
	}

	updateChargerName = (chargername) => {
	// console.log('open charger name:', chargername);
		this.setState(() => ({ chargername:chargername }));
	}

	updateOpenChargerCount = () => {
	// console.log('+1 Open Charger Count');
		this.setState((priorstate) => ({ openchargercount:priorstate.openchargercount - 1 }));
	}

	updateChargerState = (chargerClicked) => {
	console.log('Now Charging:', chargerClicked);
	}

	render() {
		const { chargername, stallname, openchargercount, openstallcount, chargers } = this.state;
		return (
			<div>
				<InfoHeader // 1) in semantic-ui, Header is used in library and so the css name Header has to change to InfoHeader
					chargername={chargername}
					stallname={stallname}
					openchargercount={openchargercount}
					openstallcount={openstallcount}
				/>
				<Banner />
				<Container>
					<CardList 
						chargers={chargers}
						updateChargerName={this.updateChargerName}
			            updateOpenChargerCount={this.updateOpenChargerCount}
			            updateChargerState={this.updateChargerState}
					/>
				</Container>
				<Footer />
			</div>
		);
	}
}
// static component
const InfoHeader = (props) => {
	return ( // 2) replace div with Menu
    <Menu size='huge' inverted borderless>
      <Menu.Item position='left'>
      	<Grid.Row>
			<NowOpenCharger 
				chargername={props.chargername}
			/>
		</Grid.Row>
		<Grid.Row>
			<NowOpenStall 
				stallname={props.stallname}
			/>
		</Grid.Row>
      </Menu.Item>
      <Menu.Item position='right'>
      	<Grid.Row>
			<Openchargercount 
				openchargercount={props.openchargercount}
			/>
		</Grid.Row>
		<Grid.Row>
			<Openstallcount 
				openstallcount={props.openstallcount}
			/>
		</Grid.Row>
      </Menu.Item>
    </Menu>
	);
}

const NowOpenCharger = (props) => {
	console.log('parent properties', props);
	return (
		<Header as='h3' inverted style={{ padding: '0.5em 0.5em' }}>
			{props.chargername ? `CHARGER OPEN: ${props.chargername}` : 'NO OPEN CHARGER'}
		</Header>
	);
}

const NowOpenStall = (props) => {
	console.log('parent properties', props);
	return (
		<Header as='h3' inverted style={{ padding: '0.5em 0.5em' }}>
			{props.stallname ? `STALL OPEN: ${props.stallname}` : 'NO OPEN STALL'}
		</Header>
	);
}

const Openchargercount = (props) => {
	console.log('parent properties', props);
	return (
		<Header as='h3' inverted style={{ padding: '0.5em 0.5em' }}>
			{props.openchargercount > 0 && `${props.openchargercount} OPEN CHARGER`}
		</Header>
	);
}

const Openstallcount = (props) => {
	console.log('parent properties', props);
	return (
		<Header as='h3' inverted style={{ padding: '0.5em 0.5em' }}>
			{props.openstallcount > 0 && `${props.openstallcount} OPEN STALL`}
		</Header>
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
		<Grid container style={{ padding: '5em 0em' }}>
			<Grid.Row>
				<Grid.Column>
					<Headline 
						title={"EV Angel"}
					/>
					<Tagline 
						title={"Helping you to get your EV Charging"}
					/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}

const Headline = (bannerprops) => {
	return (
			<Header as='h1' dividing align='center'>
				{bannerprops.title}
			</Header>
	);
}

const Tagline = (bannerprops) => {
	return (
			<Header as='h1' dividing align='center'>
	  			{bannerprops.title}
			</Header>
	);
}

const CardList = (props) => {
	// console.log just to make sure that the props are passing down correctly
	console.log('chargers: ', props);
	return (
		<Card.Group itemsPerRow={3}>
			{
			props.chargers.map((charger, index) => (
				<ChargerCard
					key={index}
					station={charger.station}
					chargerStatus={charger.chargerStatus}
					charging={charger.charging}
					updateChargerName={props.updateChargerName}
		            updateOpenChargerCount={props.updateOpenChargerCount}
		            updateChargerState={props.updateChargerState}
				/>
			))
			}
		</Card.Group>
	);
}

const ChargerCard = (props) => {
	console.log('charging: ', props.charging);
	return (
		<Card align='center'
			header={props.station}
			meta={props.chargerStatus}
			extra={
				<ChargingState
					station={props.station}
					charging={props.charging}
					updateChargerName={props.updateChargerName}
					updateOpenChargerCount={props.updateOpenChargerCount}
		            updateChargerState={props.updateChargerState}
				/>
			}
		/>
	);
}

const ChargingState = (props) => {
	return (
		<Button
			fluid
			header={props.charging ? 'CHARGING' : 'OPEN'}
			color={props.charging ? 'green' : 'blue'}
			onClick={() => {
				props.updateChargerName(props.station)
				props.updateOpenChargerCount()
	            props.updateChargerState(props.charging)
			}}
		/>
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

// const Stall = (stallprops) => {
// 	return (
// 		<div className="col">
// 			<h2>
// 				{stallprops.stallName}
// 			</h2>
// 	  		<p>
// 	  			{stallprops.chargerName}
// 	  		</p>
// 	  		<p>
// 	  			{stallprops.stallStatus}
// 	  		</p>
//  			<p>
//  				{stallprops.startTime}
//  			</p>
//   			<p>
//   				{stallprops.evangelName}
//   			</p>
// 	  		<button className="btn-blue">
// 	  			<a href="#">
// 	  				{stallprops.buttonName}
// 	  			</a>
// 	  		</button>
// 		</div>
// 	);
// }

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
