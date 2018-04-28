const initialValue = {
	chargername: "2",
	stallname: "L1 L2",
	openchargercount: 3,
	openstallcount: 7
};

export default (state = initialValue, action) => {
	switch (action.type) {
		case 'UPDATE_CURRENT_CHARGER':
			return { ...state, chargername: action.payload }
		default:
			return state;
	}
};