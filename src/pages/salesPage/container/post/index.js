import React, { Component } from 'react';
import { Provider } from "react-redux";
import { hashHistory } from "react-router";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Navigator,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import HTMLView from 'react-native-htmlview';

const value = '求购：\r\n1. C++ Primer 中文版(第5版)  Stanley B. Lippman, Josee Lajoie, Barbara E. 王刚 / 杨巨峰 ，电子工业出版社。\r\n2. C++ Primer plus 中文版(第6版)，Stephen Prata（史蒂芬 普拉达），张海龙 袁国忠，人民邮电出版社。\r\n3. Effective C++ 中文版:改善程序与设计的55个具体做法(第3版) ，(美)梅耶(Scott Meyers) 著;侯捷 译，电子工业出版社。\r\n\r\n谢谢大家帮忙！\r\n联系方式：电话：15765574127';

class Post extends Component {
  render() {
    const {
      ...other
    } = this.props;
    return(
      <ScrollView style={styles.postContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.postHeaderContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>求购求购这一定是一个标题标题标题哈哈哈哈求购求购这一定是一个标题标题标题哈哈哈哈</Text>
            </View>
            <View style={styles.userContainer}>
              <View style={styles.avatarContainer}>
                <Image
                  style={styles.avatarImg}
                  source={{uri: 'http://pt.hit.edu.cn/avatars/10239_8de65d68667768797d64d16661b3f9b9'}}
                />
              </View>
              <View style={styles.nickNameContainer}>
                <Text style={styles.nickNameText}>rccoder</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.postContentContainer}>
            <HTMLView 
              value={value}
            />
            <View style={styles.postCopyRightContainer}>
              <Text style={styles.postCopyRightText}>清影PT提供交易支持</Text>
            </View>
          </View>
        </View>
        <View style={styles.commentHeaderContainer}>
          <View>
            <Image
              style={styles.commentHeaderImg}
              source={require('./comment.png')}
            />
          </View>
          <View>
            <Text style={styles.commentHeaderText}>评论</Text>
          </View>
        </View>

        <View style={[styles.cardContainer, styles.commentCardContainer]}>
          <View style={styles.userContainer}>
            <View style={styles.avatarContainer}>
              <Image
                style={[styles.avatarImg, styles.commentAvatarImg]}
                source={{uri: 'http://pt.hit.edu.cn/avatars/10239_8de65d68667768797d64d16661b3f9b9'}}
              />
            </View>
            <View style={styles.nickNameContainer}>
              <Text style={[styles.nickNameText, styles.commentNickNameText]}>rccoder</Text>
            </View>
          </View>
          <View style={[styles.postContentContainer, styles.commentPostContentContainer]}>
            <HTMLView style={[styles.postContentHtml]}
              value={'我要了，联系QQ'}
            />
            <View style={styles.postCopyRightContainer}>
              <Text style={styles.postCopyRightText}>来自清影PT</Text>
            </View>
          </View>
        </View>
        <View style={[styles.cardContainer, styles.commentCardContainer]}>
          <View style={styles.userContainer}>
            <View style={styles.avatarContainer}>
              <Image
                style={[styles.avatarImg, styles.commentAvatarImg]}
                source={{uri: 'http://pt.hit.edu.cn/avatars/10239_8de65d68667768797d64d16661b3f9b9'}}
              />
            </View>
            <View style={styles.nickNameContainer}>
              <Text style={[styles.nickNameText, styles.commentNickNameText]}>rccoder</Text>
            </View>
          </View>
          <View style={[styles.postContentContainer, styles.commentPostContentContainer]}>
            <HTMLView style={[styles.postContentHtml]}
              value={'我要了，联系QQ'}
            />
            <View style={styles.postCopyRightContainer}>
              <Text style={styles.postCopyRightText}>来自清影PT</Text>
            </View>
          </View>
        </View>
        <View style={[styles.cardContainer, styles.commentCardContainer]}>
          <View style={styles.userContainer}>
            <View style={styles.avatarContainer}>
              <Image
                style={[styles.avatarImg, styles.commentAvatarImg]}
                source={{uri: 'http://pt.hit.edu.cn/avatars/10239_8de65d68667768797d64d16661b3f9b9'}}
              />
            </View>
            <View style={styles.nickNameContainer}>
              <Text style={[styles.nickNameText, styles.commentNickNameText]}>rccoder</Text>
            </View>
          </View>
          <View style={[styles.postContentContainer, styles.commentPostContentContainer]}>
            <HTMLView style={[styles.postContentHtml]}
              value={'我要了，联系QQ'}
            />
            <View style={styles.postCopyRightContainer}>
              <Text style={styles.postCopyRightText}>来自清影PT</Text>
            </View>
          </View>
        </View>
        <View style={[styles.cardContainer, styles.commentCardContainer]}>
          <View style={styles.userContainer}>
            <View style={styles.avatarContainer}>
              <Image
                style={[styles.avatarImg, styles.commentAvatarImg]}
                source={{uri: 'http://pt.hit.edu.cn/avatars/10239_8de65d68667768797d64d16661b3f9b9'}}
              />
            </View>
            <View style={styles.nickNameContainer}>
              <Text style={[styles.nickNameText, styles.commentNickNameText]}>rccoder</Text>
            </View>
          </View>
          <View style={[styles.postContentContainer, styles.commentPostContentContainer]}>
            <HTMLView style={[styles.postContentHtml]}
              value={'我要了，联系QQ'}
            />
            <View style={styles.postCopyRightContainer}>
              <Text style={styles.postCopyRightText}>来自清影PT</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: 'rgb(238, 238, 238)',
    height: Dimensions.get('window').height - 160, // header 是 58
  },
  cardContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'white',
    shadowColor: 'rgb(100, 100, 100)',
    shadowOffset: {
      height: 2,
      wwight: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.2
  },
  postHeaderContainer: {
    flexDirection: 'row',
    borderLeftWidth: 3,
    borderLeftColor: '#f8e71c',
    marginBottom: 10,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 2,
    paddingRight: 8,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 20,
  },
  userContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nickNameContainer: {
    marginTop: 6,
  },
  nickNameText: {
    color: 'gray',
    fontSize: 12,
  },
  postContentContainer: {
    marginLeft: 8,
  },
  postCopyRightContainer: {

  },
  postCopyRightText: {
    color: 'rgb(200, 200, 200)',
    fontSize: 12,
    textAlign: 'right',
  },
  commentCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  commentPostContentContainer: {
    flex: 1,
    marginLeft: 18,
  },
  commentAvatarImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  commentNickNameText: {
    color: 'gray',
    fontSize: 10,
  },
  postContentHtml: {
    
  },
  commentHeaderContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentHeaderImg: {
    width: 20,
    height: 20,
    marginLeft: 2,
    marginRight: 6,
  },
  commentHeaderText: {
    fontSize: 12,
    color: 'rgb(100, 100, 100)',
  }
});

export default Post;
