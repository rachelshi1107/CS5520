import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 170,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'navy',
        fontSize: 20,
        borderWidth: 2,
        borderColor: 'navy',
        padding: '3.7%'
    }
});

export default Header;