import React, { useEffect, useState } from "react";
import { View,Text, Alert, FlatList} from "react-native";
import Title from "../components/Title"
import NumberContainer from "../components/NumberContainer";
import Primarybutton from "../components/Primarybutton";
import Card from "../components/Card";
import { Ionicons} from "@expo/vector-icons";
import Log from "../components/Log";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
} 
let minBoundary=1,maxBoundary=100;
export default function GameScreen({number,gameOverHandler}){
    const initialGuess=generateRandomBetween(1,100,number);
    const[currentGuess,setCurrentGuess]=useState(initialGuess);
    const [guessRounds,setGuessRounds]=useState([initialGuess]);
    useEffect(()=>{
        if(number===currentGuess) gameOverHandler();
    },[currentGuess,gameOverHandler,number])
    function nextGuessHandler(direction){
        if((direction==='lower'&&currentGuess<number)||(direction==='greater'&&currentGuess>number)){
            Alert.alert("Don't lie","You know this is wrong",[{text:"sorry",style:"cancel"}]);
            return;
        }
        if(direction==='lower'){
            maxBoundary=currentGuess;
        } else{
            minBoundary=currentGuess+1;
        }
        const newRndNumber=generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevRounds)=>[newRndNumber,...prevRounds]);
    }
    useEffect(()=>{
        minBoundary=1;
        maxBoundary=100;
    },[])

    return(
        <View style={{marginTop:70,flex:1}}>
            <View style={{marginHorizontal:15,marginVertical:10}}>
                <Title>Opponent's Guess</Title>
            </View>
            <View style={{marginHorizontal:40,marginVertical:15}}>
                <NumberContainer>{currentGuess}</NumberContainer>
            </View>
            <Card>
                <Text style={{fontSize:25,textAlign:'center',color:"#ddb52f",margin:5}}>PICK A CHOICE</Text>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Primarybutton onPress={nextGuessHandler.bind(this,"greater")}><Ionicons name="md-add" size={20} color="white"/></Primarybutton>
                    </View>
                    <View style={{flex:1}}>
                        <Primarybutton onPress={nextGuessHandler.bind(this,"lower")}><Ionicons name="md-remove" size={20} color="white"/></Primarybutton>
                    </View>
                </View>
            </Card>
            <View style={{flex:1,margin:25}}>
                <FlatList
                data={guessRounds}
                renderItem={(itemData)=><Log roundNumber={itemData.index+1} guess={itemData.item}/>}
                keyExtractor={(item)=>item}
                />
            </View>
        </View>
    );
}