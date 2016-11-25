import React, { Component } from 'react'

import { View, Text, TouchableOpacity, Alert, Image, StyleSheet, TextInput, Dimensions } from 'react-native';

import MyPalce from './MyPalce';

import SelectClass from './SelectClass';

let whoLooks = "公开";
class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whoLooks: "公开"
    }
  }
  ChangeWhoLooks(value) {
    this.setState({
      whoLooks: value
    })
  }
  PushToSelectClass() {
    let {navigator} = this.props;
    navigator.push({
      name: "SelectClass",
      component: SelectClass,
      Selected: this.state.whoLooks,
      ChangeWho: this.ChangeWhoLooks.bind(this),
      bgColor: "rgb(43,52,57)",
      color: "#FFF",
      title: "朋友圈",
      type: "type6"
    })
  }
  PushToPlace() {
    let {navigator} = this.props;
    navigator.push({
      name: "MyPalce",
      component: MyPalce,
      type: "type6"
    })
  }
  Back() {
    let {navigator, route} = this.props;
    navigator.pop();
  }
  render() {
    return (
      <View style={{ height: Dimensions.get('window').height, backgroundColor: "#EBEBEB" }}>
        <View style={{ backgroundColor: "#FFF" }}>
          <View style={{ height: 50, backgroundColor: this.props.route.bgColor, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={this.Back.bind(this)} style={{ flex: 1 }} >
                <Image
                  source={require('../../../images/r/p/abl.png')}
                  style={{ height: 28, width: 28, marginTop: 10, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 5 }}>
              <Text style={styles.PublishText}>发表心情</Text>
            </View>
            <View style={{ flex: 2 }}>
              <TouchableOpacity onPress={this.Back.bind(this)} style={{ flex: 1 }} >
                <View style={styles.publishButton}>
                  <Text style={styles.publishButtonText}>发表</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            placeholder="这一刻的想法..."
            underlineColorAndroid="transparent"
            multiline={true}
            numberOfLine={10}
            style={{ height: 100, width: Dimensions.get('window').width - 20, marginLeft: 10 }}>
          </TextInput>
          <View style={{ height: 40, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: "#EBEBEB" }}>
            <TouchableOpacity onPress={this.PushToPlace.bind(this)} style={{ flex: 1 }}>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 11 }}>
                <View style={{ flex: 0.4 }}></View>
                <View style={{ flex: 0.6 }}>
                  <Image
                    source={require('../../../images/r/p/hr.png')}
                    style={{ width: 18, height: 18, marginTop: 1 }}
                    resizeMode="stretch" />
                </View>
                <View style={{ flex: 8 }}>
                  <Text>所在位置</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 25, backgroundColor: "#EBEBEB" }}></View>
          <View style={{ height: 40, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: "#EBEBEB" }}>
            <TouchableOpacity style={{ flex: 1 }} onPress={this.PushToSelectClass.bind(this)}>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 11 }}>
                <View style={{ flex: 0.4 }}></View>
                <View style={{ flex: 0.6 }}>
                  <Image
                    source={require('../../../images/r/p/a61.png')}
                    style={{ width: 18, height: 18, marginTop: 1 }}
                    resizeMode="stretch" />
                </View>
                <View style={{ flex: 5 }}>
                  <Text>谁可以看</Text>
                </View>
                <View style={{ flex: 3 }}>
                  <View style={{flex:1,alignSelf:'flex-end',marginRight:10}}><Text>{this.state.whoLooks}</Text></View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 40, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: "#EBEBEB" }}>
            <TouchableOpacity style={{ flex: 1 }}>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 11 }}>
                <View style={{ flex: 0.4 }}></View>
                <View style={{ flex: 0.6 }}>
                  <Image
                    source={require('../../../images/r/p/a5e.png')}
                    style={{ width: 18, height: 18, marginTop: 1 }}
                    resizeMode="stretch" />
                </View>
                <View style={{ flex: 8 }}>
                  <Text>提醒谁看</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default Publish;

const styles = StyleSheet.create({
  publishButtonText: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 25
  },
  publishButton: {
    alignSelf: "flex-end",
    height: 30,
    width: 65,
    backgroundColor: '#296B42',
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