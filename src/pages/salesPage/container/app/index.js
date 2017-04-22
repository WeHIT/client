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

import Toast, { DURATION } from 'react-native-easy-toast';

import Header from '@common/component/Header';
import Post from '../post';
import TextInputBar from '../textInputBar';

class App extends Component {

  constructor(props) {
    super(props);
    this.backToHome = this.backToHome.bind(this);
  }

  componentWillUpdate(nextProps) {
    const {
      newComment,
    } = nextProps;

    if(newComment.isFetching === false && this.props.newComment.isFetching === true && newComment.data.msg) {
      this.refs.toast.show(newComment.data.msg);
    }
  }

  backToHome() {
    this.props.navigator.pop();
  }

  render() {
    const {
      ...other
    } = this.props;
    
    return(
      <View style={styles.container}>
        <Header
          middleText="[求购][C++ primer/C++ primer plus/Effective C++]"
          rightText=""
          leftCb={ this.backToHome} />
        <Post style={styles.postView} {...other}/>
        <TextInputBar {...other}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    newComment: state.newComment,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
