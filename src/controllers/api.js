import {baseUrl} from './global'
import {AsyncStorage} from 'react-native'
import {ACCESS_TOKEN} from '../constants'

function login(email, password, callback) {
  fetch(baseUrl + 'token', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body: 'client_id=' + email + '&client_secret=' + password + '&grant_type=client_credentials'
  }).then((res) => {
    return res.json()
  }).then((res) => {
    if (res.access_token) {
      AsyncStorage.setItem(ACCESS_TOKEN, res.access_token)
    }
    callback(res)
  }).catch((err) => {
    console.log(err)
    callback({error: 'internet_not_reachable'})
  })
}

function isLoggedIn(callback) {
  AsyncStorage.getItem(ACCESS_TOKEN).then((accessToken) => {
    if (accessToken != '' && accessToken != null) {
      callback(true)
    } else {
      callback(false)
    }
  })
}

function getJobs(pageNum = 1, callback) {
  AsyncStorage.getItem(ACCESS_TOKEN).then((accessToken) => {
    console.log(accessToken)
    fetch(baseUrl + 'jobs/' + pageNum + '?token=' + accessToken, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'GET'
    }).then((res) => {
      return res.json()
    }).then((res) => {
      console.log(res)
      if (res.error) {
        callback({error: res.error})
      } else {
        callback(res)
      }
    }).catch((err) => {
      console.log(err)
      callback({error: 'internet_not_reachable'})
    })
  })
}

module.exports = {
  login,
  isLoggedIn,
  getJobs
}
