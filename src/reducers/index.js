import { combineReducers } from 'redux';
import { call } from './call';
import { peer } from './peer';

export default combineReducers({
  call,
  peer 
})
