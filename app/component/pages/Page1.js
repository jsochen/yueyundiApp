import React, {Component, PropTypes} from 'react';

import {StyleSheet, Text, View, Image,Navigator,TouchableOpacity} from 'react-native';

import SecondPageComponent from '../navigator/FirstPageComponent';

class Page1 extends Component {
    _onpressout(){
          const { navigator } = this.props;
        if(navigator) {

            navigator.resetTo({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
                type:"type5"
            })
        }
    }
    render() {
        return (
            <View style={{backgroundColor:'red'}}>
              <TouchableOpacity onPress={this._onpressout.bind(this)}>
                <Text>点击跳转</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

Page1.propTypes = {

};

export default Page1;

