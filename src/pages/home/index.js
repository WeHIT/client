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
  Navigator,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput
} from 'react-native';

import configureStore from "./store";

const store = configureStore({}, hashHistory);

import App from './container/app';

export default class Home extends Component {
  render() {
    const {
      ...other
    } = this.props;
    console.log(111)
    return (
      <Provider store={store}>
        <App 
          {...other} />
      </Provider>
    );
  }
}
