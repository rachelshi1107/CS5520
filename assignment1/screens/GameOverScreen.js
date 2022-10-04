import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

import Header from '../components/Header';
import Card from '../components/Card';

const GameOverScreen = props => {
    const { startOver, result, correctAnswer } = props;
    
    // the uri of the image based on the chosen number
    const uri = 'https://picsum.photos/id/' + correctAnswer + '/100/100';

    return (
        <View style={styles.container}>
            <Header title="Game is over" />
            <Card style={styles.inputContainer}>
                    <Text style={styles.title}>Here's your picture</Text>
                    <View style={styles.imageContainer}>
                        <Image source={result ? {uri: uri} : require("../assets/images/unamused.jpeg")}
                            style={styles.image}
                        />
                    </View>
                    <Button title="Start Again" onPress={startOver} color={Colors.primary}></Button>
            </Card>
        </View>
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
        textAlign: 'center',
        marginTop: 2,
        marginLeft: 8,
        marginRight: 8
    },
    imageContainer: {
        width: 200,
        maxWidth: "80%",
        alignItems: 'center',
        marginTop: 2
    },
    image: {
        width: 55,
        height: 55
    }
});

export default GameOverScreen;