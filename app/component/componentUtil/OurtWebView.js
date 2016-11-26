import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,WebView,Dimensions,} from 'react-native';

import Header2 from './Header2';

class OutWebview extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        return (
            <View>
               <Header2
                    name={this.props.route.lastname}
                    navigator={this.props.navigator}
                    img={require('../../images/gobackwhite.jpg')}
                    color="#FFF"
                    bgColor="rgba(166,0,22,0.8)"
                    title={this.props.route.title} 
                />
                <WebView
                source={{uri:this.props.route.url}}
                scalesPageToFit={true}
                style={styles.webview}
                startInLoadingState={true}
                onShouldStartLoadWithRequest={(data)=>{
                    console.log(data);
                }}
                renderLoading={()=>{
                    return(
                        <View style={styles.loadingimageView}>
                           <Text>加载中......</Text>
                        </View>
                    )
                }}
                />
            </View>
        )
    }
}

export default OutWebview;
const styles = StyleSheet.create({
   webview:{
       width:Dimensions.get('window').width,
       height:Dimensions.get('window').height-80
   },
   loadingimageView:{
       position:"absolute",
       top:100,
       left:Dimensions.get('window').width/2-18
   },
   loadingimage:{
     width:36,
     height:36,
   }
});