import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Dimensions, ScrollView, ListView } from 'react-native';

import HeaderOther from './HeaderOther';

import FriendsTitle from '../../componentUtil/FriendsTitle';

class OtherListView extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      listdata: {},
      username: '长镜头',
      dataSource: ds.cloneWithRows(["dsads"]),
    }
    fetch('http://beautcloud.cn/api/getuserinformation?id=' + this.props.route.id.toString())
      .then((response) => {
        response.json().then((data) => {
          if (data.state == 1) {
            this.setState({
              listdata: data.data,
              dataSource: ds.cloneWithRows(data.data.Journal)
            })
          }
        })
      })
  }
  ListViewOnload(rowData) {
    if (rowData.Image) {
      return (
        <View style={styles.OtherListTotalView}>
          <View style={{ flex: 2 }}>
            <Text style={styles.OtherListDateText}>{rowData.date}</Text>
          </View>
          <View style={{ flex: 8, backgroundColor: "rgba(202,202,202,0.2)",marginRight:10}}>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
              <View style={styles.OtherListImageView}>
                {this.ListViewImage(rowData.Image)}
              </View>
              <View style={{ flex: 3}}>
                <Text style={styles.OtherListContentText}>{rowData.content.length > 88 ? rowData.content.substring(0, 99) + "···" : rowData.content}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else {
      return (
        <View></View>
      )
    }

  }
  ListViewImage(Images) {
    let ImageView = <View></View>;
    if (Images) {
      ImageView = Images.map((item, index) => {
        return (
          <Image key={index} source={{ uri: item.Imageurl }} style={{ width: item.Imagewidth / 3, height: item.Imageheight / 3 }} />
        )
      })
    }
    return ImageView;
  }
  Jumpback() {
    let {navigator} = this.props;
    navigator.pop();
  }
  render() {
    let isFabulous = false;
    if (this.state.listdata.bgFabulous) {
      for (let i in this.state.listdata.bgFabulous) {
        if (this.state.listdata.bgFabulous[i].name == this.state.username) {
          isFabulous = true;
        }
      }
    }
    return (
      <View>
        <HeaderOther navigator={this.props.navigator} color="#FFF" bgColor="rgb(43,52,57)" name={this.props.route.name} />
        <ScrollView ref={(scrollView) => { this._scrollView = scrollView; } } style={styles.ScrollViewStyle}>
          <FriendsTitle
            username={this.state.username}
            bgimg={this.state.listdata.bgimg}
            bgimgIsFabulous={isFabulous}
            navigator={this.props.navigator}
            otherusers={this.state.listdata.name}
            mytitleImg={this.state.listdata.titleImg}
            otherId={this.state.listdata.id} />
          <ListView dataSource={this.state.dataSource}
            renderRow={(rowData) => this.ListViewOnload(rowData)}
            />
        </ScrollView>


      </View>
    );
  }
}

export default OtherListView;
const styles = StyleSheet.create({
  ScrollViewStyle: {
    height: Dimensions.get('window').height - 110
  },
  OtherListTotalView: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20
  },
  OtherListDateText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 5
  },
  OtherListContentText: {
    marginLeft: 3,
    paddingRight:5,
    lineHeight: 22,
    fontSize: 13,
    color: "#000",
  },
  OtherListImageView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    margin: 5
  }
})