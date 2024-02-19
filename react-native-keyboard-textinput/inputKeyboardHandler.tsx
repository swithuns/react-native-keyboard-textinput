import useTextInputStore from "./textInputStore";
import React, { useState, useEffect, useRef, ReactNode } from "react";
import { View, TextInput, Keyboard, StyleSheet, TextInputProps, TextStyle, Platform, Pressable } from "react-native";
import { CustomKeyboardInputInterface } from "./textInput";



interface InputKeyboardHandlerInterface {
 style?: TextStyle,
 customTextBoxes?: React.FC<CustomKeyboardInputInterface>[]
}

const InputKeyboardHandler: React.FC<InputKeyboardHandlerInterface> = ({
  style,
  customTextBoxes
 

}) => {
  const [text, setText] = useState<string | undefined>('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const textInputRef = useRef<TextInput>(null);
  const {
    setId,
    inputProps,
    inputId,
    keyboardId
  } = useTextInputStore();

  useEffect(()=> {
    if(inputProps.value != text){
      setText(inputProps.value);
    }
  }, [inputProps.value, inputId])

  useEffect(() => {
    inputId && textInputRef?.current?.focus();
  }, [inputId]);

  useEffect(() => {
    if(Platform.OS === 'ios'){
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }
  }, []);
  if (!inputId) return null;


  const adjustedInputProps : TextInputProps = {...inputProps, onBlur:(e) => {
    setId("");
    inputProps.onBlur && inputProps.onBlur(e)
  },
  value:text,
  onChangeText:(text)=> {setText(text); inputProps.onChangeText && inputProps.onChangeText(text)}
 }
  if(keyboardId && keyboardId > 0 && customTextBoxes?.length && customTextBoxes.length > keyboardId -1){
   
       const Box = customTextBoxes[keyboardId - 1];
        return(
           <Pressable style={[styles.textInput, { bottom: keyboardHeight }]}>
              <Box ref={textInputRef} {...adjustedInputProps} />
           </Pressable>
        )
  }
 
  return (
    <TextInput
      {...inputProps} 
      ref={textInputRef}
      style={[styles.textInput, style, { bottom: keyboardHeight }]}
      onBlur={(e) => {
        setId("");
        inputProps.onBlur && inputProps.onBlur(e)
      }}
      value={text}
      onChangeText={(text)=> {setText(text); inputProps.onChangeText && inputProps.onChangeText(text)}}
    />
  );
};
const styles = StyleSheet.create({
  textInput: {
    position:'absolute',
    width:'100%',
    padding: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    backgroundColor: "white",
    borderWidth: 1,
  },
});

export default InputKeyboardHandler;