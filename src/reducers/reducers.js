import { combineReducers } from 'redux';
import { auth } from '../actions/authAction';

const reducers = combineReducers({
  auth,
});

export default reducers;
