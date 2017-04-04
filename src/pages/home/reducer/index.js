import { routerReducer as routing } from "react-router-redux";
import {combineReducers} from "redux";

import speakData from './speakData'

const rootReducer = combineReducers({
  speakData,
});

export default rootReducer;
