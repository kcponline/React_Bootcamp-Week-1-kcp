import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

const ChargingState = (props) => {
	return (
		<Button
			fluid
			color={props.charging ? 'green' : 'blue'}
			onClick={() => {
				props.updateChargerName()
				// props.updateOpenChargerCount()
	            // props.updateChargerState(props.charging)
			}}
		>
			{props.charging ? 'CHARGING' : 'OPEN'}
		</Button>
	);
};

export default ChargingState;