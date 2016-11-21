import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "header": {
        "height": 50,
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "textCenter": {
        "textAlign": "center"
    },
    "textLeft": {
        "textAlign": "left"
    },
    "textRight": {
        "textAlign": "right"
    },
    "textJustCenter": {
        "lineHeight": 25
    },
    "Header1Center": {
        "fontSize": 18
    },
    "headerOut": {
        "width": 100 * vw,
        "position": "absolute",
        "zIndex": 99,
        "height": 50,
        "top": 0,
        "left": 0
    },
    "headerImage": {
        "width": 24,
        "height": 24,
        "marginTop": 13,
        "marginLeft": 5
    },
    "haveHeaderScroll": {
        "height": 100 * vh,
        "zIndex": 1
    },
    "UpRefreshControl": {
        "position": "absolute",
        "top": 100,
        "zIndex": 100
    },
    "Page1header": {
        "height": 40,
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "Page1selectText": {
        "color": "#fff",
        "fontWeight": "500",
        "fontSize": 14,
        "marginTop": 5,
        "marginLeft": 20,
        "opacity": 0.3
    },
    "DrawerListView": {
        "height": 50,
        "width": 350,
        "flexDirection": "row"
    },
    "DrawerListImage": {
        "width": 38,
        "height": 38,
        "marginTop": 6
    },
    "DrawerListcentenText": {
        "lineHeight": 35,
        "fontSize": 15
    },
    "Page1ViewPageTitle": {},
    "Page1Centertab": {
        "height": 35,
        "backgroundColor": "#FFF",
        "flexDirection": "row",
        "alignItems": "center"
    }
});