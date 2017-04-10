import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Keyboard
} from 'react-native';

import EasySpeak from '../../component/EasySpeak';
import MultiImgText from '../../component/MultiImgText';
import Express from '../../component/Express';

class SpeakFlow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollViewHeight: 0
    }
  }

  componentDidUpdate() {
    const {
      keyboardHeight,
      keyboardStatus
    } = this.props

    const {
      scrollViewHeight
    } = this.state;

    // 键盘展开
    // 键盘展开时 scrollview 变小，内容位置不会发生变化，所以减去键盘高度滑动到最底
    // 键盘关闭时 scrollView 变大，所以再减一个键盘高度
    // if (keyboardStatus === 1) {
    //   this.scrollView.scrollTo({
    //     y: scrollViewHeight - keyboardHeight,
    //     animated: true
    //   })
    // } else {
    //   this.scrollView.scrollTo({
    //     y: scrollViewHeight - 2*keyboardHeight,
    //     animated: true
    //   })
    // }
  }

  render() {
    const {
      speakData
    } = this.props;
    return (
      <View style={[styles.container]}>
        <ScrollView
          ref={ref => this.scrollView  = ref}
        >
          {
            speakData && speakData.data && speakData.data.length ? speakData.data.map((item, index) => {
              if(item.type === 'express') {
                return (
                  <View 
                    key={index}
                    style={styles.lineView}>
                    <Express
                      data={item.data.content}
                    />
                  </View>
                );
              } else if (item.type === 'news') {
                const data = item.data.content.map((inItem, i) => {
                  return {
                    title: inItem.title,
                    img: inItem.firstImg
                  }
                })
                return (
                  <View 
                    key={index}
                    style={styles.lineView}>
                    <MultiImgText 
                      data={data} />
                  </View>
                );
              } else if (item.type === 'normalDialog') {
                return (
                  <View
                    key={index}          
                    style={styles.lineView}>
                    <EasySpeak
                      pos={item.data.position}
                      text={item.data.content}
                    />
                  </View>
                );
              }
            }) : null
          }
          {/*<View style={styles.lineView}>
            <EasySpeak
              pos='right'
              text='今天天气怎么样'
            />
          </View>
          <View style={styles.lineView}>
            <EasySpeak
              pos='left'
              text='你所在地区是哈尔滨，今天温度 -40 度，注意身体别冻死自己'
            />
          </View>
          <View style={styles.lineView}>
            <MultiImgText />
          </View>
          <View style={styles.lineView}>
            <MultiImgText />
          </View>*/}
          <View onLayout={e => this.setState({scrollViewHeight: e.nativeEvent.layout.y})}/>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpeakFlow);

const styles = StyleSheet.create({
  container: {
    flex: 4,
    paddingTop: 0
  },
  lineView: {
    marginTop: 20,
  },
});
