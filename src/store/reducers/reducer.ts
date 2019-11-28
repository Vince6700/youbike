import { Events } from '../types/types';
import { FETCH_DATA, RECEIVED_DATA, RECEIVED_ERROR} from '../types/types';

const initialState: Events = { events: [], isError: false, isFetching: false }

const eventsReducer = (
        state = initialState, 
        action = { type : '', payload : []}
    ) => {
    switch (action.type) {
        case FETCH_DATA: {
            return {
                ...state,
                isFetching: true,
                isError: false,
            }
        }

        case RECEIVED_DATA: {
            return {
                ...state,
                events: action.payload,
                isFetching: false,
                isError: false,
            }
        }
        case RECEIVED_ERROR: {
            return {
                ...state,
                isFetching: false,
                isError: true,
            }
        }
        default:
            return state;
    }
}

export default eventsReducer;