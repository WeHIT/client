import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


export default class HeaderBar extends Component {
  static defaultProps = {
    pos: 'bottom',
    img: require('./demo.png'),
    title: 'Hello',
    tapCb: () => {},
  };

  static propTypes = {
    pos: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    hasBottomBorder: PropTypes.bool,
    hasPaddingTop: PropTypes.bool,
    tabCb: PropTypes.func,
  };

  constructor(props) {
    super(props);
  };

  tapCb() {
    console.log('tap single');
  }

  render() {
    const {
      pos,
      img,
      title,
      hasBottomBorder,
      hasPaddingTop,
      tapCb,
    } = this.props;
    return (
      <TouchableOpacity
        style={[styles.container,
          hasBottomBorder ? styles.hasBottomBorder : null,
          hasPaddingTop ? styles.hasPaddingTop : null]}
        onPress={e => this.tapCb(e)} >
        {
          pos === 'top' ?
          <View style={[styles.commonContainer, styles.topContainer]}>
            <Image 
            style={[styles.commonImgIcon, styles.topImgIcon]} 
            source={img ? {uri: img} : require('./demo.png')} />
            <View style={[styles.commonTitleView, styles.topTitleView]}>
              <Text style={[styles.commonTitle, styles.topTitle]}>{title}</Text>
            </View>
          </View> :
          <View style={[styles.commonContainer, styles.bottomContainer]}>
            <View style={[styles.commonTitleView, styles.bottomTitleView]}>
              <Text style={[styles.commonTitle, styles.bottomTitle]}>{title}</Text>
            </View>
            <Image 
              style={[styles.commonImgIcon, styles.bottomImgIcon]} 
              source={img ? {uri: img} : require('./demo.png')} />
          </View>
        }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  commonContainer: {
    flexDirection: 'row',
    width: 300
  },
  topContainer: {
    
  },
  bottomContainer: {
    paddingLeft: 10
  },
  hasBottomBorder: {
    paddingBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#bbb',
  },
  hasPaddingTop: {
    paddingTop: 4
  },
  commonImgIcon: {

  },
  topImgIcon: {
    width: 300,
    height: 140
  },
  bottomImgIcon: {
    width: 60,
    height: 60
  },
  commonTitleView: {

  },
  topTitleView: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 6,
    paddingRight: 6 ,
    width: 300,
    backgroundColor: 'rgba(0, 0, 0, .6)'
  },
  bottomTitleView: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  commonTitle: {

  },
  topTitle: {
    color: 'white',
    lineHeight: 20
  },
  bottomTitle: {
  }
});
