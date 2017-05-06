import React, { Component } from 'react';
import AppIntro from 'react-native-app-intro';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Image
} from 'react-native';

import routeMap from '@router';

const data = [{
  img: require('./WeHITQ.png'),
  title: '新一代的交互体验',
  desc: '享 Sari、Contana、阿里小蜜般的交互体验',
  bgColor: '#fa931d'
}, {
  img: require('./WeHITQ.png'),
  title: '新一代的交互体验',
  desc: '享受 Sari、Contana、阿里小蜜般的交互体验',
  bgColor: '#a4b602'
}]

export default class Intro extends Component {

  doneBtnHandle = () => {
    this.props.navigator.push(routeMap.home)
  }

  render () {
    return (
      <AppIntro
        showSkipButton={false}
        doneBtnLabel={'进入'}
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
      >
      {
        data.map((item, index) => {
        return (
          <View
            style={[styles.slide,{ backgroundColor: `${item.bgColor}` }]}
            key={index}>
            <Image
              style={styles.img}
              source={item.img}
            />
            <View level={15}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View level={8}>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          </View>
          )
        })
      }
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
