import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Header from '../components/Header';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const { onStartGame } = props;

    // remove any text that is not number
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    // reset the user input
    const resetInputHandler = () => {
        setEnteredValue('');
    }

    // check if the user input is valid, if invalid then shows an alert to the user
    // else starts the game
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (chosenNumber === isNaN(chosenNumber) || chosenNumber < 1020 || chosenNumber > 1029) {
            Alert.alert(
                "Invalid Number",
                "Number has to be a number between 1020 and 1029",
                [
                  {
                    text: "Okay",
                    style: "destructive",
                    onPress: resetInputHandler
                  }
                ]
            );
        } else {
            onStartGame(chosenNumber);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
              <Header title="Guess My Number" />
                <Card style={styles.inputContainer}>
                    <Text style={styles.title}>Enter a Number</Text>
                    <Input 
                    style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    keyboardType="number-pad" 
                    maxLength={4}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/>
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: Colors.gold,
        textAlign: 'center'
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartGameScreen;