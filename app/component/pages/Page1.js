import React, {Component, PropTypes} from 'react';

import {StyleSheet, Text, View, Image,Navigator} from 'react-native';



class Page1 extends Component {
    render() {
        return (
            <View style={{backgroundColor:'red'}}>
              <Text>Page1</Text>
            </View>
        );
    }
}

Page1.propTypes = {

};

export default Page1;