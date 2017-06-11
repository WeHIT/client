/**
 * Created by rccoder on 11/06/2017.
 */
import React, { Component, PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';

import { WeFetch, DeviceInfo } from '@base';

import urlMap from '@url';

export default class WeTouch extends Component {
  constructor(props){
    super(props);
    this.spmClick = this.spmClick.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  static defaultProps = {
    spm: '0.0.0.0',
  };

  static propTypes = {
    spm: PropTypes.string,
    onPress: PropTypes.func,
  };

  spmClick() {
    console.log(this.props.spm);
    console.log(DeviceInfo);

    WeFetch({
      url: `${urlMap.spm}?spm=${encodeURI(this.props.spm)}`,
      method: 'POST',
      data: {
        device: DeviceInfo,
      }
    }).then(val => {
      console.log(val);
    });

    return true;
  }

  handleOnPress() {
    this.spmClick();
    this.props.onPress();
  }

  render() {
    const {
      onPress,
      ...other
    } = this.props;
    return(
      <TouchableOpacity
        onPress={this.handleOnPress}
        {...other}
      />
    )
  }
}
