import React, { Component } from 'react';
import { Provider, connect } from "react-redux";
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

import {
  postData
} from '../../action';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.changeTextCb = this.changeTextCb.bind(this);
    this.clickBtnCb = this.clickBtnCb.bind(this);
  }

  changeTextCb(val) {
    this.setState({
      text: val,
    });
  }

  clickBtnCb() {
    console.log(this.state.text);
    const {
      id,
      type
    } = this.props;
    if (this.state.text.trim() !== '') {
      this.props.postData({
        command: 'postComment',
        options: {
          type,
          postId: id,
          content: this.state.text,
        },
      });
      this.setState({
        text: '',
      });
    }
  }

  render() {
    const {
      ...other
    } = this.props;
    const {
      text
    } = this.state;

    return(
      <View style={styles.container}>
        <TextInputBar
          text={text}
          btnText="评论"
          changeTextCb={this.changeTextCb}
          clickBtnCb={this.clickBtnCb}
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

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postData: (data) => {
      dispatch(postData(data));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
