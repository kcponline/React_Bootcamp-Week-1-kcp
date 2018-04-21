import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import InfoHeader from './InfoHeader/InfoHeader';
import CardList from './CardList/CardList';

class ParentComponent extends Component {
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
};

export default ParentComponent;