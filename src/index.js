import React, { Component } from 'react';
import codePush from "react-native-code-push";
import { Navigator } from 'react-native';

import routeMap from '@router';
import storage from '@storage';

import { Storage } from '@base';

configureScene = (route) => {
  return Navigator.SceneConfigs.PushFromRight;
};

renderScene = (route, navigator) => {
  let Component = route.component;
  return (
    <Component
      {...route.params}
      navigator={navigator} />
  )
}

class App extends Component{

  componentDidMount() {

    // 没有 Token 的情况下塞入一个默认 Token
    Storage.load('token').then(val => {
      if (!val) {
        Storage.save({
          key: 'token',
          value: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNoYWJpIiwiaWF0IjoxNDkxODI1Njg5fQ.FD1_u1gGMUni2_eohxx6w_CgyV9vf0bbVSZkD4CjPqo'
        })
      }
    });

  }

  render() {
    return (
      <Navigator
        initialRoute={routeMap.home}
        configureScene={configureScene}
        renderScene={renderScene} />
    )
  }
}

/**
 * Configured with a MANUAL check frequency for easy testing. For production apps, it is recommended to configure a
 * different check frequency, such as ON_APP_START, for a 'hands-off' approach where CodePush.sync() does not
 * need to be explicitly called. All options of CodePush.sync() are also available in this decorator.
 */
let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

const AppContainer = codePush(codePushOptions)(App);

export default AppContainer;

