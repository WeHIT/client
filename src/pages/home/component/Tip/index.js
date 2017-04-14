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
  };

  constructor(props) {
    super(props);
  };

  render () {
    const {
      actionText,
      descText,
      clickCb,
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={e => clickCb(e, {actionText, descText})}>
        <Text style={styles.tipText}>
          {actionText}
        </Text>
      </TouchableOpacity>
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
  },
  tipText: {
    fontSize: 14
  }
});
