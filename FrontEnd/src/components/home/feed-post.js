import React, { Component } from 'react'
import { format } from 'date-fns'

import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../config/theme'

import InstaFont from '../InstaFont'
// import Comments from './comments';
import ImageComponent from '../common/image-component'

const window = Dimensions.get('window')

class FeedPost extends Component {
  render() {
    const { currentUser, data } = this.props
    const author = {}
    const uri = data.uri
    const uriAuthor = 'https://image.shutterstock.com/image-vector/anime-face-cartoon-red-eyes-260nw-1093380509.jpg'

    const dateCreated = format(data.created, 'Do MMMM')
    const isPostLiked =
      currentUser !== null
        ? data.likes.filter(userId => userId === currentUser.id)[0] >= 0
        : false
    const avatar = currentUser !== null ? currentUser.avatar : null

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageComponent style={styles.avatar} uri={uriAuthor} />
          <Text style={styles.headerAuthorName}>{author.username}</Text>
        </View>

        <ImageComponent
          style={{
            flex: 1,
            alignSelf: 'stretch',
            width: window.width,
            height: window.width,
          }}
          uri={uri}
        />

        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.likeBtn}>
              <InstaFont
                name={isPostLiked ? 'heart' : 'heart-o'}
                style={isPostLiked ? styles.liked : styles.notLiked}
                size={isPostLiked ? 32 : 40}
              />
            </View>

            <InstaFont name={'bubble-o'} size={30} />

            <InstaFont name={'plane-o'} size={40} />
          </View>

          <Text style={styles.likes}>{data.likes.length} likes</Text>

          <Text style={styles.timeStamp}>{dateCreated}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    flex: 0,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignSelf: 'stretch',
    marginRight: 10,
  },
  headerAuthorName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    padding: 10,
  },
  likes: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeStamp: {
    color: colors.actions,
    fontSize: 14,
  },
  likeBtn: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  liked: {
    color: colors.heart,
  },
})

export default FeedPost
