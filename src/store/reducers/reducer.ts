import {FETCH_DATA} from '../actions/index';

const initialState = { events: [] }

const reducer = (state = initialState, action = { type : '', events : []}) => {
    switch (action.type) {
        case FETCH_DATA: {
            return {
                ...state,
                events: action.events,
            }
        }
        default:
            return state;
    }
}

export default reducer;