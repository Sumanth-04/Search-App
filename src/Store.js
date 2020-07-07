
import { createStore,applyMiddleware,compose  } from 'redux';
import thunk from 'redux-thunk';
//import compose from 'redux';
import allReducers from './Reducers';

const initialState = {};
const middleware = [thunk];

let store = createStore(
    allReducers,
    initialState, 
    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);




export default store;
