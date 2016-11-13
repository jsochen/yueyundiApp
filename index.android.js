/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image,Navigator} from 'react-native';

import KNavigator from './app/component/navigatorNow/KNavigator';

import TabBar  from './app/component/navigatorNow/TabBar';

class TextProject extends Component {
  constructor(props) {
    super(props);
    this.state={
      TabbarJson:null
    }
  }
  componentWillMount() { 
    this.setState({
      TabbarJson: {
        fontColor: "#757575",
        fontChangeColor: "#D81E06",
        list: [
          {
            name: '音乐',
            imgurl: require("./app/images/music_s.jpg"),
            imgChangeUrl: require("./app/images/music_r.jpg"),
          },
          {
            name: '朋友圈',
            imgurl: require("./app/images/friend_s.jpg"),
            imgChangeUrl: require("./app/images/friend_r.jpg")
          },
          {
            name: '消息',
            imgurl: require("./app/images/talk_s.jpg"),
            imgChangeUrl: require("./app/images/talk_r.jpg")
          },
          {
            name: '我',
            imgurl: require("./app/images/my_s.jpg"),
            imgChangeUrl: require("./app/images/my_r.jpg")
          }
        ]
      }
    })
  }
  render() {
    return (
     <KNavigator  Tabbardata={this.state.TabbarJson}/>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('TextProject', () => TextProject);
