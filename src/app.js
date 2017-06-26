import React, {Component} from 'react'
import {AsyncStorage, TouchableOpacity, Image} from 'react-native'
import {Router, Scene, Actions} from 'react-native-router-flux'
import Login from './containers/login'
import Home from './containers/home'
import baseStyles from './styles/base'
import {ACCESS_TOKEN} from './constants'

class App extends Component {

  _logout() {
    return (
      <TouchableOpacity onPress={() => {
        AsyncStorage.setItem(ACCESS_TOKEN, '')Actions.login()
      }}>
        <Image source={require('./images/logout.png')} style={{
          width: 20,
          height: 20
        }}/>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <Router>
        <Scene key="root" navigationBarStyle={baseStyles.navigationBar} titleStyle={baseStyles.navigationBarText}>
          <Scene key="login" component={Login} title="Login" hideNavBar={true} type="reset"/>
          <Scene key="home" component={Home} type="reset" title="Browse Jobs" hideNavBar={false} renderRightButton={this._logout}/>
        </Scene>
      </Router>
    )
  }
}

module.exports = App
