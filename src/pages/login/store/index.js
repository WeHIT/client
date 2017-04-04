import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducer";
import devTools from 'remote-redux-devtools';

import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import { Platform } from 'react-native';

export default function configureStore(initialState, history) {
  const middleware = [thunkMiddleware, routerMiddleware(history)];
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
    )
  );

  return store;
}
