import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    StyleSheet,
    DrawerLayoutAndroid,
    Image,
    KeyboardAvoidingView,
    TextInput,
} from 'react-native';

import SecondPageComponent from './SecondPageComponent';

export default class ThridPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator} = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
                tabbarIsHidden:false
            })
        }
    }
    render() {
         let navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>刘东我是你爸爸</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'red' }}>
                        <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
                        <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
                        <TouchableOpacity onPress={this._pressButton.bind(this)}>
                            <Text>点我跳转</Text>
                            <Text>这是第三页，准备跳到第二页</Text>
                        </TouchableOpacity>
                         <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
                        <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
                        <TouchableOpacity onPress={this._pressButton.bind(this)}>
                            <Text>点我跳转</Text>
                            <Text>这是第三页，准备跳到第二页</Text>
                        </TouchableOpacity>
                         <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
                        <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
                        <TouchableOpacity onPress={this._pressButton.bind(this)}>
                            <Text>点我跳转</Text>
                            <Text>这是第三页，准备跳到第二页</Text>
                        </TouchableOpacity>
                         <KeyboardAvoidingView style={styles.keybord}><TextInput placeholder={"liudong"} /></KeyboardAvoidingView>
                        <ActivityIndicator size="small" color="red"></ActivityIndicator>
                    </View>
            </DrawerLayoutAndroid>
           
        );
    }
}
const styles = StyleSheet.create({
    keybord:{
        width:300
    },
    loading:{
        width:50,
        height:50,
    }
})