import React, {Component, PropTypes} from 'react';

import {StyleSheet, Text, View, Image,TouchableHighlight,Dimensions} from 'react-native';
class TabBarItem extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            name:this.props.datatabar.name,
            imgurl:this.props.index==this.props.itemindex?this.props.datatabar.imgChangeUrl:this.props.datatabar.imgurl,
            fontColor:this.props.index==this.props.itemindex?this.props.fontChangeColor:this.props.fontColor,
            tabbarIsHidden:this.props.tabbarIsHidden
        };
    }
    ViewStyle(){
        var that = this;
        return{
            height: that.state.tabbarIsHidden==false?60:0,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
    //@ fontStyle  更改字体颜色
    fontStyle(){
        var that = this;
        return{
            color:that.state.fontColor,
            fontSize: 12,
            marginBottom: 3,
            textAlign: 'center'
        }
    }
    //@ButtonClick 传入代表tabar的key值触发父组件的ItemClick方法同时更改imgurl
    ButtonClick(index){
        this.props.ItemClick(index); 
    }
    componentWillReceiveProps (nextProps) {
        this.setState({
            imgurl:nextProps.index==nextProps.itemindex?nextProps.datatabar.imgChangeUrl:nextProps.datatabar.imgurl,
            fontColor:nextProps.index==nextProps.itemindex?nextProps.fontChangeColor:nextProps.fontColor,
            tabbarIsHidden:nextProps.tabbarIsHidden
        })
    }
    render() {
        return (
            <TouchableHighlight activeOpacity={this.props.tabOpacity} underlayColor={this.props.underlayColor||"#fafafa"} onPress={this.ButtonClick.bind(this,this.props.index)} style={this.ViewStyle()}>
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
      fontSize:12,
      marginBottom:8,
      textAlign:'center'
    },
    image:{
        width:32,
        height:32,
        marginLeft:-1
    },

})
