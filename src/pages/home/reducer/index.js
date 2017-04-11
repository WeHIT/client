import { routerReducer as routing } from "react-router-redux";
import {combineReducers} from "redux";

import speakData from './speakData'
import nextCommand from './nextCommand';
import geo from './geo';

const rootReducer = combineReducers({
  speakData,
  nextCommand,
  geo,
});

export default rootReducer;
