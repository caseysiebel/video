import { combineReducers } from 'redux';
import { call } from './call';
import { peer } from './peer';
import { stream } from './stream';

export default combineReducers({
  call,
  peer,
  stream
})
