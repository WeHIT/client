import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Image
} from 'react-native';

import AppIntro from 'react-native-app-intro';

import App from '../app/index';

export default class Intro extends Component {
  
  onSkipBtnHandle = (index) => {
    Alert.alert('Skip');
    console.log(index);
  }
  doneBtnHandle = () => {
    Alert.alert('Done');
    this.props.navigator.push({
      name : 'App',
      component: App,
      params : {
        name : 'Tom'
      }
    })
  }
  nextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  render() {
    return (
      <AppIntro
        showSkipButton={false}
        doneBtnLabel={'进入'}
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
      >
        <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
          <Image 
            style={styles.img}
            source={require('../../component/HeaderBar/WeHITQ.png')}
          />
          <View level={15}>
            <Text style={styles.title}>新一代的交互体验</Text>
          </View>
          <View level={8}>
            <Text style={styles.desc}>享受 Sari、Contana、阿里小蜜般的交互体验</Text>
          </View>
        </View>
        <View style={[styles.slide,{ backgroundColor: '#a4b602' }]}>
          <Image 
            style={styles.img}
            source={require('../../component/HeaderBar/WeHITQ.png')}
          />
          <View level={15}>
            <Text style={styles.title}>新一代的交互体验</Text>
          </View>
          <View level={8}>
            <Text style={styles.desc}>享受 Sari、Contana、阿里小蜜般的交互体验</Text>
          </View>
        </View>
      </AppIntro>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF0F3',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  title: {
    marginTop: 100,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 20,
    color: '#fff',
  },
  img: {
    width: 260,
    height: 260
  }
});