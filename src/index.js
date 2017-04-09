import React from 'react';
import { Navigator } from 'react-native';

import routeMap from '@router';
import storage from '@storage';

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

export default function AppContainer () {
  storage.save({
    key: 'token',
    rawData: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6MTEzMDMxMDEyOCwiaWF0IjoxNDkxMjIyNDIyfQ.C0qnB-_tBWyGxeww-6W1BzBjHSHw_peePqgAJhnB9WY',
  });
  console.log('storage 初始化成功');
  storage.load({
    key: 'token',
  }).then(ret => {
    console.log(ret)
  });
  return (
    <Navigator
      initialRoute={routeMap.home}
      configureScene={configureScene}
      renderScene={renderScene} />   
  )
}

