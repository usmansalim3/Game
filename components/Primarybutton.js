import React from "react";
import { View, Text, TouchableOpacity, Pressable , StyleSheet } from "react-native";


export default function Primarybutton({children,onPress}){
    return(
        <View style={{margin:4,borderRadius:4,backgroundColor:"#72063c",overflow:"hidden"}}>
            <Pressable onPress={onPress} android_ripple={{color:"purple"}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}
const styles=StyleSheet.create({
    buttonText:{
        alignSelf:"center",
        color:"white",
        padding:10
    }
})