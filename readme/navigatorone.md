# navigatorone雏形框架用法讲解

## 对比navigator_V_0.2升级版
  
  ### 可扩展性较好，根据情况需要做出相应的更改

## 用法
 
 ### 准备数据
 ```
 {
        fontColor: "#757575",  //跳转之前字体的颜色
        fontChangeColor: "#D81E06", //跳转后字体的颜色
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
      }
 ```
 **list的条数不限但是一般也就3，4，5条太多不好看，太少没必要**

 **引入KNavigator组件**
 ```
 import KNavigator from './app/component/navigatorNow/KNavigator';
 ```
 **向组件传值**
 ```
   render() {
    return (
     <KNavigator  Tabbardata={this.state.TabbarJson}/>
    );
  }
 ```


 ## 在KNavigator.js文件中修改引入跳转页面的组件

  ```
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
  ```
  ## 在这个方法中做出相应的修改

```
renderScene(route, navigator) {
        var page1, page2, page3, page4;
        if (ROUTE_STACK.indexOf(route) === 0) {
            page1 = (
                <View style={{height:Dimensions.get('window').height-60}}>  
                 <Page1 navigator={navigator}></Page1>
                </View>
            );
        } else if (ROUTE_STACK.indexOf(route) === 1) {
            page2 = (
                <View style={{height:Dimensions.get('window').height-60}}> 
                    <Page2 navigator={navigator}></Page2>
                </View>
            )
        } else if (ROUTE_STACK.indexOf(route) === 2) {
            page3 = (
                <View style={{height:Dimensions.get('window').height-60}}>        
                    <Page3 navigator={navigator}></Page3>
                </View>
            );
        } else if (ROUTE_STACK.indexOf(route) === 3) {
            page4 = (
                <View style={{height:Dimensions.get('window').height-60}}>
                  <Page4 navigator={navigator}></Page4>
                </View>
            )
        }
         return (
           <View style={styles.scene}>
                <View style={{flex:1}}>
                    {page1}
                    {page2}
                    {page3}
                    {page4}
                </View>
            </View>
        );
}
```

## 修改完后试试测试吧