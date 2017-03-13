import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';


export default class EasySpeak extends Component {
  static defaultProps = {
    pos: 'left',
    text: '网络开小差了哇~'
  };

  static propTypes = {
    pos: PropTypes.string,
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
  };

  render() {
    const {
      pos,
      text
    } = this.props;
    return (
      <View style={[styles.wrapView,
        pos === 'left' ? styles.leftWrapView : styles.rightWrapView]}>
        <View
          style={[styles.commonViewStyle,
            pos === 'left' ? styles.leftViewStyle : styles.rightViewStyle]}>
          <Text style={styles.textStyle}>{text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapView: {
    flexDirection: 'row'
  },
  leftWrapView: {
    justifyContent: 'flex-start',
  },
  rightWrapView: {
    justifyContent: 'flex-end',
  },
  commonViewStyle: {
    maxWidth: 300,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
  },
  leftViewStyle: {
    marginLeft: 8,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
  rightViewStyle: {
    marginRight: 8,
    backgroundColor: '#35C878',
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  textStyle: {
    lineHeight: 20
  }
});