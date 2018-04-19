import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import ChargerCard from './ChargerCard';

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
};

export default CardList;