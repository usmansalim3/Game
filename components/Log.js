import React from "react";
import { Text,View,StyleSheet } from "react-native";

export default function Log({roundNumber,guess}){
    return(
        <View style={styles.container}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#ddb52f',
        flexDirection:'row',
        margin:10,
        elevation:3,
        borderRadius:5,
        padding:10,
        justifyContent:'space-between',
    }
})