# navigator_V0.5

## 目前版本为发布版，现在可以应用到你的项目中，用法在下面将说明

## 将组件加入到项目中
  
###  将项目中 app/component/navigatorNow中的文件复制到项目中

## 数据格式

### 引入模块（根据自己项目位置引入模块）

```
import Page1 from './app/component/pages/Page1';
import Page2 from './app/component/pages/Page2';
import Page3 from './app/component/pages/Page3';
import Page4 from './app/component/pages/Page4';
```

###  初始化tabbar的信息

 ```
  componentWillMount() { 
    this.setState({
      TabbarJson: {
        fontColor: "#757575",    //字体初始颜色
        fontChangeColor: "#D81E06", //字体改变后的颜色
        backColor:"#fafafa",        //背景颜色
        underlayColor:"#fafafa",    //点击后高亮的背景色
        tabOpacity:1,              //点击后高亮的透明度
        list: [
          {
            name: '音乐',
            imgurl: require("./app/images/music_s.jpg"),
            imgChangeUrl: require("./app/images/music_r.jpg"),
          },
          {
            name: '朋友圈',
            imgurl: require("./app/images/friend_s.jpg"),
            imgChangeUrl: require("./app/images/friend_r.jpg")
          },
          {
            name: '消息',
            imgurl: require("./app/images/talk_s.jpg"),
            imgChangeUrl: require("./app/images/talk_r.jpg")
          },
          {
            name: '我',
            imgurl: require("./app/images/my_s.jpg"),
            imgChangeUrl: require("./app/images/my_r.jpg")
          }
        ]
      },
      page:[Page1,Page2,Page3,Page4]      //加载的模块 模块数量和list的数量对应
    })
  }
```

 ### 引入KNavigator组件(根据自己的文件位置引入模块)

```
import KNavigator from './app/component/navigatorNow/KNavigator';
```

###  应用组件 

 ```
  render() {
    return (
       <KNavigator Pages={this.state.page}  Tabbardata={this.state.TabbarJson}/>
    );
  }
```
##  现在就可以测试了 

 ##  页面的跳转 
  ###  在引入的其中一个模块中编写代码

```
import React, {Component, PropTypes} from 'react';

import {StyleSheet, Text, View, Image,Navigator,TouchableOpacity} from 'react-native';

import SecondPageComponent from '../navigator/FirstPageComponent';

class Page1 extends Component {
    _onpressout(){
          const { navigator } = this.props;  //引入导航传入的navigator对象
        if(navigator) {
 
            navigator.resetTo({             //第一个跳转最好用resetTo 清空路由栈 ,push会延迟很长时间
                name: 'SecondPageComponent',     //路由名字
                component: SecondPageComponent,   //跳转的组件
                type:"type5",     // 跳转的方式下面有对应表
                tabbarIsHidden:true     表示导航栏是否隐藏
            })
        }
    }
    render() {
        return (
            <View style={styles.bodys}>
              <TouchableOpacity onPress={this._onpressout.bind(this)}>
                <Text>点击跳转</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

Page1.propTypes = {

};

export default Page1;
```
 

## 跳转方式对照表

```
  getSceneType(route) {
        //根据传参判断 跳转场景
        switch (route.type) {
            case 'type1':
                return Navigator.SceneConfigs.PushFromRight;
            case 'type2':
                return Navigator.SceneConfigs.FloatFromRight;
            case 'type3':
                return Navigator.SceneConfigs.FloatFromLeft;
            case 'type4':
                return Navigator.SceneConfigs.FloatFromBottom;
            case 'type5':
                return Navigator.SceneConfigs.FloatFromBottomAndroid;
            case 'type6':
                return Navigator.SceneConfigs.FadeAndroid;
            case 'type7':
                return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
            case 'type8':
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
            default:
                return Navigator.SceneConfigs.HorizontalSwipeJump;
        }
    }

/*
  先上后下 FloatFromBottom
先上后下直接淡出FloatFromBottomAndroid
淡出淡入FadeAndroid
向左划进，向右划出HorizontalSwipeJump
先下右淡出 在上左淡进HorizontalSwipeJumpFromRight
先右下淡出向左划进VerticalUpSwipeJump
先下滑出 后上滑进VerticalDownSwipeJump
*/
```
## 控制tabbar的隐藏与显示

 ```
  ...
     let {navigator} =this.props;
        navigator.push({
            name:"SelectView",
            component:SelectView,
            type:"type6",
            tabbarIsHidden: true    //控制tabbar是否隐藏 true为隐藏
        })
  ...
 ```