import { createStore, combineReducers, applyMiddleware } from 'redux';
//middleware
import reduxThunk from 'redux-thunk';
// import stores
import reducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers ({
    reducer: reducer,
});

const middleware = [
    reduxThunk,
]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

