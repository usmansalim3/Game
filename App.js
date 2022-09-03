import { StatusBar } from 'expo-status-bar';
import Primarybutton from "./components/Primarybutton";
import { Button, StyleSheet, Text, View } from 'react-native';
import GameStart from "./Screens/GameStart";
import {LinearGradient} from "expo-linear-gradient"
import { useState } from 'react';
import GameScreen from './Screens/GameScreen';
import GameOver from './Screens/GameOver';


export default function App() {
  const[number,setNumber]=useState();
  const[gameOver,setGameOver]=useState(true);
  const[guessRounds,setGuessRounds]=useState(0);
  const gameOverHandler=()=>{setGameOver(true)}
  const startNewGame=()=>{
    setNumber(null)
    setGuessRounds(0)
  }
  let screen=<GameStart setNumber={setNumber} setGameOver={setGameOver} />
  if(number){
    screen=<GameScreen number={number} gameOverHandler={gameOverHandler}/>
  }
  if(number&&gameOver){
    screen=<GameOver number={number} startNewGame={startNewGame} rounds={guessRounds} />
  }
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.container}>
      {screen}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
