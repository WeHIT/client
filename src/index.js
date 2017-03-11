import React from 'react';
import { Navigator } from 'react-native';

import routeMap from './router';

configureScene = (route) => {
  return Navigator.SceneConfigs.VerticalDownSwipeJump;
};

renderScene = (route, navigator) => {
  let Component = route.component;
  return (
    <Component
      {...route.params}
      navigator={navigator} />
  )
}

export default function AppContainer () {
  return (
    <Navigator
      initialRoute={routeMap.intro}
      configureScene={configureScene}
      renderScene={renderScene} />   
  )
}

