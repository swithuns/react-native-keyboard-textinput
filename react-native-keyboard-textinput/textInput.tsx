import { useEffect, useState } from "react";
import useTextInputStore from "./textInputStore";
import { StyleSheet, TextInput as NativeTextInput, View, TextInputProps, TextStyle } from "react-native";

export interface KeyboardTextInput {
    keyboardId?: number,
    customOnChange?: (input:any) => void,
    customData?: any
}

export interface CustomKeyboardInputInterface extends TextInputProps{
    customOnChange?: (input:any) => void,
    customData?: any
}

export const TextInput: React.FC<TextInputProps & KeyboardTextInput> = ({
    keyboardId,
    ...props
  }) => {
    const [id] = useState(Math.random().toString(36).substring(7));
    const { setId, setInputProps, setKeyboardId, inputId } = useTextInputStore();

    useEffect(()=>{
        return()=>{
            if(inputId === id){
                setId('');
            }
        }
    }, [])
  
    const setFocused = () => {
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
          style={[styles.text, props.style]}
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
  