import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducer";
import { routerMiddleware } from "react-router-redux";

export default function configureStore(initialState, history) {
  const middleware = [thunkMiddleware, routerMiddleware(history)];
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}
