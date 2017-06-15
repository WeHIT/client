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
  DeviceEventEmitter,
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
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: [],

      // nickname: 'rccoder',
      // nickinfo: '1130310128 | 计算机科学与技术学院'
      nickname: '',
      nickinfo: ''

    };

    this.backToHome = this.backToHome.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
    this.pressUserInfo = this.pressUserInfo.bind(this);

    this.refreshList = this.refreshList.bind(this);
  }

  componentDidMount() {

    this.subscription = DeviceEventEmitter.addListener('changeLoginInfo',this.refreshList);

    Storage.load('haslogin').then(val => {
      console.log(val);
      // 0 表示没有登录
      if(val === '0') {
        this.setState({
          nickname: '未登录',
          nickinfo: '点击进行登录',
          dataSource: [{
            icon: require('./reg.png'),
            text: '注册',
          }, {
            icon: require('./about.png'),
            text: '关于'
          }]
        })
      } else {

        Storage.load('info').then(val => {
          const nickname = JSON.parse(val).id;
          const nickinfo = JSON.parse(val).college;

          this.setState({
            nickname: nickname,
            nickinfo: nickinfo,
            dataSource: [{
              icon: require('./logout.png'),
              text: '注销',
            }, {
              icon: require('./about.png'),
              text: '关于'
            }]
          })
        })
      }
    }, err => {
      Storage.save({
        key: 'haslogin',
        value: '0'
      });
      Storage.save({
        key: 'info',
        value: '{}',
      })
    });

    // if(this.state.nickname === '未登录') {
    //   this.setState({
    //     dataSource: [{
    //       icon: require('./reg.png'),
    //       text: '注册',
    //     }, {
    //       icon: require('./about.png'),
    //       text: '关于'
    //     }]
    //   })
    // } else {
    //   this.setState({
    //     dataSource: [{
    //       icon: require('./logout.png'),
    //       text: '注销',
    //     }, {
    //       icon: require('./about.png'),
    //       text: '关于'
    //     }]
    //   })
    // }
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  /**
   * list 发生变化通知
   */
  refreshList() {
    Storage.load('haslogin').then(val => {
      console.log(val);
      // 0 表示没有登录
      if(val === '0') {
        this.setState({
          nickname: '未登录',
          nickinfo: '点击进行登录',
          dataSource: [{
            icon: require('./reg.png'),
            text: '注册',
          }, {
            icon: require('./about.png'),
            text: '关于'
          }]
        })
      } else {

        Storage.load('info').then(val => {
          const nickname = JSON.parse(val).id;
          const nickinfo = JSON.parse(val).college;

          this.setState({
            nickname: nickname,
            nickinfo: nickinfo,
            dataSource: [{
              icon: require('./logout.png'),
              text: '注销',
            }, {
              icon: require('./about.png'),
              text: '关于'
            }]
          })
        })
      }
    }, err => {
      Storage.save({
        key: 'haslogin',
        value: '0'
      });
      Storage.save({
        key: 'info',
        value: '{}',
      })
    });
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
        Storage.save({
          key: 'haslogin',
          value: '0'
        });
        this.refs.toast.show('注销成功');

        DeviceEventEmitter.emit('changeLoginInfo', {});

        break;
      }
      case '关于': {
        this.props.navigator.push(routeMap.about);
        break;
      }
    }
  }

  pressUserInfo(nickname) {
    if(nickname === '未登录') {
      this.props.navigator.push(routeMap.login);
    } else {
      this.props.navigator.push(routeMap.user);
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
      ...other,
    } = this.props;

    const {
      nickname,
      nickinfo
    } = this.state;
    return(
      <View style={styles.container}>
        <Header
          middleText="设置"
          rightText=""
          leftCb={ this.backToHome }
        />
        <TouchableOpacity
          onPress={() => this.pressUserInfo(nickname)}
          style={styles.userInfoViewWrap}>
          <View style={styles.userAvatarViewWrap}>
            <Image
              source={require('@img/avatarDefault.png')}
              style={{height: 100, width: 100, borderRadius: 50,}}
            />
          </View>
          <View style={styles.userNicknameViewWrap}>
            <Text style={styles.userNicknameTextWrap}>
              {nickname}
            </Text>
            <Text style={styles.userNickInfoTextWrap}>
              {nickinfo}
            </Text>
          </View>
          <View style={[styles.rightPointWrap, {marginRight: 10}]}>
            <Image
              source={require('./next.png')}
              style={{width: 16, height: 16}}
            />
          </View>
        </TouchableOpacity>
        <ListView
          dataSource={this.ds.cloneWithRows(this.state.dataSource)}
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
    borderBottomColor:'#ddd',
  },
  userInfoViewWrap: {
    paddingTop: 4,
    paddingBottom: 20,
    backgroundColor: '#f8e71c',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatarViewWrap: {
    marginLeft: 20,
    marginRight: 20,
  },
  userNicknameViewWrap: {
    flex: 1,
  },
  userNicknameTextWrap: {
    fontSize: 28,
    marginBottom: 16,
  },
  userNickInfoTextWrap: {
    fontSize: 12,
  },
  rowViewWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginRight: 12,
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
