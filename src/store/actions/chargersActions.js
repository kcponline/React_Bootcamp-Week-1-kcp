export const updateChargerName = (chargername) => {
	console.log('UPDATE CHARGER ACTION', chargername);
	return {
		type: 'UPDATE_CURRENT_CHARGER'
		// payload: chargername
	}
}


// updateChargerName = (chargername) => {
// 	console.log('open charger name:', chargername);
// 	this.setState(() => ({ chargername:chargername }));
// }