import React, { Component, PropTypes } from 'react';

import { Alert, StyleSheet, Text, View, Image, Navigator, Dimensions, TouchableOpacity, WebView, ScrollView, ListView } from 'react-native';

import Header3 from './page2/Header3';

import FriendsTitle from '../componentUtil/FriendsTitle';

import OtherListView from './page2/OtherListVIew';

class Page2 extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            username: "长镜头",
            dataSource: ds.cloneWithRows(['dsadsa']),
        };
        fetch("http://beautcloud.cn/api/friendlist")
            .then((response) => {
                response.json().then((data) => {
                    console.log(data);
                    if (data.state == 1) {
                        this.setState({
                            dataSource: ds.cloneWithRows(data.data)
                        })
                    }
                })
            })
    }
    //跳入个人动态列表页
    JumpToOtherListView(id, name) {
        let {navigator} = this.props;
        navigator.push({
            name: name,
            id: id,
            component: OtherListView
        })
    }

    ListViewOnload(rowData) {
        if (rowData.TitleImgurl) {
            return (
                <View style={styles.rowDataView}>
                    <View style={{ flex: 1.5 }}>
                        <TouchableOpacity onPress={() => this.JumpToOtherListView(rowData.id, rowData.name)} style={styles.loadingTitleImageTouch}>
                            <Image source={{ uri: rowData.TitleImgurl }} style={styles.loadingTitleImage} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 8 }}>
                        <TouchableOpacity onPress={() => this.JumpToOtherListView(rowData.id, rowData.name)} >
                            <Text style={styles.loadingName}>{rowData.name}</Text>
                        </TouchableOpacity>
                        <Text
                            style={styles.loadingText}>
                            {"    " + rowData.content.length > 100 ? rowData.content.substring(0, 99) + "···" : rowData.content}</Text>
                        <View style={styles.loadingimg}>
                            {this.LoadImage(rowData.Image)}
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.dataText}>{rowData.date}</Text>
                            </View>
                            <TouchableOpacity style={{ flex: 1 }}>
                                <Image source={require('../../images/r/p/tk.png')} style={styles.pinglunButtonImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.FabulousView}>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity>
                                    <Image source={require('../../images/r/p/xp.png')} style={styles.FabulousImg} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 8 }}>
                                <Text style={styles.Fabulous}>
                                    {this.loadFabulous(rowData.Fabulous)}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.commentTotalView}>
                            {this.loadComment(rowData.comment)}
                        </View>
                    </View>
                </View>
            )
        } else {
            return (
                <View></View>
            )
        }
    }
    //加载图片
    LoadImage(Images) {
        let ImageView = <View></View>;
        if (Images) {
            ImageView = Images.map((item, index) => {
                return (
                    <Image key={index} source={{ uri: item.Imageurl }} style={{ width: item.Imagewidth, height: item.Imageheight }} />
                )
            })
        }
        return ImageView;
    }
    //加载 赞
    loadFabulous(Fabulouss) {
        let Fabulous = "";
        if (Fabulouss) {
            Fabulouss.map((item, index) => {
                if (index <= 3) {
                    if (index == Fabulouss.length - 1 || index == 3) {
                        Fabulous = Fabulous + item + "等" + Fabulouss.length + "人觉得很赞";
                    } else {
                        Fabulous = Fabulous + item + "、";
                    }
                }
            })
        }
        return Fabulous;
    }
    //加载评论
    loadComment(comment) {
        if (comment) {
            return comment.map((item, index) => {
                return item.map((itemone, keys) => {
                    if (keys == 0) {
                        return (
                            <Text style={{ flexDirection: "row", paddingLeft: 10 }}>
                                <Text style={styles.commentspaifyText}>
                                    {itemone.Reply}
                                </Text>
                                <Text style={styles.commentautoText}>
                                    {":" + itemone.contents}
                                </Text>
                            </Text>
                        )
                    } else {
                        return (
                            <Text style={{ flexDirection: "row", paddingLeft: 10 }}>
                                <Text style={styles.commentspaifyText}>{itemone.Reply}</Text>
                                <Text style={styles.commentautoText}>回复</Text>
                                <Text style={styles.commentspaifyText}>{itemone.Replyed}</Text>
                                <Text style={styles.commentautoText}>{":" + itemone.contents}</Text>
                            </Text>
                        )
                    }
                })
            })
        }
    }

    //跳到顶端 
    ComTopTouch() {
        this._scrollView.scrollTo({ x: 0, y: 0, animated: true });
    }
    render() {
        return (
            <View>
                <Header3 comTopTouch={this.ComTopTouch.bind(this)} navigator={this.props.navigator} bgColor="rgb(43,52,57)" color="#FFF" title="朋友圈" />
                <ScrollView ref={(scrollView) => { this._scrollView = scrollView; } } style={styles.ScrollViewStyle}>
                    <FriendsTitle
                        username={this.state.username}
                        bgimg={null}
                        bgimgIsFabulous={false}
                        navigator={this.props.navigator}
                        otherusers={null}
                        mytitleImg="http://img.woyaogexing.com/2016/11/24/391e98bbd6a55df9!200x200.jpg"
                        />
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
    rowDataView: {
        flexDirection: 'row',
        borderBottomColor: "#CCCCCC",
        borderBottomWidth: 1
    },
    pinglunButtonImage: {
        width: 30,
        height: 30,
        alignSelf: "flex-end",
        marginRight: 15,
    },
    commentspaifyText: {
        fontSize: 12,
        color: "#4E71B6",
        lineHeight: 20,
        flexWrap: "wrap",
    },
    commentautoText: {
        fontSize: 12,
        color: "#000",
        lineHeight: 20,
        flexWrap: "wrap"
    },
    commentTotalView: {
        backgroundColor: "rgba(202,202,202,0.2)",
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        marginRight: 10,
        marginBottom: 10,
        paddingBottom: 5
    },
    loadingTitleImageTouch: {
        flex: 1,
        alignItems: "flex-end",
        marginRight: 5
    },
    loadingTitleImage: {
        height: 50,
        width: 50,
        marginTop: 5
    },
    loadingName: {
        color: "#5EAAEE",
        marginBottom: 5,
        marginTop: 5
    },
    loadingText: {
        marginBottom: 10,
        fontSize: 13,
        color: "#000",
        padding: 5,
        marginRight: 10,
        backgroundColor: "rgba(202,202,202,0.2)",
        borderRadius: 2,
        lineHeight: 22
    },
    loadingimg: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        marginRight: 20
    },
    dataText: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 12
    },
    FabulousView: {
        backgroundColor: "rgba(202,202,202,0.2)",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        flexDirection: "row",
        flexWrap: 'wrap',
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#333333'
    },
    FabulousImg: {
        height: 20,
        width: 20,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 5
    },
    Fabulous: {
        fontSize: 12,
        marginTop: 5
    },
    ScrollViewStyle: {
        height: Dimensions.get('window').height - 110
    },
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