import { combineReducers } from 'redux';
import JamsReducer from './reducer_jams';

const rootReducer = combineReducers({
  jams: JamsReducer
});

export default rootReducer;
