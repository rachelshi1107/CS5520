import React, { useState } from 'react';
import { Button, View, TextInput } from 'react-native';

export default function Input({onAdd, modal, onCancel}) {
    const[text, setText] = useState('');
  return (
    <Modal visible = {modal}>
    <View style ={styles.container}>
      <TextInput
        onChangeText={newText => setText(newText)}
        value = {text}
        placeholder = "Put Text"
      />
      <Button 
      title="Confirm" 
      onPress={() => {
          props.onAdd(text);
          props.alsoAdd();
          setText("");}
       }
      />
      <Button
      title="Cancel" 
      onPress={onCancel}
      />
    </View>
    </Modal>
  )
}