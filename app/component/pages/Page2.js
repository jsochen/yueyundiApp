import React, { Component, PropTypes } from 'react';

import {Alert,StyleSheet, Text, View, Image, Navigator, Dimensions, TouchableOpacity, WebView, ScrollView, ListView } from 'react-native';

import Header3 from './page2/Header3';

import FriendsTitle from '../componentUtil/FriendsTitle';

class Page2 extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['row1', 'row2']),
        };
        fetch("http://beautcloud.cn/api/friendlist")
            .then((response) => {
                response.json().then((data) => {
                    console.log(data);
                    if (data.state == 1) {
                        this.setState({
                            dataSource: ds.cloneWithRows(data.data)
                        })
                        Alert.alert("sdfad")
                    }
                })
            })
    }
    ListViewOnload(rowData) {
        return (
            <View key={{}} style={{ flexDirection: 'row', }}>
                <View style={{ flex: 2 }}>
                    <TouchableOpacity style={{ flex: 1, alignItems: "flex-end", marginRight: 10 }}>
                        <Image source={{ uri: rowData.TitleImgurl }} style={{ height: 50, width: 50 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 8 }}>
                    <Text style={{ color: "#5EAAEE" }}>{rowData.name}</Text>
                    <Text
                        style={{ padding: 5, marginRight: 10, backgroundColor: "rgba(202,202,202,0.2)", borderRadius: 2, lineHeight: 22 }}>
                        {"    " + rowData.content}</Text>
                    <View>
                        {this.LoadImage(rowData.Image)}
                    </View>
                </View>
            </View>
        )
    }
    LoadImage(Images) {
        let ImageView=<View></View>;
        console.log(Images)
        if (Images) {
          ImageView=Images.map((item, index) => {
                return (
                    <Image key={index} source={{ uri: item.Imageurl }} style={{ width: item.Imagewidth, height: item.Imageheight }} />
                )
            })
        }
        return ImageView;
    }
    render() {
        return (
            <View>
                <Header3 navigator={this.props.navigator} bgColor="rgb(43,52,57)" color="#FFF" title="朋友圈" />
                <ScrollView style={{ height: Dimensions.get('window').height - 110 }}>
                    <FriendsTitle navigator={this.props.navigator} />
                    <ListView dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.ListViewOnload(rowData)}
                        />
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