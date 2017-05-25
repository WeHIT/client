import React, { Component } from 'react';
import { Storage } from '@base';
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
import ModalPicker from 'react-native-modal-picker'

import urlMap from '@url';
import storage from '@storage';

import KeyboardSpacer from '@common/component/KeyboardSpacer';

import Header from '../../component/Header';

import {
  fetchLogin,
  fetchReg,
} from '../../action';

const collegeList = [{
    key: '请选择学院',
    section: true,
    label: '请选择学院:',
  },{
    key: 'cs',
    value: '计算机学院',
    label: '计算机学院',
  }, {
    key: 'som',
    value: '管理学院',
    label: '管理学院',
  }, {
    key: 'sa',
    value: '航天学院',
    label: '航天学院',
  }, {
    key: 'fls',
    value: '外国语学院',
    label: '外国语学院',
  }];

class Fields extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // 键盘高度
      keyboardHeight: 0,
      // 键盘状态(0: 关闭; 1: 展开)
      keyboardStatus: 0,
      id: '',
      password: '',
      repassword: '',
      college: '',
      collegeShow: '',
      idCard: '',
      // 标记学院是否进行了选择
      hasSelected: 0,
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

      // 保存 Token
      Storage.save({
        key: 'token',
        value: login.data.token
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
      keyboardHeight,
      keyboardStatus,
      id,
      password,
      repassword,
      college,
      idCard,
    } = this.state;

    const {
      isLogin,
      fetchLogin,
      fetchReg
    } = this.props;

    if(isLogin.status) {
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


  onSelect(option) {
    console.log(option);
    this.setState({
      college: option.key,
      collegeShow: option.label,
      hasSelected: 1,
    })
  }

  render() {
    const {
      keyboardHeight,
      keyboardStatus,
      id,
      password,
      repassword,
      college,
      collegeShow,
      idCard,
      hasSelected,
    } = this.state;

    const {
      isLogin,
      login,
      reg,
    } = this.props;

    const isLoginStatus = isLogin ? isLogin.status : true;

    return (
      <View style={styles.container}>
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
              isLoginStatus !== true ?
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
                  <ModalPicker
                    data={collegeList}
                    cancelText="取消"
                    optionStyle={{height: 40, flex: 1, justifyContent: 'center'}}
                    onChange={(option)=>{this.onSelect(option)}}
                  >
                    <TextInput
                      style={styles.textInput}
                      editable={false}
                      placeholder={'请选择学院'}
                      value={collegeShow}
                    />
                  </ModalPicker>
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
                    isLoginStatus === true ? (
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
    isLogin: state.isLogin,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchLogin: (data) => {
      dispatch(fetchLogin(data));
    },
    fetchReg: (data) => {
      dispatch(fetchReg(data));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Fields);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
