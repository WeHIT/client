import React, { Component } from 'react';
import { connect } from "react-redux";
import md5 from 'md5';
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

import Toast, { DURATION } from 'react-native-easy-toast';

import urlMap from '@url';
import storage from '@storage';

import KeyboardSpacer from '@common/component/KeyboardSpacer';

import {
  fetchLogin,
  fetchReg,
} from '../action';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      // 键盘高度
      keyboardHeight: 0,
      // 键盘状态(0: 关闭; 1: 展开)
      keyboardStatus: 0,
      id: '',
      password: '',
      repassword: '',
      college: '',
      idCard: ''
    }
  };

  componentDidMount() {
    this.keyboardShow = Keyboard.addListener('keyboardWillShow', 
      this.updateKeyboardSpace.bind(this)
    );
    this.keyboardHide = Keyboard.addListener('keyboardWillHide',
      this.resetKeyboardSpace.bind(this)
    );
  }

  componentWillUpdate(nextProps) {
    const {
      login,
      reg
    } = nextProps;

    if(login.isFetching === false && this.props.login.isFetching === true) {
      this.refs.toast.show(login.data.text);
      storage.save({
        key: 'token',
        rawData: login.data.token
      });
      storage.load({
        key: 'token',
      }).then(ret => {
        console.log(ret)
      });
    }

    if(reg.isFetching === false && this.props.reg.isFetching === true) {
      this.refs.toast.show(reg.data.text);
    }
  }

  updateKeyboardSpace(frames){
    if(!frames.endCoordinates){
      return;
    }
    // 获取键盘高度
    let keyboardHeight = frames.endCoordinates.height;
    this.setState({
      keyboardHeight: keyboardHeight,
      keyboardStatus: 1
    })
  }

  resetKeyboardSpace() {
    this.setState({
      keyboardStatus: 0
    })
  }

  validPassword() {
    const {
      password,
      repassword
    } = this.state;
    if(password !== repassword) {
      this.refs.toast.show('两次密码输入不一致');
      return false
    }
    return true;
  }

  touchLoginBtn() {
    const {
      isLogin,
      keyboardHeight,
      keyboardStatus,
      id,
      password,
      repassword,
      college,
      idCard,
    } = this.state;

    const {
      fetchLogin,
      fetchReg
    } = this.props;

    if(isLogin) {
      fetchLogin({
        id,
        password,
      });
    } else if(this.validPassword()) {
      fetchReg({
        id,
        password,
        college,
        idCard
      });
    }
  };

  changeLoginOrRegStatus(e) {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }

  render() {
    const {
      isLogin,
      keyboardHeight,
      keyboardStatus,
      id,
      password,
      repassword,
      college,
      idCard,
    } = this.state;

    const {
      login,
      reg
    } = this.props;

    return ( 
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.leftTitle}>
            <Image
              style={styles.backIcon}
              source={require('@img/back.png')}
            />
            <Text>返回</Text>
          </View>
          <View style={styles.contentTitle}>
            <Text>{ isLogin === true ? '登 录' : '注 册' }</Text>
          </View>
          <TouchableOpacity 
            style={styles.rightTitle}
            onPress={(e) => this.changeLoginOrRegStatus(e)}>
            <Text>
              {
                isLogin !== true ? '登录' : '注册'
              }
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBody}>
          <ScrollView
            ref={ref => this.scrollView  = ref}
          >
            <View style={styles.logoContainer}>
              <Image
                style={styles.logoImg}
                source={require('@img/WeHITQ.png')}
              />
            </View>
            <View style={styles.loginInputContainer}>
              <TextInput
                placeholder="学号"
                style={styles.textInput}
                value={id}
                onChangeText={(value) => this.setState({id: value})} />
            </View>
            <View style={styles.loginInputContainer}>
              <TextInput
                placeholder="密码"
                password={true}
                style={styles.textInput}
                value={password}
                onChangeText={(value) => this.setState({password: value})} />
            </View>
            {
              isLogin !== true ?
              <View>
                <View style={styles.loginInputContainer}>
                  <TextInput
                    placeholder="再次输入密码"
                    password={true}
                    style={styles.textInput}
                    value={repassword}
                    onChangeText={(value) => this.setState({repassword: value})} />
                </View>
                <View style={styles.loginInputContainer}>
                  <TextInput
                    placeholder="学院"
                    style={styles.textInput}
                    value={college}
                    onChangeText={(value) => this.setState({college: value})} />
                </View>
                <View style={styles.loginInputContainer}>
                  <TextInput
                    placeholder="身份证后6位(可选)"
                    style={styles.textInput}
                    value={idCard}
                    onChangeText={(value) => this.setState({idCard: value})} />
                </View>
              </View> : null
            }
            <View style={styles.loginBtnContainer}>
              <TouchableOpacity
              style={styles.loginContainer}
              onPress={() => {this.touchLoginBtn()}}>
                <Text style={styles.loginText}>
                  {
                    isLogin === true ? (
                      login.isFetching ? '正在登录中...' : '登       录'
                    ) : (
                      reg.isFetching ? '正在注册中...' : '注       册'
                    )
                  }
                </Text>
              </TouchableOpacity>
            </View>
            <KeyboardSpacer
              keyboardSpace={keyboardHeight * keyboardStatus} />
          </ScrollView>
        </View>
        <Toast
          ref="toast"
          style={{backgroundColor:'#f8e71c'}}
          position='bottom'
          positionValue={200}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{color:'black'}} />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login,
    reg: state.reg,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchLogin: (data) => {
      dispatch(fetchLogin(data));
    },
    fetchReg: (data) => {
      dispatch(fetchReg(data));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);


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
    width: 56,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  backIcon: {
    width: 16,
    height: 16
  },
  contentTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightTitle: {
    width: 56,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  containerBody: {
    flex: 1,
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
    fontSize: 18,
    color: '#444'
  }
});