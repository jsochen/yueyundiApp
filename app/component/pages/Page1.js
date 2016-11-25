import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
  ScrollView,
  TextInput,
  RefreshControl,
  Dimensions,
  TouchableWithoutFeedback,
  DrawerLayoutAndroid,
  ViewPagerAndroid
} from 'react-native';

import SecondPageComponent from '../navigator/SecondPageComponent';

import Page1Header from './page1/Page1Header';

import StyleUtil from '../../style/StyleUtil';

import BannerList from '../componentUtil/BannerList';

import DrawerModal from './page1/DrawerModal';

import Textjs from './page1/Textjs';

import ViewPage from '../componentUtil/ViewPager';

var Page1CenterTabbar = [
 {
   name:"个性推荐",
   component:BannerList
 },
 {
   name:"歌单",
   component:Textjs
 },
  {
   name:"主播电台",
   component:Textjs
 },
  {
   name:"排行榜",
   component:Textjs
 }
  ];



class Page1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      IsRefreshing: false,
      IsClose: true,
      drawer: "unlocked"
    }
  }

  //下拉刷新函数
  _onRefresh() {
    this.setState({
      IsRefreshing: !this.state.IsRefreshing
    })
    var that = this
    setTimeout(function () {
      that.setState({
        IsRefreshing: !that.state.IsRefreshing
      })
    }, 3000)
  }
  //控制点击后侧边的拦开关 以及state的状态的改变
  Openflank() {
    if (this.state.IsClose == true) {
      this.setState({ IsClose: false, drawer: "locked-open" })
      setTimeout(() => {
        this.setState({ drawer: "unlocked" })
      }, 20)
    } else {
      this.setState({ IsClose: true, drawer: "locked-closed" })
      setTimeout(() => {
        this.setState({ drawer: "unlocked" })
      }, 20)
    }
  }
  OnScroll(event) { }
  render() {
    let Page1Centertab = Page1CenterTabbar.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={{ flex: 1 }}>
          <Text style={{ textAlign: 'center' }}>{item.name}</Text>
        </TouchableOpacity>
      )
    })
    return (
      <DrawerLayoutAndroid
        ref='drawerLayout'
        drawerWidth={320}
        onDrawerClose={() => {
          this.setState({ IsClose: true, })
        } }
        onDrawerOpen={() => {
          this.setState({ IsClose: false, })
        } }
        drawerLockMode={this.state.drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        keyboardDismissMode="on-drag"
        renderNavigationView={() => <DrawerModal />}>
        <View style={{ backgroundColor: 'red' }}>
          <Page1Header
            that={this}
            Openflank={this.Openflank.bind(this)}
            navigator={this.props.navigator}
            color="#FFF"
            bgColor="rgba(166,0,22,0.95)" />
        </View>
        <View style={{ height: vh - 110 }}>
          <View style={StyleUtil.Page1Centertab}>
            {Page1Centertab}
          </View>
           <ViewPage hei={vh-145} navigator={this.props.navigator} module={Page1CenterTabbar} />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

Page1.propTypes = {};

export default Page1;

var vw = Dimensions
  .get('window')
  .width;
var vh = Dimensions
  .get('window')
  .height;

const styles = StyleSheet.create({
  OutView: {
    height: 40,
    width: vw,
    backgroundColor: "red"
  },
  TextView: {
    height: 500,
    width: vw,
    backgroundColor: 'red'
  },
  TextView2: {
    height: 500,
    width: vw,
    backgroundColor: 'green'
  }
})

// <ViewPagerAndroid style={{ height: vh - 145 }}>
//             <View>
//               <ScrollView
//                 ref={(scrollView) => {
//                   this._scrollView = scrollView;
//                 } }
//                 showsVerticalScrollIndicator={true}
//                 onScroll={(event) => this.OnScroll(event)}
//                 style={{ height: vh - 145 }}
//                 keyboardDismissMode="on-drag"
//                 refreshControl={
//                   < RefreshControl
//                     refreshing={this.state.IsRefreshing}
//                     colors={["red", "blue", "black", "green"]}
//                     tintColor="red" title="Loading..." onRefresh={this._onRefresh.bind(this)}
//                     progressViewOffset={50}
//                     />
//                 }>
//                   <BannerList  navigator={this.props.navigator} />
//               </ScrollView>
//             </View>
//             <View><Text>个性推荐</Text></View>
//             <View><Text>个性推荐</Text></View>
//             <View><Text>个性推荐</Text></View>
//           </ViewPagerAndroid>