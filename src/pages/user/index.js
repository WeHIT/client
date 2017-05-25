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
  TextInput,
  Picker,
} from 'react-native';

import { Storage } from '@base';
import routeMap from '@router';

import Header from '@common/component/Header';
import Toast, { DURATION } from 'react-native-easy-toast';
import ModalPicker from 'react-native-modal-picker'

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
    this.state={
      dataSource:[{
        text: '学号',
        value: '1130310128',
        type: 1,
      }, {
        text: '昵称',
        value: 'rccoder',
        type: 1,
      }, {
        text: '学院',
        value: '计算机科学与技术学院',
        type: 'picker',
      }, {
        text: '饭卡密码',
        value: '012531',
        type: 1,
      }],
      // nickname: 'rccoder',
      // nickinfo: '1130310128 | 计算机科学与技术学院'
      nickname: '未登录',
      nickinfo: '点击进行登录',

      // 已经修改
      hasChange: false,
    };

    this.backToHome = this.backToHome.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
    this.renderRightInfo = this.renderRightInfo.bind(this);
  }

  /**
   * @desc 返回主页
   */
  backToHome() {
    this.props.navigator.pop();
  }

  /**
   * @desc 保存信息
   */
  saveInfo() {
    this.setState({
      hasChange: false,
    });

    this.refs.toast.show('信息保存成功');
    console.log('保存信息');
  }

  /**
   * @desc 更新 Picker 信息
   */
  updatePicker(rowId, option) {
    const newData = this.state.dataSource.slice();
    newData[rowId] = {
      ...newData[rowId],
      value: option.label,
    };
    this.setState({
      dataSource: newData,
      hasChange: true,
    });
  }

  updateTextInput(rowId, value) {
    const newData = this.state.dataSource.slice();
    newData[rowId] = {
      ...newData[rowId],
      value: value,
    };
    this.setState({
      dataSource: newData,
      hasChange: true,
    });
  }
  /**
   * @desc 渲染 list 右侧部分
   */
  renderRightInfo(rowData, rowId) {
    if (rowData.type === 'picker') {

      const pickerData = [
        { key: '请选择学院:', section: true, label: '请选择学院:' },
        { key: '计算机科学与技术学院', label: '计算机科学与技术学院'},
        { key: '经管学院', label: '经管学院'},
        { key: '理学院', label: '理学院'},
        { key: '人文学院', label: '人文学院'},
      ];

      return(
        <View style={{flex:1, justifyContent:'space-around'}}>
          <ModalPicker
            data={pickerData}
            cancelText="取消"
            optionStyle={{height: 40, flex: 1, justifyContent: 'center'}}
            onChange={(option)=>{this.updatePicker(rowId, option)}}
          >
            <TextInput
              editable={false}
              style={{ height:40, fontSize: 16, color: '#838383' }}
              value={rowData.value}
            />
          </ModalPicker>
        </View>
      )
    } else {
      return(
        <TextInput
          style={{ height:40, fontSize: 16, color: '#838383' }}
          value={rowData.value}
          onChangeText={(text) => this.updateTextInput(rowId, text)}
        />
      )
    }
  }

  renderRow(rowData, sectionId, rowId) {
    return(
      <View
        style={[styles.rowViewWrap, styles.bottomBorder]}
        onPress={() => this.pressRow(rowData.text)}
      >
        <View style={styles.textViewWrap}>
          <Text style={styles.textContainer}>{rowData.text}</Text>
        </View>
        <View style={styles.rightPointWrap}>
          {this.renderRightInfo(rowData, rowId)}
        </View>
      </View>
    )
  }

  render() {
    const {
      ...other,
    } = this.props;

    const {
      nickname,
      nickinfo,
      hasChange
    } = this.state;
    return(
      <View style={styles.container}>
        <Header
          middleText="个人信息"
          rightText="更新"
          leftCb={ this.backToHome }
          rightCb={ hasChange? this.saveInfo : ()=>{} }
          rightColor={ hasChange ? 'black' : '#838383'}
        />
        <ListView
          dataSource={this.ds.cloneWithRows(this.state.dataSource)}
          renderRow={(rowData, sectionId, rowId) => this.renderRow(rowData, sectionId, rowId)}
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
  textViewWrap: {
    marginLeft: 6,
    marginRight: 20,
    width: 60,
  },
  textContainer: {
  },
  rightPointWrap: {
    flex: 1,
  },
});
