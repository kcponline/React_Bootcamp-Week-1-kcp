import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

const NowOpenCharger = (props) => {
	// console.log('parent properties', props);
	return (
		<Header as='h3' inverted style={{ padding: '0.5em 0.5em' }}>
			{props.chargername ? `CHARGER OPEN: ${props.chargername}` : 'NO OPEN CHARGER'}
		</Header>
	);
};

export default NowOpenCharger;
