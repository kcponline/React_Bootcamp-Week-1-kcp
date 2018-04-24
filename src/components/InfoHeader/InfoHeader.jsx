import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Grid } from 'semantic-ui-react';

import NowOpenCharger from './NowOpenCharger';
import NowOpenStall from './NowOpenStall';
import OpenChargerCount from './OpenChargerCount';
import OpenStallCount from './OpenStallCount';

const InfoHeader = (props) => {
		console.log('infoheader props', props);
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

const mapStateToProps = (state) => {
	return {
		chargername: state.toolbar.chargername,
		stallname: state.toolbar.stallname,
		openchargercount: state.toolbar.openchargercount,
		openstallcount: state.toolbar.openstallcount
	}
}

export default connect(mapStateToProps)(InfoHeader);