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
  TextInput,
  TouchableOpacity
} from 'react-native';

import configureStore from "./store";

const store = configureStore({}, hashHistory);

import App from './container';


const Login = () => (
  <Provider store={store}> 
      <App />
  </Provider>
);

export default Login;