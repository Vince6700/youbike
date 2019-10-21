export const FETCH_DATA = 'actions/FETCH_DATA';

export const fetchData = (data : object) => ({
    type : 'FETCH_DATA',
    events: data,
});