import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HeaderBar from '../../component/HeaderBar';
import SpeakFlow from '../../component/SpeakFlow';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar />
        <SpeakFlow />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF0F3',
  }
});