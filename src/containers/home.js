import React, {Component} from 'react'
import {
  View,
  Animated,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  AsyncStorage,
  Text,
  TextInput
} from 'react-native'
import {Actions} from 'react-native-router-flux'
import baseStyles from '../styles/base'
import api from '../controllers/api'
import {color} from '../styles/variables'
import Job from '../components/job'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: null,
      isLoading: true,
      loadedPage: 0,
      refreshing: false,
      loadingMore: false,
      isInternetReachable: true
    }
  }
  componentDidMount() {
    this._loadFreshList()
  }

  _loadFreshList() {
    api.getJobs(1, (res) => {
      if (res.error) {
        switch (res.error) {
          case 'internet_not_reachable':
            this.setState({isInternetReachable: false})
            break
          default:
            AsyncStorage.setItem('accessToken', '')
            Actions.login()
            break
        }
      } else {
        this.setState({isLoading: false, loadedPage: 1, refreshing: false, jobs: res.browse})
      }
    })
  }

  _onRefresh() {
    this._loadFreshList()
    this.setState({refreshing: true})
  }

  _onEndReached() {
    if (!this.state.loadingMore) {
      this.setState({loadingMore: true})
      api.getJobs(this.state.loadedPage + 1, (res) => {
        if (res.error) {
          AsyncStorage.setItem('accessToken', '')
          Actions.login()
        } else {
          if (res.browse.length > 0) {
            this.setState({
              loadedPage: this.state.loadedPage + 1,
              loadingMore: false,
              jobs: this.state.jobs.concat(res.browse)
            })
          } else {
            this.setState({loadingMore: false})
          }
        }
      })
    }
  }

  _renderJob(job) {
    return (<Job data={job}/>)
  }

  _renderFooter() {
    return (
      <View>
        {this.state.loadingMore && <ActivityIndicator style={{
          marginBottom: 20
        }} color={color.primary}/>
        }
      </View>
    )
  }

  render() {
    return (
      <View style={baseStyles.containerWithNavbar}>
        {this.state.isInternetReachable || <View style={baseStyles.loadingContainer}>
          <Text style={baseStyles.loadingText}>
            Internet not available
          </Text>
          <TouchableOpacity onPress={() => {
            this.setState({isInternetReachable: true});
            this._loadFreshList()
          }}>
            <Text style={baseStyles.refreshTrigger}>
              Try again
            </Text>
          </TouchableOpacity>
        </View>
        }
        {this.state.isInternetReachable && <View>
          {this.state.isLoading && <View style={baseStyles.loadingContainer}>
            <ActivityIndicator size="large" color={color.primary}/>
            <Text style={baseStyles.loadingText}>
              Loading...
            </Text>
          </View>
          }
          {this.state.isLoading || <FlatList data={this.state.jobs} renderItem={this._renderJob} refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)} onEndReachedThreshold={30} onEndReached={this._onEndReached.bind(this)} ListFooterComponent={this._renderFooter.bind(this)}/>
        }
        </View>
      }
      </View>
    )
  }
}

module.exports = Home
