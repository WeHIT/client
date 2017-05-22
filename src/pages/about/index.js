/**
 * Created by rccoder on 22/05/2017.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import { Storage } from '@base';
import routeMap from '@router';

import Header from '@common/component/Header';


const aboutMessage = [
  '  WeHIT 是一款服务于哈尔滨工业大学全校师生的 APP，包含 Android、iOS 两个版本。',
  '  具有下面几大功能：',
  '  · 淘二手：',
  '      改功能依托于清影 PT 二手交易区，WeHIT 会爬取清影 PT 二手交易区的帖子和评论进行展示，同时加入了基于 WeHIT 的评论系统，会和清影 PT 的评论进行混合展示。',
  '  · 查饭卡：',
  '      改功能依托哈工大饭卡查询系统，WeHIT 可以获取你的饭卡余额，同时可以获取今日、最近三日、最近一周、最近一月等的饭卡消费情况。',
  '  · 查空教室：',
  '      改功能依托于校教务系统的空教室查询系统，WeHIT 可以从具体教室和时间区间两个维度进行空教室查询',
  '  · 查天气：',
  '      改功能依托于高德地图，WeHIT 会定位你当前的位置并且返回当前位置的天气情况，同时可以预测最近三天的天气状况。',
  '  · 查快递：',
  '      改功能依托于快递鸟，WeHIT 可以在你输入快递单后自动查询快递的运输情况，同时针对没有签收的快递会做自动保存，方便下次查询',
  '  · 获取新闻：',
  '      改功能依托于今日哈工大，WeHIT 会根据你的院系信息进行新闻推送',
  '',
  '错误反馈：截图错误页面，尽可能的描述当前操作和账号然后发送邮件至：rccoder.net@gmail.com',
  '',
  '感谢： React Native、今日哈工大、快递鸟、高德地图、清影 PT、哈工大教务处、哈工大饭卡查询平台'
];

export default class About extends Component {

  constructor(props) {
    super(props);

    this.backToHome = this.backToHome.bind(this);

  }

  /**
   * @desc 返回主页
   */
  backToHome() {
    this.props.navigator.pop() && this.props.navigator.push(routeMap.setting);
  }

  render() {
    const {
      ...other
    } = this.props;
    return(
      <View style={styles.container}>
        <Header
          middleText="设置"
          rightText=""
          leftCb={ this.backToHome }
        />
        <View style={styles.contentViewWrap}>
          <View style={styles.logoViewWrap}>
            <Image
              style={styles.logoImgWrap}
              style={{width: 100, height: 100}}
              source={require('./WeHITQ.png')}
            />
          </View>
          <View style={styles.versionViewWrap}>
            <Text style={styles.versionTextWrap}>Version: 1.0.0</Text>
          </View>
          <ScrollView style={styles.aboutViewWrap}>
            {
              aboutMessage.map((item, index) => <Text key={index} style={styles.aboutTextWrap}>{item}</Text>)
            }
          </ScrollView>
          <View style={styles.copyRightViewWrap}>
            <Text style={styles.copyRightTextWrap}>CopyRight © 2017 rccoder@HIT. All Right Reserved</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentViewWrap: {
    backgroundColor: '#EEF0F3',
    flex: 1,
  },
  logoViewWrap: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoImgWrap: {

  },
  versionViewWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  versionTextWrap: {
    color: 'gray',
    fontSize: 10,
    marginTop: 8,
  },
  aboutViewWrap: {
    flex: 1,
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'white',
  },
  aboutTextWrap: {
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 4,
  },
  copyRightViewWrap: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  copyRightTextWrap: {
    color: 'gray',
    fontSize: 10
  },
});
