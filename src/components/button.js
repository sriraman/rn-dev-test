import React, {Component} from 'react'
import {TouchableOpacity, View, Text, Animated} from 'react-native'
import buttonStyles from '../styles/button'
import {color} from '../styles/variables'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      depth: new Animated.Value(0)
    }
  }
  _onPressIn() {
    if (!this.props.isDisabled) {
      Animated.timing(this.state.depth, {
        toValue: 100,
        duration: 50
      }).start()
    }
  }
  _onPressOut() {
    if (!this.props.isDisabled) {
      Animated.timing(this.state.depth, {
        toValue: 0,
        duration: 100
      }).start()
    }
  }
  _onPress() {
    if (!this.props.isDisabled) {
      this.props.onPress()
    }
  }
  render() {
    var backgroundColor = this.state.depth.interpolate({
      inputRange: [
        0, 100
      ],
      outputRange: [color.primary, color.primaryDark]
    })
    return (
      <Animated.View style={[
        buttonStyles.container,
        this.props.style, {
          backgroundColor,
          opacity: (this.props.isDisabled)
            ? 0.5
            : 1
        }
      ]}>
        <TouchableOpacity style={buttonStyles.touchableSection} onPressIn={this._onPressIn.bind(this)} onPressOut={this._onPressOut.bind(this)} activeOpacity={1} onPress={this._onPress.bind(this)}>
          <Text style={buttonStyles.text}>
            {this.props.text}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

module.exports = Button
