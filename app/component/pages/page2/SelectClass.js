import React, { Component } from 'react';

import {Alert, Picker, StyleSheet, Text, View, Image, TouchableOpacity, Switch } from 'react-native';

let allqu = [
  { name: "公开", description: "所有朋友可见" },
  { name: "私密", description: "尽自己可见" },
  { name: "部分可见", description: "选中的朋友可见" },
  { name: "不给谁看", description: "选中的朋友不可见" }
]
class SelectClass extends Component {
  constructor(props) {
    super(props)
    let Chageeds = [];
    for(let i in allqu){
       if(this.props.route.Selected==allqu[i].name){
         Chageeds.push(true)
       }else{
         Chageeds.push(false)
       }
    }
    this.state = {
      Changeed: Chageeds,
      IsChange:true
    }
  }
  ChangeValue(index){
     if(this.state.Changeed[index]==false){
       let Chageeds = [];
       for(let i in this.state.Changeed){
         if(i!=index){
           Chageeds.push(false);
         }else{
           Chageeds.push(true);
         }
       }
       this.setState({
         Changeed:Chageeds
       })
     }
  }
  Back() {
    let {navigator, route} = this.props;
    navigator.pop();
  }
  ChangeSuccess(){
     let {navigator, route} = this.props;
    for(let i in this.state.Changeed){
      if(this.state.Changeed[i]==true){
           route.ChangeWho(allqu[i].name)
      }
    }
    navigator.pop();
  }
   // <Switch onTintColor="#00D20C" value={this.state.Changeed[index]} />
  render() {
    let Swichs = allqu.map((item, index) => {
      return (
        <View key={index} style={{ height: 50, backgroundColor: "#fff", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#EBEBEB" }}>
          <View style={{ flex: 1, marginTop: 5 }}>
            <View style={{ marginLeft: 10 }}><Text style={{ fontSize: 14, color: "#000" }}>{item.name}</Text></View>
            <View style={{ marginLeft: 10, marginTop: 3 }}><Text style={{ fontSize: 12, color: "#888" }}>{item.description}</Text></View>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <TouchableOpacity onPress={this.ChangeValue.bind(this,index)} style={{flex:1}}>
               <View style={{alignSelf:'flex-end'}}>
               <Switch onValueChange={(value,index)=>this.ChangeValue(value,index)} onTintColor="#00D20C" value={this.state.Changeed[index]} />
               </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    })
    return (
      <View style={{ backgroundColor: "#EBEBEB", flex: 1 }}>
        <View style={{ height: 50, backgroundColor: this.props.route.bgColor, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this.Back.bind(this)} style={{ flex: 1 }} >
              <Image
                source={require('../../../images/r/p/abl.png')}
                style={{ height: 28, width: 28, marginTop: 10, marginLeft: 10 }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 5 }}>
            <Text style={styles.PublishText}>谁可以看</Text>
          </View>
          <View style={{ flex: 2 }}>
            <TouchableOpacity onPress={this.ChangeSuccess.bind(this)} style={{ flex: 1 }} >
              <View style={styles.publishButton}>
                <Text style={styles.publishButtonText}>完成</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: "#EBEBEB", height: 20 }}></View>
        {Swichs}
      </View>
    );
  }
}

export default SelectClass;

const styles = StyleSheet.create({
  publishButtonText: {
    color: "rgb(255,255,255)",
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 25,
    fontWeight: "300"
  },
  publishButton: {
    alignSelf: "flex-end",
    height: 30,
    width: 65,
    backgroundColor: '#00D20C',
    borderRadius: 3,
    marginTop: 10,
    marginRight: 10
  },
  PublishText: {
    fontSize: 16,
    color: "#FFF",
    lineHeight: 35,
    textAlign: 'center'
  }
})