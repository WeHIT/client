import { routerReducer as routing } from "react-router-redux";
import {combineReducers} from "redux";

import post from './post'

const rootReducer = combineReducers({
  post,
});

export default rootReducer;
