/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image,Navigator} from 'react-native';

import KNavigator from './app/component/navigatorNow/KNavigator';

//引入pages


import Page1 from './app/component/pages/Page1';
import Page2 from './app/component/pages/Page2';
import Page3 from './app/component/pages/Page3';
import Page4 from './app/component/pages/Page4';


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
        backColor:"#fafafa",
        underlayColor:"#fafafa",
        tabOpacity:1,
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
      },
      page:[Page1,Page2,Page3,Page4]
    })
  }
  render() {
    return (
       <KNavigator Pages={this.state.page}  Tabbardata={this.state.TabbarJson}/>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('TextProject', () => TextProject);
