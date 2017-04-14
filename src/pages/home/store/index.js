import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducer";
import devTools from 'remote-redux-devtools';

import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import { Platform } from 'react-native';

import { logger } from '../middleware';
//import logger from '../middleware/logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState, history) {
  const middleware = [thunkMiddleware, logger, routerMiddleware(history)];
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
    )
  );

  return store;
}
