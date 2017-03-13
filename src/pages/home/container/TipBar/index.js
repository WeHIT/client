import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import Tip from '../../component/Tip';

const data = [
  '获取天气',
  '查询快递',
  '获取新闻',
  '获取饭卡信息',
  '获取新闻',
  '获取新闻',
  '获取新闻',
  '获取新闻',
  '获取新闻',
]
export default class TipBar extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          {
            data.length ? data.map((item, index) => {
              return (
                <Tip
                  key={index}
                  text={item}/>
              )
            }) : null
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 4
  }
});