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
                type:"type5",
                tabbarIsHidden:true
            })
        }
    }
    render() {
        return (
            <View style={styles.bodys}>
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

const styles = StyleSheet.create({
  bodys:{
    height:700,
    borderColor:'#000',
    borderWidth:3,
    width:300,
    backgroundColor:"red",
  }
});

