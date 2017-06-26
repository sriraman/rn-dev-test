import {Platform} from 'react-native'

let font = {
  primary: (Platform.OS === 'android')
    ? 'Roboto'
    : 'Avenir Next'
}

let color = {
  primary: '#E25057',
  primaryDark: '#ab1018'
}

module.exports = {
  font,
  color
}
