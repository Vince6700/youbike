import store from '../index'
import { FETCH_DATA, RECEIVED_DATA, RECEIVED_ERROR, Event } from '../types/types';

export const fetchData = () => ({
    type : FETCH_DATA,
});

export const receivedData = (events : Event) => ({
    type : RECEIVED_DATA,
    payload: events 
});

export const receiveError = () => ({
    type : RECEIVED_ERROR
});

export const thunkActionCreator = () => {
    store.dispatch(fetchData());
    return function (dispatch : any) {
        return fetch('https://youbike-2a3ea.firebaseio.com/randos.json')
            .then(data => 
                data.json())
            .then(jsonData => {
                const data = jsonData.filter((event : object) => event != null);
                dispatch(receivedData(data))
            })
            .catch(err => dispatch(receiveError()));
    } 
}

