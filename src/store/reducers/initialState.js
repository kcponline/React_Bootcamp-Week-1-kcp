const initialValue = {
	chargername: "2",
	stallname: "L1 L2",
	openchargercount: 3,
	openstallcount: 7,
	chargers: [
		{
		station: "1",
		chargerStatus: "STALL 1",
		charging: true
		},
		{
		station: "2",
		chargerStatus: "OPEN",
		charging: false
		},
		{
		station: "3",
		chargerStatus: "RIGHT 2",
		charging: true
		},
	]
};

export default (state = initialValue, action) => {
	return state;
};