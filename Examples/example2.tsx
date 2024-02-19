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
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: 200,
  },
});

const ButtonTriggeredMultiLineTextInput = () => {
  const [inputValue, setInputValue] = useState('');


  return (
    <View style={styles.container}>
      <Text>Multiline text:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={inputValue}
        onChangeText={setInputValue}
        multiline
        numberOfLines={5}
      />
      <Text>You entered: {inputValue}</Text>
    </View>
  );
};

export default ButtonTriggeredMultiLineTextInput;