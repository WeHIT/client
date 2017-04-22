import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

class TextInputBar extends Component {

  static propTypes = {
    text: PropTypes.string,
    btnText: PropTypes.string,
    changeTextCb: PropTypes.func,
    clickBtnCb: PropTypes.func,
  }

  static defaultProps = {
    text: '',
    btnText: '评论',
    changeTextCb: () => {},
    clickBtnCb: () => {},
  }

  constructor(props) {
    super(props);
  }


  render () {
    const {
      text,
      btnText,
      changeTextCb,
      clickBtnCb,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(val) => changeTextCb(val)}
            value={text} />
          </View>
          <TouchableOpacity
            style={styles.buttonTextContainer}
            onPress={e => clickBtnCb(e)} >
            <Text style={styles.buttonText}>{btnText}</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default TextInputBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 12,
    marginLeft: 8,
    marginRight: 8,
  },
  textInputContainer: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: 'white',
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
    // borderColor: 'rgb(200, 200, 200)',
    // borderWidth: 1,
    borderRadius: 2,
  }
});
