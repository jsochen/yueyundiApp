import React, { Component } from 'react'

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import StyleUtil from '../../../style/StyleUtil';

class HeaderOther extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    goBack() {
        let {navigator} = this.props;
        navigator.pop({
            tabbarIsHidden: false
        })
    }
    TextStyle() {
        return {
            fontSize: 18,
            textAlign: 'center',
            color: this.props.color,
            height:25
        }
    }
    ViewStyle() {
        return {
            backgroundColor: this.props.bgColor,
            height: 50
        }
    }
    goBackText() {
        return {
            fontSize: 18,
            color: this.props.color
        }
    }
    render() {
        let HeadrightButton = this.props.HeadrightButton!=undefined?this.props.HeadrightButton:NullView;
        return (
            <View style={this.ViewStyle()}>
                <View style={StyleUtil.header}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={this.goBack.bind(this)} style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1,marginLeft:10,width:40,height:40}}><Image style={StyleUtil.headerImage} source={require('../../../images/r/p/i0.png')} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center',overflow:'hidden'}}>
                      <View style={{ flex: 3, justifyContent: 'center' }}><Text style={this.goBackText()}>{this.props.name}</Text></View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <HeadrightButton navigator={this.props.navigator} />
                    </View>
                </View>
            </View>
        )
    }
}

export default HeaderOther

class NullView extends Component {
    render() {
        return (
            <View>
                
            </View>
        );
    }
}
