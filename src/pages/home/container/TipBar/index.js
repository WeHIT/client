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

const data = [{
  actionText: '获取天气',
  descText: '我要查询天气',
}, {
  actionText: '查询快递',
  descText: '我要查询快递',
}, {
  actionText: '查询新闻',
  descText: '我要查新闻',
}];

class TipBar extends Component {

  clickTipBar(e, data) {
    const {
      lat,
      lon,
    } = this.props.geo;
    this.props.getData({
      command: "common",
      options: {
        data: data.actionText,
        descText: data.descText,
        location: {
          lat,
          lon,
        },
      }
    });
  }
  render () {
    const {
      tipBar
    } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView 
          horizontal={true} >
          {
            tipBar.data.length ? tipBar.data.map((item, index) => {
              console.log(item)
              return (
                <Tip
                  clickCb={(e, textObj) => this.clickTipBar(e, textObj)}
                  key={index}
                  actionText={item.actionText}
                  descText={item.descText} />
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
    geo: state.geo,
    tipBar: state.tipBar,
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
