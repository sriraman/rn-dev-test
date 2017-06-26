import {StyleSheet, Dimensions, Platform} from 'react-native'
import {font, color} from './variables'

var buttonStyles = StyleSheet.create({
  container: {
    flex: 0,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  touchableSection: {
    padding: 20,
    flex: 0,
    width: '100%'
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
})

module.exports = buttonStyles
