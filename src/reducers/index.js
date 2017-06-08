import { combineReducers } from 'redux';
import JamsReducer from './reducer_jams';
import ActiveJam from './reducer_active_jam';

const rootReducer = combineReducers({
  jams: JamsReducer,
  activeJam: ActiveJam
});

export default rootReducer;
