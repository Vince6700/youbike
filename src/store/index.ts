import { createStore, combineReducers } from 'redux';
// import stores
import reducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers ({
    reducer: reducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

