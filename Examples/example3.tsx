import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput, TextInputOnPress } from 'react-native-keyboard-textinput';

const styles = StyleSheet.create({
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius:25,
    alignSelf:'center',
    textAlign:'center',
    fontSize:25,
    color:'blue',
    padding:20,
    marginBottom: 50,
    width: 200,
  },
});

const ModifiedSearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState({});


  return (
    <ScrollView style={{maxHeight: 200}}>
      <TextInputOnPress
        keyboardId={1}
        style={styles.input}
        customOnChange={setResults}
        onChangeText={setInputValue}
        numberOfLines={5}
      >
        <Text style={styles.input}>
            Search!
        </Text>
      </TextInputOnPress>
      <Text>Search results: {JSON.stringify(results)}</Text>
    </ScrollView>
  );
};

export default ModifiedSearchInput;