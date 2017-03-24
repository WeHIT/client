import { combineReducers } from 'redux';

import login from './loginReducer';
import reg from './regReducer'

const rootReducer = combineReducers({
  login,
  reg,
});

export default rootReducer;