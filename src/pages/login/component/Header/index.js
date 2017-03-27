import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Navigator,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Header extends Component {
  static defaultProps = {
    leftText: '返回',
    leftImg: require('@img/back.png'),
    leftCb: () => {},
    middleText: '登 录',
    middleImg: '',
    middleCb: () => {},
    rightText: '注册',
    rightImg: '',
    rightCb: () => {},
    bgColor: '#f8e71c',
  };

  static propTypes = {
    leftText: PropTypes.string,
    leftImg: PropTypes.object,
    leftCb: PropTypes.func,
    middleText: PropTypes.string,
    middleImg: PropTypes.object,
    middleCb: PropTypes.func,
    rightText: PropTypes.string,
    rightImg: PropTypes.object,
    rightCb: PropTypes.func,
  };

  constructor(props) {
    super(props);
  };

  render() {
    const {
      leftText,
      leftImg,
      leftCb,
      middleText,
      middleImg,
      middleCb,
      rightText,
      rightImg,
      rightCb,
      bgColor
    } = this.props;

    return(
      <View
        style={[styles.containerHeader,
        {backgroundColor: bgColor}]}>
          <TouchableOpacity
            style={styles.leftTitle}
            onPress={e => leftCb(e)}>
            <Image
              style={styles.backIcon}
              source={leftImg}
            />
            <Text>{leftText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentTitle}
            onPress={e => middleCb(e)}>
            <Text>{middleText}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.rightTitle}
            onPress={(e) => rightCb(e)}>
            <Text>{rightText}</Text>
          </TouchableOpacity>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    height: 58,
    backgroundColor: '#f8e71c',
  },
  leftTitle: {
    width: 56,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  backIcon: {
    width: 16,
    height: 16
  },
  contentTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightTitle: {
    width: 56,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
})