import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

const OpenStallCount = (props) => {
	// console.log('parent properties', props);
	return (
		<Header as='h3' inverted style={{ padding: '0.5em 0.5em' }}>
			{props.openstallcount > 0 && `${props.openstallcount} OPEN STALL`}
		</Header>
	);
};

export default OpenStallCount;
