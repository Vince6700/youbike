import {Events, EventsActionTypes, Event} from '../types/types';
import {FETCH_DATA, RECEIVED_DATA, RECEIVED_ERROR} from '../types/types';
import {eventsOfTheMonth, sortEvents} from "../../helpers/helpers";

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
            const events = action.payload;
            const month = (new Date()).getMonth() + 1;
            const year = (new Date()).getFullYear();
            const nextEvents = eventsOfTheMonth(events, year,month);
            const sortedNextEvents = sortEvents(nextEvents);

            return {
                ...state,
                events: sortedNextEvents,
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
