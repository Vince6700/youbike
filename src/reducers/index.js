import { FETCH_DATA } from '../constants/action-types';

const initialState = {
	events: []
};

function rootReducer(state = initialState, action) {
	if (action === FETCH_DATA) {
		return Object.assign({}, state, {
			events: state.events.concat(action.payload)
		});
	}
	return state;
}

export default rootReducer;
