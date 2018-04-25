const initialValue = [
	{
	station: "A1",
	chargerStatus: "STALL 1",
	charging: true
	},
	{
	station: "A2",
	chargerStatus: "OPEN",
	charging: false
	},
	{
	station: "A3",
	chargerStatus: "RIGHT 2",
	charging: true
	},
];

export default (state = initialValue, action) => {
	return state;
};