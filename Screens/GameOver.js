import React from "react";
import { Text,View,Image, StyleSheet } from "react-native";
import Primarybutton from "../components/Primarybutton";
import Title from "../components/Title"

export default function GameOver({rounds,number,startNewGame}){
    return(
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <View style={{margin:30}}>
                <Title>Game Over</Title>
            </View>
            <View style={styles.imageContainner}>
                <Image style={styles.image} source={require("../assets/success.png")}/>
            </View>
            <View>
                <Text style={{fontSize:24,textAlign:'center',margin:15}}>Your phone needed <Text style={{color:"#4e0329"}}>{rounds}</Text> rounds to guess the number <Text style={{color:"#4e0329"}}>{number}</Text> </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1,marginHorizontal:25}}>
                <Primarybutton onPress={startNewGame}><Text style={{fontWeight:'bold'}}>Play Again</Text></Primarybutton>
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    imageContainner:{
        width:300,
        height:300,
        borderWidth:3,
        borderRadius:150,
        overflow:'hidden',
        alignSelf:'center',
        
    },
    image:{
        width:'100%',
        height:'100%'
    }
})