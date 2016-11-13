import React, {Component, PropTypes} from 'react';

import {StyleSheet, Text, View, Image,TouchableHighlight} from 'react-native';
//require("../../images/music_s.jpg")
class TabBarItem extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            name:this.props.datatabar.name,
            imgurl:this.props.index==this.props.itemindex?this.props.datatabar.imgChangeUrl:this.props.datatabar.imgurl,
            fontColor:this.props.index==this.props.itemindex?this.props.fontChangeColor:this.props.fontColor,
        };
    }
    //@ fontStyle  更改字体颜色
    fontStyle(){
        var that = this;
        return{
            color:that.state.fontColor,
            fontSize: 10,
            marginBottom: 3,
            textAlign: 'center'
        }
    }
    //@ButtonClick 传入代表tabar的key值触发父组件的ItemClick方法同时更改imgurl
    ButtonClick(index){
        this.props.ItemClick(index);
    }
    componentWillReceiveProps (nextProps) {
        console.log(nextProps.itemindex);
        this.setState({
            imgurl:nextProps.index==nextProps.itemindex?nextProps.datatabar.imgChangeUrl:nextProps.datatabar.imgurl,
            fontColor:nextProps.index==nextProps.itemindex?nextProps.fontChangeColor:nextProps.fontColor,
        })
    }
    render() {
        return (
            <TouchableHighlight activeOpacity={1} underlayColor={this.props.underlayColor||"#fafafa"} onPress={this.ButtonClick.bind(this,this.props.index)} style={styles.back}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.Imageview}>
                        <View style={{ flex: 1 }} ></View>
                        <Image style={styles.image} source={this.state.imgurl} />
                        <View style={{ flex: 1 }}></View>
                    </View>
                   <Text style={this.fontStyle()}>{this.state.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
export default TabBarItem;
const styles = StyleSheet.create({
    Imageview:{
      flex:1,
      flexDirection:'row',
      marginTop:7
    },
    fonszie:{
      fontSize:10,
      marginBottom:3,
      textAlign:'center'
    },
    back:{
        flex:1,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:25,
        height:25,
        marginLeft:-1
    },

})
