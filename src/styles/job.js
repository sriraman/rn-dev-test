import {StyleSheet, Dimensions, Platform} from 'react-native'
import {font, color} from './variables'

var jobStyles = StyleSheet.create({
  container: {
    flex: 0,
    margin: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderWidth: 1,
    elevation: 6,
    shadowColor: "#999",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 0.5
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
  },
  companyImageContainer: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: 'hidden'
  },
  companyImage: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    height: 120,
    flex: 0
  },
  employerImageContainer: {
    elevation: 5,
    shadowColor: "#999",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    width: 50,
    height: 50,
    position: 'absolute',
    borderRadius: 25,
    right: 10,
    marginTop: 95
  },
  employerImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fff'
  },
  role: {
    backgroundColor: 'transparent',
    fontSize: 16,
    fontFamily: font.primary,
    fontWeight: '500',
    color: '#444'
  },
  dataContainer: {
    padding: 10
  },
  company: {
    backgroundColor: 'transparent',
    fontWeight: '300',
    color: '#444',
    fontSize: 12
  },
  description: {
    fontFamily: font.primary,
    marginTop: 20,
    color: '#aaa'
  },
  rate: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: font.primary,
    fontWeight: '500',
    color: '#444'
  },
  rateType: {
    fontSize: 14,
    fontFamily: font.primary,
    color: '#aaa'
  }
})

module.exports = jobStyles
