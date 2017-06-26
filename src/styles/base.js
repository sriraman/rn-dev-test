import {StyleSheet, Dimensions, Platform} from 'react-native'
import {font, color} from './variables'

var baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 95,
    margin: 20,
    alignSelf: 'center'
  },
  textInput: {
    flex: 0,
    margin: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    height: 50,
    padding: 15,
    fontSize: 16
  },
  loadingContainer: {
    marginTop: 50
  },
  loadingText: {
    marginTop: 20,
    textAlign: 'center',
    fontFamily: font.primary,
    fontSize: 20
  },
  containerWithNavbar: {
    marginTop: (Platform.OS === 'android')
      ? 52
      : 62
  },
  navigationBar: {
    backgroundColor: color.primary,
    elevation: 3,
    borderBottomWidth: 0
  },
  navigationBarText: {
    color: '#fff',
    fontFamily: font.primary,
    fontWeight: '500'
  },
  refreshTrigger: {
    fontWeight: '500',
    fontFamily: font.primary,
    color: color.primary,
    textAlign: 'center',
    marginTop: 20
  }
})

module.exports = baseStyles
