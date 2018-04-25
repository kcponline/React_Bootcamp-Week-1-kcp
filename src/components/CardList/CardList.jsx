import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateChargerName } from '../../store/actions/chargersActions';
import { Card } from 'semantic-ui-react';

import ChargerCard from './ChargerCard';

const CardList = (props) => {
	// console.log('updateChargerName', updateChargerName)
	console.log('CardList props: ', props);
	return (
		<Card.Group itemsPerRow={3}>
			{
				props.chargers.map((charger, index) => {
					console.log('charders array', index, charger);
					// You have to send that action as an argument to the dispatch function
					// The dispatch function is what will communicate with the redux store/reducers
					// look at updateChargerName to see how to send methods as properties.
					// I also set updateOpenChargerCount and updateChargerState as null so updateChargerState
					// those functions wouldn't throw errors downstream in the children
					return (
						<ChargerCard
							key={index}
							station={charger.station}
							chargerStatus={charger.chargerStatus}
							charging={charger.charging}
							updateChargerName={() => props.dispatch(updateChargerName(charger.station))}
							updateOpenChargerCount={null}
							updateChargerState={null}
						/>
					)
				})
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
