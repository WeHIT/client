import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import { getData } from '../../action';

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
class TipBar extends Component {

  clickTipBar(e, data) {
    this.props.getData({
      command: "common",
      options: {
        data,
      }
    });
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView 
          horizontal={true} >
          {
            data.length ? data.map((item, index) => {
              return (
                <Tip
                  clickCb={(e, text) => this.clickTipBar(e, text)}
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

const mapStateToProps = (state, ownProps) => {
  return {
    speakData: state.speakData,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: (data) => {
      dispatch(getData(data));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TipBar);

const styles = StyleSheet.create({
  container: {
    paddingTop: 8
  }
});
