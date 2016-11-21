import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class HeadrightButton extends Component {
    render() {
        return (
            <TouchableOpacity style={{flex:1}}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}>
                    <Text style={styles.ButtonText}>陈龙</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default HeadrightButton;
const styles = StyleSheet.create({
    ButtonText: {
        color: '#fff',
        textAlign: 'right',
        marginRight: 15,
        fontSize: 18
    }
});