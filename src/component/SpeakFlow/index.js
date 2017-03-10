import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import EasySpeak from '../EasySpeak';
import MultiImgText from '../MultiImgText';

export default class SpeakFlow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <EasySpeak 
          status='ME'
          text='今天天气怎么样'
        />
        <EasySpeak
          status='NOME'
          text='你所在地区是哈尔滨，今天温度 -40 度，注意身体别冻死自己'
        />
        <MultiImgText />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: Dimensions.get('window').height - 200
  },
  viewTextWhite: {
    width: 300,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 10,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  viewTextGreen: {
    width: 300,
    backgroundColor: '#35C878',
    marginTop: 20,
    marginLeft: 64,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16    
  },
  textStyle: {
    lineHeight: 20
  }
});