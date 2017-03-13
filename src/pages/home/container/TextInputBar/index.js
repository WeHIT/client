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
      text: ''
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
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(val) => this.changeText(val)}
            value={this.state.text} />
          </View>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>发送</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 12,
    marginLeft: 8,
    marginRight: 8
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 4
  },
  buttonTextContainer: {
    marginLeft: 6,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8e71c',
    borderRadius: 6
  },
  textInput: {
    height: 34,
    borderColor: 'gray',
  }
});