import React, {Component, PropTypes} from 'react';

import {StyleSheet, Text, View, Image,Navigator,TextInput} from 'react-native';



class Page3 extends Component {
    render() {
        return (
            <View style={{backgroundColor:'red'}}>
              <Text>Page3</Text>
              <TextInput></TextInput>
            </View>
        );
    }
}

Page3.propTypes = {

};

export default Page3;