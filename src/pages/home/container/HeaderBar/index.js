import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import routeMap from '@router';

export default class HeaderBar extends Component {

  touchMoreCb() {
    console.log(111)
    this.props.navigator.push(routeMap.setting);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imgIcon} source={require('./WeHITQ.png')} />
        <TouchableOpacity
          style={styles.moreContainer}
          onPress={e => this.touchMoreCb(e)}>
          <Image style={styles.more} source={require('./more.png')} />
        </TouchableOpacity>
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
  moreContainer: {
    position: 'absolute',
    right: 10,
    top: 38,
  },
  more: {
    width: 30,
    height: 10
  }
});
