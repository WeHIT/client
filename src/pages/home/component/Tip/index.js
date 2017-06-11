import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { WeTouch } from '@base';

export default class Tip extends Component {

  static defaultProps = {
    actionText: '点我哦',
    descText: '你正在点我哦',
    clickCb: () => {},
  };

  static propTypes = {
    actionText: PropTypes.string,
    descText: PropTypes.string,
    clickCb: PropTypes.func,
    type: PropTypes.string,
    img: PropTypes.number,
  };

  constructor(props) {
    super(props);
  };

  render () {
    const {
      actionText,
      descText,
      clickCb,
      type,
      img,
    } = this.props;
    return (
      <WeTouch
        style={styles.container}
        spm={`wehit.home.tipbar.${actionText}`}
        onPress={e => clickCb(e, {actionText, descText})}>
        {
          type && type === 'img' ?
          <Image style={styles.imgContainer} source={img}/> :
          <Text style={styles.tipText}>
            {actionText}
          </Text>
        }
      </WeTouch>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 20,
    backgroundColor: 'white',
    marginLeft: 8,
    paddingLeft: 6,
    paddingRight: 4,
    paddingTop: 4,
    paddingBottom: 6,
    borderRadius: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f8e71c',
    borderTopWidth: 1,
    borderTopColor: '#f8e71c',
    borderLeftWidth: 1,
    borderLeftColor: '#f8e71c',
    borderRightWidth: 1,
    borderRightColor: '#f8e71c',
  },
  tipText: {
    fontSize: 14
  },
  imgContainer: {
    width: 22,
    height: 14,
  }
});
