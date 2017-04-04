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
      devTools({
        name: Platform.OS,
        hostname: '127.0.0.1',
        port: 5678
      }),
    )
  );

  return store;
}
