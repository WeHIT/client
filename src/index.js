import React from 'react';
import { Provider } from "react-redux";
import { hashHistory } from "react-router";

import configureStore from "./store";

import App from './container/app';

const store = configureStore({}, hashHistory);

export default function AppContainer () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

