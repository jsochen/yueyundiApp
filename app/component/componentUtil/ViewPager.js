import React, {Component} from 'react'

import {StyleSheet, Text, View, Image,Dimensions,Alert} from 'react-native';

let vw = Dimensions.get('window').width;

class ViewPager extends Component {
    constructor (props) {
        super(props)
    }
    render () { 

        let Abc =this.props.module[0]
        let Viewpages = this.props.module.map((item,index)=>{
            console.log(item);
            return <item.component navigator ={this.props.navigator} style={{width:vw,height:this.props.hei}}  key={index}/>
        })
        return (
           <View style={styles.ViewPageStyle}>
             {Viewpages}
           </View>
        )
    }
}

export default ViewPager;
const styles = StyleSheet.create({
  ViewPageStyle:{
      flexDirection:'row',
  }
});