import React, { useState } from 'react';
import { Button, View, TextInput } from 'react-native';

export default function Input(props) {
    const[text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={{height: 40}}
        placeholder="Type here!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Button 
      title="Confirm" 
      onPress={() => {
          props.onAdd(text);
          props.alsoAdd();
          setText("");}
       }
      />
    </View>
  )
}