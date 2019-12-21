import { Events, EventsActionTypes, Event } from '../types/types';
import { FETCH_DATA, RECEIVED_DATA, RECEIVED_ERROR} from '../types/types';

const initialState: Events = { events: [], isError: false, isFetching: false }

export const eventsReducer = (
        state : Events = initialState,
        action : EventsActionTypes
    ) : Events => {
    switch (action.type) {
        case FETCH_DATA: {
            return {
                ...state,
                isFetching: true,
                isError: false,
            }
        }

        case RECEIVED_DATA: {
            const nextEvent = action.payload.filter(event => event.jour <= 20200130 && event.jour >= 20191201);
            return {
                ...state,
                events: nextEvent,
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
