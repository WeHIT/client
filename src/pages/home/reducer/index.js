import { routerReducer as routing } from "react-router-redux";
import {combineReducers} from "redux";

import speakData from './speakData'
import nextCommand from './nextCommand';
import geo from './geo';
import tipBar from './tipBar';

const rootReducer = combineReducers({
  speakData,
  nextCommand,
  geo,
  tipBar,
});

export default rootReducer;
