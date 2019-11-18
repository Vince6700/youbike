import store from '../index'

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
            .then(data => 
                data.json())
            .then(jsonData => {
                if(jsonData.message === 'Not Found') {
                    throw new Error('No events found');
                } else dispatch(receivedData(jsonData))
            })
            .catch(err => dispatch(receiveError()));
    } 
}

