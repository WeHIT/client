import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  Platform,
} from 'react-native';

import { Geolocation } from 'react-native-baidu-map';

import HeaderBar from '../HeaderBar';
import SpeakFlow from '../SpeakFlow';
import TipBar from '../TipBar';
import TextInputBar from '../TextInputBar';
import KeyboardSpacer from '@common/component/KeyboardSpacer';

import {
  getNewGeo,
} from '../../action';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // 键盘高度
      keyboardHeight: 0,
      // 键盘状态(0: 关闭; 1: 展开)
      keyboardStatus: 0,
    }
  };

  componentDidMount() {
    this.keyboardShow = Keyboard.addListener('keyboardWillShow', 
      this.updateKeyboardSpace.bind(this)
    );
    this.keyboardHide = Keyboard.addListener('keyboardWillHide',
      this.resetKeyboardSpace.bind(this)
    );

    // 定位相关
    if(Platform.OS === 'ios') {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        console.log(Platform.OS);
          this.props.getNewGeo({
            lon: position.coords.longitude,
            lat: position.coords.latitude
          });
        }, error => alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
        this.props.getNewGeo({
          lon: position.coords.longitude,
          lat: position.coords.latitude
        });
      });
    } else {
      console.log('这是android');
      Geolocation.getCurrentPosition()
        .then(position => {
          console.log(position)
          // 有时候没有定位
          if(position.longitude !== 5e-324) {
            this.props.getNewGeo({
              lon: position.longitude,
              lat: position.latitude,
            })
          }
        })
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

  render() {
    const {
      keyboardHeight,
      keyboardStatus
    } = this.state;
    const {
      ...other
    } = this.props;
    return (
      <View style={styles.container}>
        <HeaderBar 
          {...other} />
        <SpeakFlow 
          keyboardHeight={keyboardHeight}
          keyboardStatus={keyboardStatus}
          {...other} />
        <TipBar />
        <TextInputBar style={styles.textInput} />
        <KeyboardSpacer
          keyboardSpace={keyboardHeight * keyboardStatus} />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
   geo: state.geo
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNewGeo: data => {
      dispatch(getNewGeo(data))
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
    backgroundColor: '#EEF0F3',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  empty:{
        flex:4
    },
});
