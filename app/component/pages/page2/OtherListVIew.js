import React, {Component} from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity,Alert} from 'react-native';

import HeaderOther from './HeaderOther';

class OtherListView extends Component {
  constructor (props) {
    super(props)
    Alert.alert(this.props.route.id.toString())
     fetch('http://beautcloud.cn/api/getuserinformation?id='+this.props.route.id.toString())
     .then((response)=>{
       response.json().then((data)=>{
          console.log(data);
       })
     })
  }
  
  Jumpback(){
    let {navigator} = this.props;
    navigator.pop();
  }
  render() {
    return (
      <View>
        <HeaderOther navigator={this.props.navigator} color="#FFF" bgColor="rgb(43,52,57)" name={this.props.route.name} />
      </View>
    );
  }
}

export default OtherListView;