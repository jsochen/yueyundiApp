import React, {Component} from 'react';

import {Alert,StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class MyPalce extends Component {
  constructor(props) {
    super(props);
     navigator.geolocation.getCurrentPosition(
       (position)=>{
         Alert.alert(JSON.stringify(position))
       },
      (error) => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
     )
  }
  render() {
    return (
      <View>
         <Text>MyPalce</Text>
      </View>
    ); 
  }
}

export default MyPalce;