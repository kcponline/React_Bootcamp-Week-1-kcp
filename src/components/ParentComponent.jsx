import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import InfoHeader from './InfoHeader/InfoHeader';
import CardList from './CardList/CardList';

class ParentComponent extends Component {

	updateChargerName = (chargername) => {
		console.log('open charger name:', chargername);
	}

	updateOpenChargerCount = () => {
		console.log('+1 Open Charger Count');
	}

	updateChargerState = (chargerClicked) => {
		console.log('Now Charging:', chargerClicked);
	}

	render() {
		const { chargername, stallname, openchargercount, openstallcount, chargers } = this.props;
		return (
			<div>
				<InfoHeader />
				<Container>
					<CardList />
				</Container>
			</div>
		);
	}
};

export default ParentComponent;