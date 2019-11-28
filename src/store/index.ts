import { createStore, combineReducers, applyMiddleware } from 'redux';
//middleware
import thunk from 'redux-thunk';
// import stores
import {eventsReducer} from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers ({
    eventsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const middleware = [
    thunk,
]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

