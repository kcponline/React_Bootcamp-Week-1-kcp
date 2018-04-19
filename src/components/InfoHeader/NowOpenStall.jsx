import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

const NowOpenStall = (props) => {
	console.log('parent properties', props);
	return (
		<Header as='h3' inverted style={{ padding: '0.5em 0.5em' }}>
			{props.stallname ? `STALL OPEN: ${props.stallname}` : 'NO OPEN STALL'}
		</Header>
	);
};

export default NowOpenStall;