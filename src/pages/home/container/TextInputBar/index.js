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

import { getData } from '../../action';

class TextInputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  /**
   * @desc textInput 的内容
   * @param {sting} val 
   */
  changeText(val) {
    this.setState({
      text: val
    })
    console.log(val);
  }

  /**
   * @desc 点击发送按钮
   */
  clickBtn() {
    console.log('发送data');
    console.log(this.state.text);
    this.props.getData({
      command: this.props.nextCommand.data,
      options: {
        data: this.state.text
      }
    });
    this.setState({
      text: '',
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
          <TouchableOpacity
            style={styles.buttonTextContainer}
            onPress={e => this.clickBtn(e)} >
            <Text style={styles.buttonText}>发送</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    nextCommand: state.nextCommand,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: (data) => {
      dispatch(getData(data));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TextInputBar);

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
