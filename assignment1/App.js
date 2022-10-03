import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';

let correctAnswer = generateRandomNumber(1020, 1030);
let userNumber;
let hint;
let result;
let content;

function generateRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  return randomNum;
};

export default function App() {
  const [screen, setScreen] = useState('startGame');

  const compareNumber = function (number) {
    userNumber = number;
    if (userNumber < correctAnswer) {
      hint = 'upper';
    } else if (userNumber > correctAnswer) {
      hint = 'lower';
    } else {
      hint = 'hit';
    }
    setScreen('game');
  }

  const guessAgain = function () {
    setScreen('startGame');
  }

  const finishGame = function () {
    if (hint === 'hit') {
      result = true;
    } else {
      result = false;
    }
    setScreen('gameOver');
  }

  const startOver = function () {
    correctAnswer = generateRandomNumber(1020, 1030);
    setScreen('startGame');
  }

  if (screen === 'startGame') {
    content = <StartGameScreen onStartGame={compareNumber} />;
  } else if (screen === 'game') {
    content = <GameScreen userNumber={userNumber} hint={hint} guessAgain={guessAgain} finishGame={finishGame} />;
  } else {
    content = <GameOverScreen startOver={startOver} result={result} correctAnswer={correctAnswer} />;
  }

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.background} start={{ x: 0.5, y: 0 }} colors={[ '#9b63cd', '#f1cbf7']} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  }
});
