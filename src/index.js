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
    rawData: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNoYWJpIiwiaWF0IjoxNDkxODI1Njg5fQ.FD1_u1gGMUni2_eohxx6w_CgyV9vf0bbVSZkD4CjPqo'
  });
  console.log('storage 初始化成功');
  storage.load({
    key: 'token',
  }).then(ret => {
    console.log(ret)
  });
  return (
    <Navigator
      initialRoute={routeMap.salesPage}
      configureScene={configureScene}
      renderScene={renderScene} />   
  )
}

