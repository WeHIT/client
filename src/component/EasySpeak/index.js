import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';


export default class EasySpeak extends Component {


  render() {
    return (
      <View style={this.props.status === 'ME' ? styles.viewTextGreen : styles.viewTextWhite}>
        <Text style={styles.textStyle}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  viewTextWhite: {
    width: 300,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 10,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  viewTextGreen: {
    width: 300,
    backgroundColor: '#35C878',
    marginTop: 20,
    marginLeft: 64,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16    
  },
  textStyle: {
    lineHeight: 20
  }
});