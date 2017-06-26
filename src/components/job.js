import React, {Component} from 'react'
import {TouchableOpacity, View, Text, Animated, Image} from 'react-native'
import jobStyles from '../styles/job'
import {color} from '../styles/variables'

class Job extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let job = this.props.data.item
    let companyImage = 'https://res.cloudinary.com/chris-mackie/image/upload/h_200/v' + job.company_img_v + '/' + job.company_img
    let employerImage = 'https://res.cloudinary.com/chris-mackie/image/upload/h_70/v' + job.employer_img_v + '/' + job.employer_img
    return (
      <View style={jobStyles.container}>
        <View style={jobStyles.companyImageContainer}>
          <Image source={{
            uri: companyImage
          }} style={jobStyles.companyImage}/>
        </View>
        <View style={jobStyles.employerImageContainer}>
          <Image source={{
            uri: employerImage
          }} style={jobStyles.employerImage}/>
        </View>
        <View style={jobStyles.dataContainer}>
          <Text style={jobStyles.role}>
            {job.role}
          </Text>
          <Text style={jobStyles.company}>
            {job.company}
          </Text>
          <Text style={jobStyles.description}>
            {job.company_type}
            -{job.location_city}
          </Text>
          <Text style={jobStyles.rate}>
            £{job.rate}
            <Text style={jobStyles.rateType}>({job.rate_type})
            </Text>
          </Text>
        </View>
      </View>
    )
  }
}

module.exports = Job
