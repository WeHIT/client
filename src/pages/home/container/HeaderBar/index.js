import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


export default class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imgIcon} source={require('./WeHITQ.png')} />
        <Image style={styles.more} source={require('./more.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
    height: 64,
  },
  imgIcon: {
    position: 'relative',
    top: 14,
    height: 54,
    width: 54
  },
  more: {
    position: 'absolute',
    right: 10,
    top: 38,
    width: 30,
    height: 10
  }
});