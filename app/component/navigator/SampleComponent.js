        
    import React from 'react';
    import {
        View,
        Navigator
    } from 'react-native';
    import FirstPageComponent from './FirstPageComponent';
    export default class SampleComponent extends React.Component {
        getSceneType(route){
            //根据传参判断 跳转场景
          switch(route.type){
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
                      return Navigator.SceneConfigs.HorizontalSwipeJump;
                      case 'type8':
                      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                      case 'type9':
                      return Navigator.SceneConfigs.VerticalUpSwipeJump;
                      default:
                      return Navigator.SceneConfigs.VerticalDownSwipeJump;
                  }
        }
        getnavigationBar(){
            return {
                
            }
        } 
        render() {
            let defaultName = 'FirstPageComponent';
            let defaultComponent = FirstPageComponent;
            return (
            <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route)=>{return this.getSceneType(route)}}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
            );
        }
    } 