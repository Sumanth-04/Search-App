import { combineReducers } from 'redux';
import counter  from './counter';
import isLogged  from './isLogged';
import postReducer from '../Reducers/postReducer'

const allReducers = combineReducers({
    counter,
    isLogged,
    posts : postReducer
});

export default allReducers;