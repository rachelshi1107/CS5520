import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import  Header  from './components/Header';
import Input from './components/Input';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const onTextAdd = function (newText) {
    console.log(newText);
    setModalVisible(false)
  }
  const makeModalVisible =()=>{setModalVisible(true)}
  const cancelModalVisible =()=>{cancelModalVisible(true)}
  const name = "Awesome";
  
  return (
    <View style={styles.container}>
      
      <Header>appName = {name}</Header>
      <Button title='Add a Goal' onPress={makeModalVisible(true)}/>
      <Input mondal = {modalVisible} onAdd={onTextAdd} onCancel={cancelModalVisible}></Input>
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
