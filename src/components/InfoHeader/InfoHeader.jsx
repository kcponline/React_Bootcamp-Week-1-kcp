import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react';

import NowOpenCharger from './NowOpenCharger';
import NowOpenStall from './NowOpenStall';
import OpenChargerCount from './OpenChargerCount';
import OpenStallCount from './OpenStallCount';

const InfoHeader = (props) => {
	return (
    <Menu size='huge' inverted borderless>
      <Menu.Item position='left'>
      	<Grid.Row>
			<NowOpenCharger 
				chargername={props.chargername}
			/>
		</Grid.Row>
		<Grid.Row>
			<NowOpenStall 
				stallname={props.stallname}
			/>
		</Grid.Row>
      </Menu.Item>
      <Menu.Item position='right'>
      	<Grid.Row>
			<OpenChargerCount 
				openchargercount={props.openchargercount}
			/>
		</Grid.Row>
		<Grid.Row>
			<OpenStallCount 
				openstallcount={props.openstallcount}
			/>
		</Grid.Row>
      </Menu.Item>
    </Menu>
	);
};

export default InfoHeader;