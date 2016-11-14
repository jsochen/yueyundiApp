import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    Modal,
    TouchableHighlight,
    StyleSheet,
    Dimensions
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

import ThridPageComponent from './ThridPageComponent';

export default class SecondPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
       
    }
   
   componentWillMount() {
   }
   
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }
    _pressButtonthree(){
        const{navigator} = this.props;
        if(navigator){
            navigator.push({
               name:"ThridPageComponent",
               component:ThridPageComponent,
               type: "type3",
               tabbarIsHidden:true
            });
        }
    }
    render() {
    return (
            <View style={styles.bodys}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳回去</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._pressButtonthree.bind(this)}>
                    <Text>点我跳到第三页</Text>
                    <Text>这是第二页</Text>
                </TouchableOpacity>
            </View>
    );
    }
}
const styles = StyleSheet.create({
  bodys:{
    borderColor:'#000',
    borderWidth:3,
    width:300,
    backgroundColor:"red",
  }
});