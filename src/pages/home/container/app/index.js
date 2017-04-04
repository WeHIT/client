import React, { Component } from 'react';
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

import HeaderBar from '../HeaderBar';
import SpeakFlow from '../SpeakFlow';
import TipBar from '../TipBar';
import TextInputBar from '../TextInputBar';
import KeyboardSpacer from '@common/component/KeyboardSpacer';

export default class App extends Component {

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
          keyboardStatus={keyboardStatus} />
        <TipBar />
        <TextInputBar style={styles.textInput} />
        <KeyboardSpacer
          keyboardSpace={keyboardHeight * keyboardStatus} />
      </View>
    );
  }
}


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
