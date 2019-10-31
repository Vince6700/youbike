import store from '..'

export const FETCH_DATA = 'actions/FETCH_DATA';
export const RECEIVED_DATA = 'actions/RECEIVED_DATA';
export const RECEIVED_ERROR = 'actions/RECEIVED_ERROR';


export const fetchData = () => ({
    type : 'FETCH_DATA',
});

export const receivedData = (events : []) => ({
    type : 'RECEIVED_DATA',
    events 
});

export const receiveError = () => ({
    type : 'RECEIVED_ERROR'
});

export const thunkActionCreator = () => {
    store.dispatch(fetchData());
    return function (dispatch : any, getState : any) {
        return fetch('https://youbike-2a3ea.firebaseio.com/randos.json')
            .then(data => data.json())
            .then(data => {
                if(data.message = 'Not Found') {
                    throw new Error('No events found');
                } else dispatch(receivedData)
            })
            .catch(err => dispatch(receiveError()));
    } 
}

