import React, { Component } from 'react';
import { connect } from "react-redux";
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

import urlMap from '@url';

import Header from '../../component/Header';
import Fields from '../fields';

import { changeIsLogin } from '../../action';

class App extends Component {

  constructor(props) {
    super(props);
  };

  changeLoginOrRegStatus(e) {
    this.props.changeIsLogin(!this.props.isLogin.status); 
  }

  touchBack(e) {
    this.props.navigator.pop();
  }

  render() {
    const {
      isLogin
    } = this.props;

    return ( 
      <View style={styles.container}>
        <Header
          leftText='返回'
          middleText={isLogin.status === true ? '登 录' : '注 册'}
          rightText={isLogin.status !== true ? '登录' : '注册'}
          leftCb={e => this.touchBack(e)}
          rightCb={(e) => this.changeLoginOrRegStatus(e)}
         />
         <Fields />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogin: state.isLogin,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeIsLogin: (status) => {
      dispatch(changeIsLogin(status));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});