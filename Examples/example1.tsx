import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-keyboard-textinput';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: 200,
  },
});

const SimpleTextInput = () => {
  const [inputValue, setInputValue] = useState('');
  const val = 'Keyboard Returned'


  return (
    <View style={styles.container}>
      <Text>Enter your text:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={(e)=>setInputValue(val)}
      />
      <Text>You entered: {inputValue}</Text>
    </View>
  );
};

export default SimpleTextInput;