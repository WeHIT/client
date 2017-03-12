import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const data = [{
  title: '这是标题1',
  img: 'https://cloud.githubusercontent.com/assets/7554325/23789013/047cc03a-05b4-11e7-92ac-f4d31f534e17.png'
}, {
  title: '这是标题2',
  img: 'https://cloud.githubusercontent.com/assets/7554325/23789013/047cc03a-05b4-11e7-92ac-f4d31f534e17.png'
}, {
  title: '这是标题2',
  img: 'https://cloud.githubusercontent.com/assets/7554325/23789013/047cc03a-05b4-11e7-92ac-f4d31f534e17.png'
}, {
  title: '这是标题2',
  img: 'https://cloud.githubusercontent.com/assets/7554325/23789013/047cc03a-05b4-11e7-92ac-f4d31f534e17.png'
},]

import SingleImgText from '../SingleImgText'
export default class MultiImgText extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          data.length ? data.map((item, index) => {
            return (
              <SingleImgText
                style={[styles.hasBottomBorder]}
                key={index}
                pos={index === 0 ? 'top' : 'bottom'}
                hasBottomBorder={index !== 0 && index !== data.length-1 ? true : false}
                hasPaddingTop={index !== 0 ? true : false}
                title={item.title}
                img={item.img}
              />
            )
          }) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginLeft: 16,
    width: 300,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    overflow: 'hidden'
  },
});