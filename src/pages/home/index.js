import React, { Component } from 'react';
import { Provider } from "react-redux";
import { hashHistory } from "react-router";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Navigator
} from 'react-native';

import configureStore from "./store";

import HeaderBar from './container/HeaderBar';
import SpeakFlow from './container/SpeakFlow';

const store = configureStore({}, hashHistory);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <HeaderBar />
          <SpeakFlow />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF0F3',
  }
});