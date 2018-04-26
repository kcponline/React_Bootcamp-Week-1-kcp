import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

const OpenChargerCount = (props) => {
	return (
		<Header as='h3' inverted style={{ padding: '0.5em 0.5em' }}>
			{props.openchargercount > 0 && `${props.openchargercount} OPEN CHARGER`}
		</Header>
	);
};

export default OpenChargerCount;