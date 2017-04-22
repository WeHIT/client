import { routerReducer as routing } from "react-router-redux";
import {combineReducers} from "redux";

import post from './post'
import newComment from './newComment';

const rootReducer = combineReducers({
  post,
  newComment,
});

export default rootReducer;
