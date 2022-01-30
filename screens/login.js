import React from "react";
import {Image, View, Text, StyleSheet, ScrollView, Platform, SafeAreaView, StatusBar} from "react-native";
import {COLORS, FONTS, images, SIZES} from "../constants";

function Login(){
    function renderTopSection(){
        //console.log("Top render called")
        return(
            <View style = {styles.topImagesContainer}>
                <View style = {styles.rectangleContainer}>
                    <Image 
                        style = {{width : 66, height : 66}}
                        source = {images.onBoardingReactangle}
                        resizeMode= "contain"/>
                </View>
                <View style = {styles.ellipse2Container}>
                    <Image 
                        style = {{width : 96, height : 96}}
                        source = {images.onBoardingEllipse2}
                        resizeMode= "contain"/>
                </View>
                <View style = {styles.ellipse3Container}>
                    <Image 
                        style = {{width : 66, height : 66}}
                        source = {images.onBoardingEllipse3}
                        resizeMode= "contain"/>
                </View>
                <View style = {styles.ellipse6Container}>
                    <Image 
                        style = {{width : 56, height : 56}}
                        source = {images.onBoardingEllipse6}
                        resizeMode= "contain"/>
                </View>
                <View style = {styles.ellipse7Container}>
                    <Image 
                        style = {{width : 86, height : 86}}
                        source = {images.onBoardingEllipse7}
                        resizeMode= "contain"/>
                </View>
                <View style = {styles.image3Container}>
                    <Image 
                        style = {styles.Image3}
                        source = {images.onBoardingImage3}
                        resizeMode= "contain"/>
                </View>
                <View style = {styles.image1Container}>
                    <Image 
                        style = {styles.Image1}
                        source = {images.onBoardingImage1}
                        resizeMode= "contain"/>
                </View>
                <View style = {{
                    marginTop : 152,
                    alignSelf : "center"            
                    }} >
                    
                    <Image 
                        style = {styles.topLogoCenterImage}
                        source = {images.onBoardingImage4}
                        resizeMode= "contain"/>
                </View>
                
            </View>
        )
    }
    
    return(
        <SafeAreaView style = {styles.androidContainer}>
        
            <View style = {styles.container}>
                
                {renderTopSection()}
                <View style = {{marginTop : 55}}>
                    <Text style = {FONTS.h1}>Start Cooking</Text>
                </View>
            </View>
        
        </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
    androidContainer : {
        flex : 1,
        padding : Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor : COLORS.background,
    },

    container : {
        alignItems : "center",
        justifyContent : "center",
        
        //flex : 1,
        
    },
    topImagesContainer : {
        //justifyContent : "center",
        //alignItems : "center",
        // borderRadius : 30,
        // borderWidth : 8,
        // borderColor : "#FFFFFF",
        width : SIZES.width,
    },
    topLogoCenterImage : {
        width : 102,
        height : 102,
        
    },
    image1 : {
        width : 56,
        height : 56,
    },
    image1Container : {
        position : "absolute",
        //backgroundColor : "red",
        alignItems : "center",
        justifyContent : "center",
        top : 81.43,
        left : 105,
    },
    image3Container : {
        position : "absolute",
        top : 57,
        right : 77,
    },
    image3 : {
       height : 66,
       width : 66, 
    },
    ellipse7Container : {
        position : "absolute",
        right  : 45,
        top : 141,
    },
    ellipse6Container : {
        position : "absolute",
        top : 205,
        right : 91,
    },
    ellipse3Container : {
        position : "absolute",
        top : 227,
        left : 104,
    },
    ellipse2Container : {
        position : "absolute",
        top : 155,
        left : 63,
    },
    rectangleContainer : {
        position : "absolute",
        top : 237,
        right : 130
    }
})

export default Login;