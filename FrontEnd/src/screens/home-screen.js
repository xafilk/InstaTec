import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, StyleSheet, Text, View } from 'react-native'

import * as AppActions from '../actions/app.actions'
import Feed from '../components/home/feed'
import Logo from '../../assets/images/logo.png'

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitleStyle: {
      flex: 1,
    },
    headerTitle: (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{
            alignSelf: 'center',
            flex: 1,
            width: 85,
            height: 35,
          }}
          resizeMode="contain"
          source={Logo}
        />
      </View>
    ),
  }

  constructor(props) {
    super(props)

    this.props.initSettings()
  }

  render() {
    return (
      <View style={styles.container}>
        <Feed />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  initSettings: () => dispatch(AppActions.initSettings()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)
