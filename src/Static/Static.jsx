import React, { Component } from 'react';
import { Menu, Button, Container, Card, Header, Grid } from 'semantic-ui-react';

class Static extends Component {
	state = {
		chargername: "2",
		stallname: "L1 L2",
		openchargercount: 3,
		openstallcount: 7,
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
				<InfoHeader
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

			</div>
		);
	}
}

const InfoHeader = (props) => {
	return (
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
			color={props.charging ? 'green' : 'blue'}
			onClick={() => {
				props.updateChargerName(props.station)
				props.updateOpenChargerCount()
	            props.updateChargerState(props.charging)
			}}
		>
			{props.charging ? 'CHARGING' : 'OPEN'}
		</Button>
	);
}

export default Static;
