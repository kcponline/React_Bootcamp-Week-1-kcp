import { combineReducers } from 'redux';

import chargersReducer from './chargers';
import toolbarReducer from './toolbar';

// this is essentially an object maker. a shorthand or abstraction.
export default combineReducers ({
	chargers: chargersReducer,
	toolbar: toolbarReducer
});

// the object that will be made is the following which becomes a global state to be accessed.
// {
// 	chargers: [
// 		{
// 		station: "1",
// 		chargerStatus: "STALL 1",
// 		charging: true
// 		},
// 		{
// 		station: "2",
// 		chargerStatus: "OPEN",
// 		charging: false
// 		},
// 		{
// 		station: "3",
// 		chargerStatus: "RIGHT 2",
// 		charging: true
// 		},
// 	],
// 	toolbar: {
// 		chargername: "2",
// 		stallname: "L1 L2",
// 		openchargercount: 3,
// 		openstallcount: 7
// 	}
// }