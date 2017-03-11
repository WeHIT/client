import React from 'react';
import { Provider } from "react-redux";
import { hashHistory } from "react-router";

import configureStore from "./store";

import App from './container/app';

import Intro from './container/Intro';

const store = configureStore({}, hashHistory);

import { Navigator } from 'react-native';

export default function AppContainer () {
  return (
    <Navigator
      initialRoute={{ name: 'Intro', component: Intro }}
      configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
      renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }}
    />   
  )
}

