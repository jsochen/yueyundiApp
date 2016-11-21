import React, { Component } from 'react'

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import StyleUtil from '../../style/StyleUtil';

class Header extends Component {
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
    render() {
        return (
            <View style={this.ViewStyle()}>
                <View style={StyleUtil.header}>
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={this.TextStyle()}>{this.props.title}</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
            </View>
        )
    }
}

export default Header