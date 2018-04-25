import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import ChargingState from './ChargingState';

const ChargerCard = (props) => {
	// console.log('charging: ', props.charging);
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
};

export default ChargerCard;
