import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

export default class TextInputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '这是输入框'
    }
  }

  changeText(val) {
    this.setState({
      text: val
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <View
        behavior="padding">
        <TextInput
            style={styles.textInput}
            onChangeText={(val) => this.changeText(val)}
            value={this.state.text} />
          <TextInput
            style={styles.textInput}
            onChangeText={(val) => this.changeText(val)}
            value={this.state.text} />
            <View style={{ height: 260 }} />
        </View>
        <View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 4
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});