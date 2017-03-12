import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import EasySpeak from '../../component/EasySpeak';
import MultiImgText from '../../component/MultiImgText';

export default class SpeakFlow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.lineView}>
            <EasySpeak
              pos='right'
              text='今天天气怎么样'
            />
          </View>
          <View style={styles.lineView}>
            <EasySpeak
              pos='left'
              text='你所在地区是哈尔滨，今天温度 -40 度，注意身体别冻死自己'
            />
          </View>
          <View style={styles.lineView}>
            <MultiImgText />
          </View>
          <View style={styles.lineView}>
            <MultiImgText />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    height: Dimensions.get('window').height - 140
  },
  lineView: {
    marginTop: 20
  },
});