import React, {Component, PropTypes} from 'react';

import {StyleSheet, Text, View, Image,Dimensions} from 'react-native';

import TabBarItem from './TabBarItem';

class TabBar extends Component {
    constructor(props) {
        super(props);
    }
    TabbarStyle(){
        return{
            width: Dimensions.get('window').width,
            flexDirection: 'row',
            borderTopWidth: 1,
            borderTopColor: '#ccc',
            backgroundColor: this.props.Tabbardata.backColor
        }
    }
    render() {
         let  tabarjson = this.props.Tabbardata.list;
         let  tabarHTML = tabarjson.map((item,index)=>{
             return <TabBarItem
             tabOpacity={this.props.Tabbardata.tabOpacity}
             tabbarIsHidden={this.props.tabbarIsHidden}
             itemindex={this.props.itemindex}
             key={index} 
             index={index}
             datatabar={item} 
             ItemClick={this.props.ItemClick} 
             fontColor={this.props.Tabbardata.fontColor}
             fontChangeColor={this.props.Tabbardata.fontChangeColor}
             underlayColor={this.props.Tabbardata.underlayColor}
             />
         }) 
        return (
            <View style={styles.TabBar}>
                {tabarHTML}
            </View>
        );
    }
}

TabBar.propTypes = {

};

export default TabBar;

const styles = StyleSheet.create({
   TabBar:{
       width:Dimensions.get('window').width,
       flexDirection:'row',
       borderTopWidth:1,
       borderTopColor:'#ccc',
       backgroundColor:'#f8f8f8'
   }
});