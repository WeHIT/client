import React, { Component } from 'react';
import { Provider, connect } from "react-redux";
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

import {
  getData
} from '../../action';

import HTMLView from 'react-native-htmlview';

const value = '求购：\r\n1. C++ Primer 中文版(第5版)  Stanley B. Lippman, Josee Lajoie, Barbara E. 王刚 / 杨巨峰 ，电子工业出版社。\r\n2. C++ Primer plus 中文版(第6版)，Stephen Prata（史蒂芬 普拉达），张海龙 袁国忠，人民邮电出版社。\r\n3. Effective C++ 中文版:改善程序与设计的55个具体做法(第3版) ，(美)梅耶(Scott Meyers) 著;侯捷 译，电子工业出版社。\r\n\r\n谢谢大家帮忙！\r\n联系方式：电话：15765574127';

function renderNode(node, index) {
  console.log(node)
  if (node.name == 'img') {
    return (
      <View key={index} style={{marginBottom: 10}}>
        <Image
          style={{width: 330, height: 330}}
          source={{uri: `https:${node.attribs.src.trim()}`}}
        />
      </View>
    );
  }
}


class Post extends Component {

  componentDidMount() {
    console.log('组件 props')
    console.log(this.props);
    const {
      id,
      type
    } = this.props;
    this.props.getData({
      command: 'getPost',
      options: {
        type,
        id,
      }
    });
  }

  render() {
    const {
      post,
      ...other
    } = this.props;
    return(
      <ScrollView style={styles.postContainer}>
        {
          post.isFetching || post.data == null ?
          <View><Text>正在加载中...</Text></View> : (
            <View>
              <View style={styles.cardContainer}>
                <View style={styles.postHeaderContainer}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{post.data.subject}</Text>
                  </View>
                  <View style={styles.userContainer}>
                    <View style={styles.avatarContainer}>
                      <Image
                        style={styles.avatarImg}
                        source={{uri: post.data.comment[0].avatar}}
                      />
                    </View>
                    <View style={styles.nickNameContainer}>
                      <Text style={styles.nickNameText}>{post.data.comment[0].username}</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.postContentContainer}>
                  <HTMLView 
                    value={post.data.comment[0].body}
                    renderNode={renderNode}
                  />
                  {
                    post.data.comment[0].fromPt === 'yes' ?
                    <View style={styles.postCopyRightContainer}>
                      <Text style={styles.postCopyRightText}>清影PT提供交易支持</Text>
                    </View> : null
                  }
                </View>
              </View>
              {
                post.data.comment.length >=2 ? (
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
                  ) : null   
              }
              {
                post.data.comment.map((item, index) => {
                  if(index >= 1) {
                    return (
                      <View
                        key={index}
                        style={[styles.cardContainer, styles.commentCardContainer]}>
                        <View style={styles.userContainer}>
                          <View style={styles.avatarContainer}>
                            <Image
                              style={[styles.avatarImg, styles.commentAvatarImg]}
                              source={{uri: item.avatar}}
                            />
                          </View>
                          <View style={styles.nickNameContainer}>
                            <Text style={[styles.nickNameText, styles.commentNickNameText]}>{item.username}</Text>
                          </View>
                        </View>
                        <View style={[styles.postContentContainer, styles.commentPostContentContainer]}>
                          <HTMLView style={[styles.postContentHtml]}
                            value={item.body}
                          />
                          {
                            item.fromPt === 'yes' ?
                            <View style={styles.postCopyRightContainer}>
                              <Text style={styles.postCopyRightText}>来自清影PT</Text>
                            </View> : null
                          }
                        </View>
                      </View>
                    );
                  }
                })
              }
            </View>
          )
        }
      </ScrollView>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: (data) => {
      dispatch(getData(data));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);


const styles = StyleSheet.create({
  postContainer: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 10,
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
