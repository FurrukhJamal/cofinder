import React from "react";
import {View, Text, StyleSheet, ScrollView, Platform, SafeAreaView, StatusBar} from "react-native";

function Notification(){
    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView>
                <View >
                    <Text>This is a Notification page</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#FFFFFF",
        alignItems : "center",
        alignItems : "center",
        padding : Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})

export default Notification;