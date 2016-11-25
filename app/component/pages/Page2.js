import React, { Component, PropTypes } from 'react';

import { StyleSheet, Text, View, Image, Navigator, Dimensions,TouchableOpacity, WebView, ScrollView } from 'react-native';

import Header3 from './page2/Header3';

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BgImg: null
        };
        fetch("http://beautcloud.cn/api/friendlist")
            .then((response) => {
                response.json().then((data) => {
                })
            })
    }
    ChangeBgImg(){
        this.setState({
            BgImg:"http://www.18weixin.com/upload/day_141117/201411171225168076.jpg"
        })
    }
    render() {
        let Bgimgs=null;
            if (this.state.BgImg != null) {
                   Bgimgs=(
                    <TouchableOpacity style={{flex:1}} onPress={()=>this.ChangeBgImg()}>
                        <Image source={{ uri: this.state.BgImg }} style={{ height: 220, width: Dimensions.get('window').width }} />
                    </TouchableOpacity>
                   )
            } else {
                 Bgimgs=(
                     <TouchableOpacity style={{flex:1}} onPress={()=>this.ChangeBgImg()}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ textAlign: "center", color: "#000" }}>轻触更换主题照片</Text>
                        </View>
                    </TouchableOpacity>
                 )
            }
        return (
            <View style={{ backgroundColor: 'red' }}>
                <Header3 navigator={this.props.navigator} bgColor="rgb(43,52,57)" color="#FFF" title="朋友圈" />
                <ScrollView style={{ height: Dimensions.get('window').height - 110 }}>
                    <View style={{ height: 220, backgroundColor: '#393939' }}>
                        {Bgimgs}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

Page2.propTypes = {

};

export default Page2;
const styles = StyleSheet.create({
    webview: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 80
    },
    loadingimageView: {
        position: "absolute",
        top: 100,
        left: Dimensions.get('window').width / 2 - 18
    },
    loadingimage: {
        width: 36,
        height: 36,
    }
});