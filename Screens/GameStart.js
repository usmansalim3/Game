import React, { useState } from "react";
import { TextInput,View,StyleSheet} from "react-native";
import Primarybutton from "../components/Primarybutton";
import { Alert } from "react-native";
import Title from '../components/Title';


export default function GameStart({setNumber,setGameOver}){
    const[value,setValue]=useState("");
    const valueHandler=(val)=>{
        setValue(val)
        

    }
    const confirm=()=>{
        const num=parseInt(value);
        if(isNaN(num)||num<=0||num>99){
            Alert.alert('Invalid number','Number has to be a valid one',[{text:'okay',style:'destructive',onPress:reset}]);
            return;
        }
        setNumber(num);
        setGameOver(false);
    }
    const reset=()=>{setValue('')}
    return(
        <>
        <View style={{marginTop:50,alignItems:'center'}}>
            <Title>Enter a number</Title>
        </View>
        <View style={styles.inputContainer}>
            
            <TextInput style={styles.TextInput}
            keyboardType="number-pad"
            value={value}
            maxLength={2}  
            onChangeText={valueHandler}
            />
            <View style={{flexDirection:"row",justifyContent:"center"}}>
                <View style={{flex:1}}>
                    <Primarybutton onPress={confirm}>Submit</Primarybutton>
                </View>
                <View style={{flex:1}}>
                    <Primarybutton onPress={reset}>Reset</Primarybutton>
                </View>
            </View>
        </View>
        </>
    );
}
const styles=StyleSheet.create({
    inputContainer:{
        marginTop:100,
        marginHorizontal:24,
        borderRadius:8,
        backgroundColor:"#4e0329",
        elevation:10,
        padding:15,
        alignItems:"center"
    },
    TextInput:{
        margin:5,
        height:50,
        fontSize:30,
        color:"#ddb52f",
        borderBottomColor:"#ddb52f",
        borderBottomWidth:3,
        width:50,
        textAlign:"center" 


    }
})