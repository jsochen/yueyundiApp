import React, { Component } from 'react'

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import StyleUtil from '../../../style/StyleUtil';

import Publish from '../page2/Publish';

class Header3 extends Component {
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
            height: 50
        }
    }
    longPress(){
        let {navigator} = this.props;
        navigator.push({
            name:"发表动态",
            component:Publish,
            type:"type6",
            bgColor:this.props.bgColor
        }) 
    }
    render() {
        return (
            <View style={this.ViewStyle()}>
                <View style={StyleUtil.header}>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={this.TextStyle()}>{this.props.title}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                       <View style={{width:50,height:50,alignSelf:'flex-end',justifyContent:'center'}}>
                          <TouchableOpacity style={{flex:1}} onLongPress={this.longPress.bind(this)}>
                             <Image
                              source={require('../../../images/r/p/a6r.png')}
                              style={{width:28,height:28,marginTop:10}} />
                          </TouchableOpacity>
                       </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Header3