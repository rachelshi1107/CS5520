import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';

// this is the correct number the game generates
let correctAnswer = generateRandomNumber(1020, 1030);

// this is the number user has guessed
let userNumber;

// this is the hint given to user based on the guess
let hint;

// this is the boolean whether the user wins or not
let result;

// this is the screen that needs to display
let content;

// this function generates a random number between 1020 and 1029
// and this is the correct answer
function generateRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  return randomNum;
};

export default function App() {
  const [screen, setScreen] = useState('startGame');

  // this method compares the user guess and correct answer
  // and assigns corresponding value to hint
  // and sets game screen
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

  // this method allows the user to guess again
  // and resets start game screen
  const guessAgain = function () {
    setScreen('startGame');
  }

  // this method determines if the user wins
  // and sets gameover screen
  const finishGame = function () {
    if (hint === 'hit') {
      result = true;
    } else {
      result = false;
    }
    setScreen('gameOver');
  }

  // this method allows the user to start over
  const startOver = function () {
    correctAnswer = generateRandomNumber(1020, 1030);
    setScreen('startGame');
  }

  // displays corresponding screen according to the value of screen
  if (screen === 'startGame') {
    content = <StartGameScreen onStartGame={compareNumber} />;
  } else if (screen === 'game') {
    content = <GameScreen userNumber={userNumber} hint={hint} guessAgain={guessAgain} finishGame={finishGame} />;
  } else {
    content = <GameOverScreen startOver={startOver} result={result} correctAnswer={correctAnswer} />;
  }

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.background} start={{ x: 0.5, y: 0 }} colors={[Colors.dark, Colors.light]} />
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
