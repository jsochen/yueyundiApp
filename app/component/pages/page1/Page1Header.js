import React, { Component } from 'react'

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import StyleUtil from '../../../style/StyleUtil';

import SelectView from './SelectView';

class Page1Header extends Component {
    TextStyle() {
        return {
            fontSize: 18,
            textAlign: 'center',
            lineHeight: 25,
            color: this.props.color
        }
    }
    ViewStyle() {
        return {
            backgroundColor: this.props.bgColor,
            height: 40
        }
    }
    pushToSelectView(){
        let {navigator} =this.props;
        navigator.push({
            name:"SelectView",
            component:SelectView,
            type:"type6",
            tabbarIsHidden: true
        })
    }
    render() {
        return (
            <View style={this.ViewStyle()}>
                <View style={StyleUtil.Page1header}>
                    <View style={{ flex: 1 }}>
                       <TouchableOpacity onPress={this.props.Openflank} style={{flex:1,overflow:'hidden'}}>
                          <Image
                           source={require('../../../images/r/p/i6.png')}
                            style={{height:25,width:25,marginTop:7,marginLeft:12}}/>
                       </TouchableOpacity>
                    </View>
                    <View style={{ flex: 6 }}>
                        <View style={styles.selectView}>
                           <TouchableOpacity onPress={this.pushToSelectView.bind(this)} style={{flex:1,flexDirection:'row'}}>
                             <View style={{flex:5}}><Text style={StyleUtil.Page1selectText}>搜索音乐，歌手，歌词，用户</Text></View>
                              <View style={{flex:1}}><Image style={{height:18,width:18,marginTop:5,marginLeft:18}} source={require('../../../images/r/p/it.png')} /></View>
                           </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{flex:1,overflow:'hidden'}}>
                          <Image
                           source={require('../../../images/r/p/yl.png')}
                            style={{height:24,width:24,marginTop:8,marginLeft:15}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Page1Header;

const styles = StyleSheet.create({
  selectView:{
     height:30,
     backgroundColor:"#A82828",
     borderRadius:25,
  }
});