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


import TextInputBar from '@common/component/TextInputBar';

class App extends Component {
  render() {
    const {
      ...other
    } = this.props;
    return(
      <View style={styles.container}>
        <TextInputBar
          btnText="评论"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(238, 238, 238)',
  },
});
export default App;
