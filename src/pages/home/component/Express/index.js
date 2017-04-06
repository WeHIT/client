import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

export default class Express extends Component {
  static defaultProps = {
    pos: 'left',
    data: {
      len: 4,
      data: [{
        logisticCode: 123456789,
        shipperName: '韵达快递',
        status: '在途中',
        traces: [{
          AcceptTime: '2017-03-04 16:00',
          AcceptStation: '在黑龙江哈尔滨工业大学进行签收扫描，请你注意查收'
        }, {
          AcceptTime: '2017-03-04 16:00',
          AcceptStation: '在黑龙江哈尔滨工业大学进行签收扫描，请你注意查收'
        }, {
          AcceptTime: '2017-03-04 16:00',
          AcceptStation: '在黑龙江哈尔滨工业大学进行签收扫描，请你注意查收'
        }, {
          AcceptTime: '2017-03-04 16:00',
          AcceptStation: '在黑龙江哈尔滨工业大学进行签收扫描，请你注意查收'
        }]
      }, {
        logisticCode: 123456789,
        shipperName: '韵达快递',
        status: '在途中',
        traces: [{
          AcceptTime: '2017-03-04 16:00',
          AcceptStation: '在黑龙江哈尔滨工业大学进行签收扫描，请你注意查收'
        }, {
          AcceptTime: '2017-03-04 16:00',
          AcceptStation: '在黑龙江哈尔滨工业大学进行签收扫描，请你注意查收'
        }, {
          AcceptTime: '2017-03-04 16:00',
          AcceptStation: '在黑龙江哈尔滨工业大学进行签收扫描，请你注意查收'
        }, {
          AcceptTime: '2017-03-04 16:00',
          AcceptStation: '在黑龙江哈尔滨工业大学进行签收扫描，请你注意查收'
        }]
      }]
    }
  };

  static propTypes = {
    pos: PropTypes.string,
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
  };

  render() {
    const {
      pos,
      data
    } = this.props;
    return (
      <View style={[styles.wrapView,
        pos === 'left' ? styles.leftWrapView : styles.rightWrapView]}>
        <View
          style={[styles.commonViewStyle,
            pos === 'left' ? styles.leftViewStyle : styles.rightViewStyle]}>
          <View style={styles.summTipViewStyle}>
            <Text style={styles.summTip}>你有 {data.len} 个快递正在路上...</Text>
          </View>
          {
            data.data && data.data.length ? data.data.map((item, index) => {
              return (
                <View key={index} style={styles.expressRowContent}>
                  <View style={styles.infoViewStyle}>
                    <View style={styles.infoTextViewStyle}>
                      <Text>{item.shipperName}：</Text>
                      <Text style={styles.descTextStyle}>1234567890</Text>
                    </View>
                    <View style={styles.infoImgViewStyle}>
                      <Image 
                        style={styles.imgIcon} 
                        source={require('./express.png')} />
                      <Text style={styles.descTextStyle}>{item.status}</Text>
                    </View>
                  </View>
                  <View style={styles.contentViewStyle}>
                    {
                      item.traces && item.traces.length ? item.traces.map((trace, inindex) => {
                        return (
                          <View key={inindex} style={styles.contentRowViewStyle}>
                            <View style={styles.timeViewStyle}>
                              <Text style={styles.timeHourTextStyle}>{trace.AcceptTime.split(' ')[1]}</Text>
                              <Text style={styles.timeDayTextStyle}>{trace.AcceptTime.split(' ')[0]}</Text>
                            </View>
                            <View>
                              <Text style={styles.descTextStyle}>{trace.AcceptStation}</Text>
                            </View>
                          </View>
                        );
                      }) : null
                    }
                  </View>
                </View>
              );
            }) : null
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapView: {
    flexDirection: 'row'
  },
  leftWrapView: {
    justifyContent: 'flex-start',
  },
  rightWrapView: {
    justifyContent: 'flex-end',
  },
  commonViewStyle: {
    width: 300,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
  },
  leftViewStyle: {
    marginLeft: 8,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
  rightViewStyle: {
    marginRight: 8,
    backgroundColor: '#35C878',
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  textStyle: {
    //lineHeight: 20
  },
  summTipViewStyle: {
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#f8e71c',
  },
  summTip: {
    textAlign: 'center',
  },
  expressRowContent: {
    
  },
  infoImgViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgIcon: {
    width: 26,
    height: 26,
    marginLeft: 14,
    marginRight: 8,
  },
  infoViewStyle: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoTextViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 18,
    borderLeftWidth: 2,
    borderLeftColor: '#f8e71c',
    paddingLeft: 8,
  },
  contentRowViewStyle: {
    flexDirection: 'row',
    width: 200,
    marginTop: 6,
    marginBottom: 8,
  },
  timeViewStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  timeHourTextStyle: {
    fontSize: 12,
  },
  timeDayTextStyle: {
    fontSize: 10,
    color: 'gray',
  },
  descTextStyle: {
    fontSize: 12,
    color: 'gray',
    lineHeight: 16,
  }
});
