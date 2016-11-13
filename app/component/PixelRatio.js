import React from 'react';  
import {  
 StyleSheet,  
 Dimensions,  
 PixelRatio,  
} from 'react-native';  
  
export default {  
    "pixelRatio" : PixelRatio.get(),  
    "width" : Dimensions.get('window').width,  
    "height" : Dimensions.get('window').height,  
}  