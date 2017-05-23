/**
 * Created by rccoder on 22/05/2017.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';

import { Storage } from '@base';
import routeMap from '@router';

import Header from '@common/component/Header';
import Toast, { DURATION } from 'react-native-easy-toast';

export default class Setting extends Component {

  constructor(props) {
    super(props);

    /**
     * @see https://segmentfault.com/q/1010000003807715
     * @desc rowHasChange 是 react组件纪录 state 是否更新的一个方法
     */
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([{
        icon: require('./login.png'),
        text: '登录',
      }, {
        icon: require('./reg.png'),
        text: '注册',
      }, {
        icon: require('./logout.png'),
        text: '注销',
      }, {
        icon: require('./about.png'),
        text: '关于'
      }])
    };

    this.backToHome = this.backToHome.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  /**
   * @desc 返回主页
   */
  backToHome() {
    this.props.navigator.pop();
  }

  /**
   * @desc 点击 listView 的某项
   */
  pressRow(text) {
    switch (text) {
      case '登录': {
        this.props.navigator.push(routeMap.login);
        break;
      }
      case '注册': {
        this.props.navigator.push({
          ...routeMap.login,
          params: { flag: 'reg'}
        });
        break;
      }
      case '注销': {
        Storage.save({
          key: 'token',
          value: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNoYWJpIiwiaWF0IjoxNDkxODI1Njg5fQ.FD1_u1gGMUni2_eohxx6w_CgyV9vf0bbVSZkD4CjPqo'
        });
        this.refs.toast.show('注销成功');
        break;
      }
      case '关于': {
        this.props.navigator.push(routeMap.about);
        break;
      }
    }
  }

  renderRow(rowData) {
    return(
      <TouchableOpacity
        style={[styles.rowViewWrap, styles.bottomBorder]}
        onPress={() => this.pressRow(rowData.text)}
      >
        <View style={styles.iconViewWrap}>
          <Image
            source={rowData.icon}
            style={{width: 22, height: 22}}
          />
        </View>
        <View style={styles.textViewWrap}>
          <Text style={styles.textContainer}>{rowData.text}</Text>
        </View>
        <View style={styles.rightPointWrap}>
          <Image
            source={require('./next.png')}
            style={{width: 16, height: 16}}
          />
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const {
      ...othe
    } = this.props;
    return(
      <View style={styles.container}>
        <Header
          middleText="设置"
          rightText=""
          leftCb={ this.backToHome }
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
        <Toast
          ref="toast"
          style={{backgroundColor:'#f8e71c'}}
          position='bottom'
          positionValue={200}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{color:'black'}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomBorder: {
    borderBottomWidth:.5,
    borderBottomColor:'#ccc'
  },
  rowViewWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    height: 42,
  },
  iconViewWrap: {
    marginRight: 12,
  },
  textViewWrap: {
    flex: 1,
  },
  textContainer: {
  },
  rightPointWrap: {

  },
});
