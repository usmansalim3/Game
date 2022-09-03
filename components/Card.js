import React from "react";
import { StyleSheet, View,Text } from "react-native";

export default function Card({children}){
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#4e0329",
        marginHorizontal:15,
        elevation:5,
        padding:10,
        borderRadius:4
    }
})