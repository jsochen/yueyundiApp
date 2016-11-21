import React, { Component, PropTypes } from 'react';

import { StyleSheet, Text, View, Image, Navigator, Dimensions } from 'react-native';

import TabBar from './TabBar';

var ROUTE_STACK = [];

class KNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemindex: 0,
            tabbarIsHidden: false
        }
    }

    componentWillMount() {
        this.props.Tabbardata.list.map((item, index) => {
            ROUTE_STACK.push({
                name: item.name,
                component: this.props.Pages[index]
            });
        })
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
                return Navigator.SceneConfigs.HorizontalSwipeJump;
            case 'type7':
                return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
            case 'type8':
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
            default:
                return Navigator.SceneConfigs.FadeAndroid;
        }
    }
    render() {
        // <TabBar ItemClick={this.ItemClick.bind(this)} Tabbardata ={this.props.Tabbardata}/>
        return (
            <Navigator
                debugOverlay={false}
                initialRoute={ROUTE_STACK[0]}
                initialRouteStack={ROUTE_STACK}
                configureScene={(route) => { return this.getSceneType(route) } }
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component route={route} navigator={navigator} />
                } }
                ref={(navigator) => {
                    this._navigator = navigator;
                } }
                onWillFocus={(nextroute) => {
                    this.setState({
                        tabbarIsHidden: nextroute.tabbarIsHidden && nextroute.tabbarIsHidden == true ? true : false
                    })
                    if (nextroute != ROUTE_STACK[this.state.itemindex]) {
                        this.setState({
                            itemindex: ROUTE_STACK.indexOf(nextroute) == -1 ? this.state.itemindex : ROUTE_STACK.indexOf(nextroute),
                        })
                    }
                } }
                navigationBar={
                    <TabBar
                        tabbarIsHidden={this.state.tabbarIsHidden}
                        Tabbardata={this.props.Tabbardata}
                        itemindex={this.state.itemindex}
                        ItemClick={(index) => {
                            this.setState({
                                itemindex: index,
                            })
                            let CurrentRoutes = this._navigator.getCurrentRoutes();
                            for (var i in CurrentRoutes) {
                                if (ROUTE_STACK[index].name == CurrentRoutes[i].name) {
                                    this._navigator.jumpTo(ROUTE_STACK[index]);
                                    return;
                                }
                            }
                            this._navigator.push(ROUTE_STACK[index]);
                        } } />
                }
                />
        );
    }
}

KNavigator.propTypes = {

};

export default KNavigator;
const styles = StyleSheet.create({
    tabBarstyle: {
        flex: 1,
        height: 10,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    appContainer: {
        //flex: 1,
        overflow: 'hidden',
        backgroundColor: '#dddddd',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabs: {
        /*  height: 50,*/
        backgroundColor: '#F3F5F6',
    },
    messageText: {
        fontSize: 17,
        fontWeight: '500',
        padding: 15,
        marginTop: 0,
        marginLeft: 15,
    },
    scene: {
        flex: 1,
        backgroundColor: '#EAEAEA',
    }
});