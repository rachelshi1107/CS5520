import React from "react";
import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import colors from "../constants/colors";

import Card from '../components/Card';
import { LinearGradient } from 'expo-linear-gradient';

const GameSceen = props => {
    const { userNumber, hint, finishGame, guessAgain } = props;

    return (
        <><Modal transparent={true} visible={hint == 'hit' ? false : true}>
            <View style={styles.container}>
            
                <Card style={styles.inputContainer}>
                    <View>
                        <Text style={styles.title}>You have chosen {userNumber}</Text>
                        <Text style={styles.title}>That's not my number!</Text>
                        <Text style={styles.title}>Guess {hint}!</Text>
                    </View>
                    <Button title="I am done" onPress={finishGame} color={colors.accent} />
                    <Button title="Let Me Guess Again" onPress={guessAgain} color={colors.primary} />
                </Card>
            </View>
        </Modal><Modal transparent={true} visible={hint == 'hit' ? true : false}>
                <View style={styles.container}>
                
                    <Card style={styles.inputContainer}>
                        <View>
                            <Text style={styles.title}>Congrats! You Won!</Text>
                        </View>
                        <Button title="Thank you!" onPress={finishGame} color={colors.primary} />
                    </Card>
                </View>
            </Modal></>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        color: '#daa520',
        textAlign: 'center',
        marginTop: 2,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameSceen;