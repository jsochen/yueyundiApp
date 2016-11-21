import React, { Component } from 'react'

import { StyleSheet, Text, View, Image, Dimensions, TouchableWithoutFeedback,Alert } from 'react-native';
import OutWebView from '../componentUtil/OurtWebView'; //引入banner图点击后跳转到webvieww
import Swiper from 'react-native-swiper';

var bannerlist = [
    {
        name: "李宇春专属预售福利",
        imgurl: "http://y.gtimg.cn/music/photo_new/T003R720x288M000003i2Qce1lvrvF.jpg?max_age=259" +
        "2000",
        connect: "http://y.qq.com/m/act/lycyuyue/index.html?&g_f=shoujijiaodian&ADTAG=myqq&from=my" +
        "qq&channel=10007100"
    }, {
        name: "BRUNO MARS 预售",
        imgurl: "http://y.gtimg.cn/music/photo_new/T003R720x288M000001zAot62LjYow.jpg?max_age=259" +
        "2000",
        connect: "http://node.y.qq.com/albumpage?sid=&channel=10007100&ADTAG=myqq&pre=1&id=1634494" +
        "&g_f=shoujijiaodian&from=myqq#/buy/act"
    }, {
        name: "MMA2016颁奖礼直播",
        imgurl: "http://y.gtimg.cn/music/photo_new/T003R720x288M000004MXR2O3gs3SQ.jpg?max_age=259" +
        "2000",
        connect: "http://y.qq.com/msa/mma/m.html?ADTAG=myqq&from=myqq&channel=10007100"
    }, {
        name: "苏打绿专辑巡回",
        imgurl: "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/51066.jpg",
        connect: "http://y.qq.com/msa/179/sudalvlive.html?&g_f=shoujijiaodian&ADTAG=myqq&from=myqq" +
        "&channel=10007100"
    }, {
        name: "HUAWEI nova 4GB+64GB 全网通版 香槟金（白）",
        imgurl: "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/43776.jpg",
        connect: "http://www.vmall.com/product/499588076.html#cid=60242"
    }, {
        name: "안투라지 MIXTAPE ",
        imgurl: "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/52269.jpg",
        connect: "http://y.qq.com/live/album/index.html?sid=&id=1678079&g_f=yqqjiaodian"
    }, {
        name: "“烧脑”“屠狗”两不误 - 沉眠- 白宇 / 杨蓉",
        imgurl: "https://y.gtimg.cn/music/common/upload/mv_t_mv_focus/52237.jpg",
        connect: "http://y.qq.com/portal/mv/c/2igup4twjeimgrb.html"
    }
]

class BannerList extends Component {
    constructor (props) {
        super(props)
    }
    
    SwiperOverStyle() {
        return { width: vw, height: 160, overflow: 'hidden' }
    }
    bannerOut(url, name) {
        const {navigator} = this.props;
        navigator.push({
            name: "OutWebView",
            component: OutWebView,
            
            type: "type6",
            url: url,
            title: name,
            lastname: "发现音乐"
        })
    }
    render() {
        let bannerlists = bannerlist.map((item, index) => {
            return (
                
                <View key={index} style={styles.slide1}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.bannerOut(item.connect, item.name)
                        } }>
                        <Image
                            style={this.SwiperOverStyle()}
                            source={{ uri: item.imgurl }} />
                    </TouchableWithoutFeedback>
                </View>
            )
        })
        return (
            <View style={this.SwiperOverStyle()}>
                <Swiper
                    autoplayTimeout={2.5}
                    autoplay={true}
                    showsPagination={false}
                    style={styles.wrapper}>
                    {bannerlists}
                </Swiper>
            </View>
        )
    }
}

export default BannerList

var vw = Dimensions
    .get('window')
    .width;
var vh = Dimensions
    .get('window')
    .height;

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    }
})