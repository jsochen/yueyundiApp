import React, { Component } from 'react'

import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

import StyleUtil from '../../../style/StyleUtil';

let vh = Dimensions.get('window').height;
let vw = Dimensions.get('window').width;

let DrawerlistView = [
    {
        imgurl: require('../../../images/r/p/aj5.png'),
        name: "我的消息",
        template: null
    },
    {
        imgurl: require('../../../images/r/p/aj4.png'),
        name: "会员中心",
        template: null
    },
    {
        imgurl: require('../../../images/r/p/aja.png'),
        name: "积分商城",
        template: null
    },
    {
        imgurl: require('../../../images/r/p/aj0.png'),
        name: "在线听歌免流量",
        template: null
    },
    {
        imgurl: require('../../../images/r/p/aj1.png'),
        name: "听歌识曲",
        template: null
    },
    {
        imgurl: require('../../../images/r/p/aj_.png'),
        name: "主题换肤",
        template: null
    },
    {
        imgurl: require('../../../images/r/p/aj7.png'),
        name: "夜间模式",
        template: null
    },
    {
        imgurl: require('../../../images/r/p/ajb.png'),
        name: "定时停止播放",
        template: null
    },
    {
        imgurl: require('../../../images/r/p/aix.png'),
        name: "音乐闹钟",
        template: null
    },
    {
        imgurl: require('../../../images/r/p/ajc.png'),
        name: "驾驶模式",
        template: null
    }
]

class DrawerModal extends Component {
    render() {

        //生成侧边的列表
        let DrawerList = DrawerlistView.map((item, index) => {
            return (
                <View key={index} style={StyleUtil.DrawerListView}>
                    <View style={{ flex: 0.6 }}>
                        <Image style={StyleUtil.DrawerListImage} resizeMode="stretch" source={item.imgurl} />
                    </View>
                    <View style={{ flex: 2.5 }}>
                        <Text style={StyleUtil.DrawerListcentenText}>{item.name}</Text>
                    </View>
                    <View style={{ flex: 2.5, alignItems: "flex-end" }}>
                         {item.template}
                    </View>
                </View>
            )
        })
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ height: vh }}>
                <Image source={require('../../../images/r/p/ais.jpg')} style={styles.DrawerTitle}>
                    <View style={styles.DrawerImageView}>
                        <Image style={styles.DrawerImage} source={this.props.image || require('../../../images/r/p/a90.png')} />
                    </View>
                    <View style={styles.Drawerperson}>
                        <View style={styles.DrawerName}>
                            <Text style={styles.DrawerNameText}>MissGirs</Text>
                        </View>
                        <View style={styles.Drawerlevel}>
                            <View style={styles.DrawerLevelView}>
                                <Text style={styles.DrawerLevelText}>LV.7</Text>
                            </View>
                        </View>
                    </View>
                </Image>
                {DrawerList}
            </ScrollView>
        )
    }
}


export default DrawerModal
const styles = StyleSheet.create({
    DrawerTitle: {
        height: 150,
        flexDirection: 'column',
        width: 320
    },
    DrawerImageView: {
        flex: 3,
    },
    Drawerperson: {
        flex: 1,
        flexDirection: 'row'
    },
    DrawerImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: 20,
        marginLeft: 20
    },
    DrawerName: {
        flex: 2,
    },
    DrawerNameText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginLeft: 20
    },
    Drawerlevel: {
        flex: 5
    },
    DrawerLevelView: {
        borderColor: "#FFf",
        borderWidth: 1,
        borderRadius: 20,
        width: 40,
        height: 16,
        marginTop: 3
    },
    DrawerLevelText: {
        fontStyle: 'italic',
        color: '#fff',
        fontSize: 10,
        fontWeight: '300',
        marginLeft: 10,
    }
});