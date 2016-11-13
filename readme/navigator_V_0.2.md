# navigator_V_0.2框架用法讲解

## 对比navigatorone
  
  ### 封住的更加简单易用 只需传进相应的参数即可使用

## 用法

 ### 引入pages组件

 ```
import Page1 from './app/component/pages/Page1';
import Page2 from './app/component/pages/Page2';
import Page3 from './app/component/pages/Page3';
import Page4 from './app/component/pages/Page4';
 ```
 ### 准备数据
 ```
componentWillMount() { 
    this.setState({
      TabbarJson: {
        fontColor: "#757575",
        fontChangeColor: "#D81E06",
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
      page:[Page1,Page2,Page3,Page4]
    })
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
      <KNavigator Pages={this.state.page}  Tabbardata={this.state.TabbarJson}/>
    );
  }
 ```

## 修改完后试试测试吧