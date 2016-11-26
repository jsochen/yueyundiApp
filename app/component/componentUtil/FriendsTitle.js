import React, { Component } from 'react'

import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native';

class FriendsTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BgImg: null,
      myname: "长镜头",
      mytitleImg: "http://img.woyaogexing.com/2016/11/24/391e98bbd6a55df9!200x200.jpg"
    };
  }

  ChangeBgImg() {
    this.setState({
      BgImg: "http://www.18weixin.com/upload/day_141117/201411171225168076.jpg"
    })
  }
  render() {
    let Bgimgs = null;
    if (this.state.BgImg != null) {
      Bgimgs = (
        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.ChangeBgImg()}>
          <Image source={{ uri: this.state.BgImg }} style={{ height: 220, width: Dimensions.get('window').width }} />
        </TouchableOpacity>
      )
    } else {
      Bgimgs = (
        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.ChangeBgImg()}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: "center", color: "#000" }}>轻触更换主题照片</Text>
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <View style={{ height: 250 }}>
        <View style={{ height: 220, backgroundColor: '#393939' }}>
          {Bgimgs}
        </View>
        <View style={{ position: 'absolute', top: 180, right: 15, height: 70 }}>
          <Image style={{ width: 70, height: 70 }} source={{ uri: this.state.mytitleImg }} />
        </View>
        <View style={{ position: 'absolute', top: 190, right: 95, height: 50 }}>
          <Text style={{ color: "#FFF" }}>{this.state.myname}</Text>
        </View>
      </View>
    )
  }
}

export default FriendsTitle

