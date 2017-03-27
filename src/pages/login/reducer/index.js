import { combineReducers } from 'redux';

import login from './loginReducer';
import reg from './regReducer';
import isLogin from './isLoginReducer';

const rootReducer = combineReducers({
  login,
  reg,
  isLogin,
});

export default rootReducer;