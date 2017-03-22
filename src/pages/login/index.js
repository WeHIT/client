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

// import configureStore from "./store";

// const store = configureStore({}, hashHistory);

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  };

  componentDidMount() {
  }


  render() { 
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.leftTitle}>
            <Text>返回</Text>
          </View>
          <View style={styles.contentTitle}>
            <Text>登录</Text>
          </View>
          <View style={styles.rightTitle}>
            <Text>注册</Text>
          </View>
        </View>
        <ScrollView style={styles.containerBody}>
          <KeyboardAvoidingView
            behavior="padding">
            <View style={styles.logoContainer}>
              <Image
                style={styles.logoImg}
                source={require('../../asset/img/WeHITQ.png')}
              />
            </View>
            <View style={styles.loginInputContainer}>
              <TextInput
                placeholder="账号"
                style={styles.textInput} />
            </View>
            <View style={styles.loginInputContainer}>
              <TextInput
                placeholder="密码"
                style={styles.textInput} />
            </View>
            <View style={styles.loginBtnContainer}>
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>登       录</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    height: 58,
    backgroundColor: '#f8e71c',
  },
  leftTitle: {
    width: 44,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  contentTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightTitle: {
    width: 44,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerBody: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#e7e9ec',
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoImg: {
    width: 140,
    height: 140
  },
  loginInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#fff',
    marginTop: 10,
    width: 280,
    borderRadius: 4,
    paddingLeft: 20
  },
  loginBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginContainer: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8e71c',
    borderRadius: 6,
    height: 40,
    width: 280
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#444'
  }
});