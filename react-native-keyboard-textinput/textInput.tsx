import { useEffect, useState } from "react";
import useTextInputStore from "./textInputStore";
import { StyleSheet, TextInput as NativeTextInput, View, TextInputProps, TextStyle } from "react-native";

export interface KeyboardTextInput {
    keyboardId?: number,
    customOnChange?: (input:any) => void,
    nonKeyboardStyle?: TextStyle
}

export interface CustomKeyboardInputInterface extends TextInputProps{
    customOnChange?: (input:any) => void,
}

export const TextInput: React.FC<TextInputProps & KeyboardTextInput> = ({
    nonKeyboardStyle,
    keyboardId,
    ...props
  }) => {
    const [id] = useState(Math.random().toString(36).substring(7));
    const { setId, setInputProps, setKeyboardId } = useTextInputStore();
  
    const setFocused = () => {
      console.log(keyboardId);
      setInputProps(props)
      keyboardId? setKeyboardId(keyboardId): setKeyboardId(0)
      setId(id);
    };
    
    return (
        <NativeTextInput
          onFocus={() => {
            setFocused();
          }}
          {...props}
          style={[styles.text, props.style, nonKeyboardStyle]}
        />
    );
  };

  const styles = StyleSheet.create({
        text: {
          padding: 5,
          paddingHorizontal: 15,
          fontSize: 13,
          backgroundColor: "white",
          borderRadius: 10,
          borderWidth: 1,
          borderColor:'grey',
          margin: 5,
        },
  });
  