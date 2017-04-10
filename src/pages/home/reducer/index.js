import { routerReducer as routing } from "react-router-redux";
import {combineReducers} from "redux";

import speakData from './speakData'
import nextCommand from './nextCommand';

const rootReducer = combineReducers({
  speakData,
  nextCommand,
});

export default rootReducer;
