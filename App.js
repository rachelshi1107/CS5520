import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import  Header  from './components/Header';

export default function App() {
  const name = "Awesome";
  const[text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Header>appName = {name}</Header>
      <Text>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
