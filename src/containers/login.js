import React, {Component} from 'react'
import {
  View,
  Animated,
  Alert,
  KeyboardAvoidingView,
  Image,
  AsyncStorage,
  Text,
  TextInput
} from 'react-native'
import {Actions} from 'react-native-router-flux'

import baseStyles from '../styles/base'
import Button from '../components/button'
import api from '../controllers/api'

import logo from '../images/logo.png'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: 'dk5j4uafcF9dabEIpjjbOPTP',
      isProcessing: false
    }
  }
  componentDidMount() {
    api.isLoggedIn((isLoggedIn) => {
      if (isLoggedIn) {
        Actions.home()
      }
    })
  }
  _login() {
    // Actions.home()
    this.setState({isProcessing: true})
    api.login(this.state.email, this.state.password, (res) => {
      if (res.error) {
        console.log(res.error)
        switch (res.error) {
          case 'invalid_client':
            Alert.alert('Wrong credentials', 'Check your email and password')
            break
          case 'internet_not_reachable':
            Alert.alert('Internet Not Reachable', 'Please check your internet and try again.')
            break
        }
        this.setState({isProcessing: false})
      } else {
        Actions.home()
      }
    })
  }
  render() {
    console.log(this.state)
    return (
      <KeyboardAvoidingView style={baseStyles.container} behavior="padding" resetScrollToCoords={{
        x: 0,
        y: 0
      }}>
        <Image style={baseStyles.logo} source={logo}/>
        <TextInput style={baseStyles.textInput} placeholder="Email Address" value={this.state.email} onChangeText={(email) => {
          this.setState({email})
        }} autoCapitalize="none" autoCorrect={false} underlineColorAndroid="transparent"/>
        <TextInput style={baseStyles.textInput} placeholder="Password" value={this.state.password} onChangeText={(password) => {
          this.setState({password})
        }} secureTextEntry={true} underlineColorAndroid="transparent"/>
        <Button text={(this.state.isProcessing)
          ? 'Processing...'
          : 'Login'} onPress={() => {
          this._login()
        }} isDisabled={this.state.isProcessing}/>
      </KeyboardAvoidingView>
    )
  }
}

module.exports = Login
