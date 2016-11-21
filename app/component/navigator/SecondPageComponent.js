import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    Modal,
    TouchableHighlight,
    StyleSheet,
    Dimensions
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

import ThridPageComponent from './ThridPageComponent';
import Header2 from '../componentUtil/Header2';
import HeadrightButton from '../pages/page1/HeadrightButton';
export default class SecondPageComponent extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props);

    }

    _pressButton() {
        const {navigator} = this.props;
        if (navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }
    render() {
        return (
            <View>
                <Header2
                    name="发现音乐"
                    navigator={this.props.navigator}
                    img={require('../../images/gobackwhite.jpg')}
                    color="#FFF"
                    bgColor="rgba(166,0,22,0.8)"
                    title="查找音乐"
                    HeadrightButton={HeadrightButton} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bodys: {
        borderColor: '#000',
        borderWidth: 3,
        width: 300,
        backgroundColor: "red"
    }
});