import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

import ChargerCard from './ChargerCard';

const CardList = (props) => {
	console.log('CardList props: ', props);
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
};

const mapStateToProps =(state) => {
	return {
		chargers: state.chargers
	}
}

export default connect(mapStateToProps)(CardList);