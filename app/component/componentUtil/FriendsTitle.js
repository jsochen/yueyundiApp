import React, { Component } from 'react'

import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ToastAndroid } from 'react-native';

class FriendsTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BgImg: this.props.bgimg,
      myname: this.props.otherusers || this.props.username,
      mytitleImg: this.props.mytitleImg,
      bgimgIsFabulous: this.props.bgimgIsFabulous
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      BgImg: nextProps.bgimg,
      myname: nextProps.otherusers || nextProps.username,
      mytitleImg: nextProps.mytitleImg,
      bgimgIsFabulous: nextProps.bgimgIsFabulous
    })
  }
  Fabulous() {
    if (this.state.bgimgIsFabulous == false) {
      fetch("http://beautcloud.cn/api/pointFabulous?id=" + this.props.otherId)
        .then((response) => {
          response.json().then((data) => {
            if (data.state == 1) {
              ToastAndroid.show("你赞了" + this.props.otherusers + "背景墙", ToastAndroid.SHORT);
              this.setState({
                bgimgIsFabulous: true
              })
            }
          })
        })
    }
  }
  ChangeBgImg() {
    this.setState({
      BgImg: "http://www.18weixin.com/upload/day_141117/201411171225168076.jpg"
    })
  }
  render() {
    let Bgimgs = null;
    if (this.props.otherusers == null) {
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
    } else {
      Bgimgs = (
        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.Fabulous()}>
          <Image source={{ uri: this.state.BgImg }} style={{ height: 220, width: Dimensions.get('window').width }} />
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
/**
  username={this.state.username}   传入现在账户的名
  bgimg="http://www.18weixin.com/upload/day_141117/201411171225168076.jpg"  传入背景墙的照片地址
  bgimgIsFabulous={false}   //传入是否别点赞过
  navigator={this.props.navigator}   //传入路由  
  otherusers="jsochenrr"   //传入他人名字 如果不传这个值代表 访问的本人的  不然是 别人的
  mytitleImg="http://img.woyaogexing.com/2016/11/24/391e98bbd6a55df9!200x200.jpg" />    //传入 头像
  otherId={111111}  其他用户的ID
**/