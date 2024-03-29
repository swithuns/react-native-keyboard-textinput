import React, { useEffect, useState } from "react";
import useTextInputStore from "./textInputStore";
import { StyleSheet, TextInput as NativeTextInput, View, TextInputProps, TextStyle, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";

export interface KeyboardTextInput {
    keyboardId?: number,
    customOnChange?: (input:any) => void,
    customData?: any
    ref?: React.LegacyRef<NativeTextInput>
}

export interface CustomKeyboardInputInterface extends TextInputProps{
    customOnChange?: (input:any) => void,
    customData?: any
}

export const TextInput: React.FC<TextInputProps & KeyboardTextInput> = React.forwardRef(({
    keyboardId,
    onSubmitEditing,
    ...props
  }, ref) => {
    //handler for onSubmitEditing, simple trigger so that state objects not strictly needed by the keyboardinput don't need to be passed as globals
    const [submit, setSubmit] = useState<NativeSyntheticEvent<TextInputSubmitEditingEventData> | false>(false);
    useEffect(()=>{
      if(submit){
        onSubmitEditing && onSubmitEditing(submit);
        setSubmit(false);
      }
    }, [submit])


    const [id] = useState(Math.random().toString(36).substring(7));
    const { setId, setInputProps, setKeyboardId, inputId } = useTextInputStore();

    useEffect(()=>{
        return()=>{
            if(inputId === id){
                setId('');
            }
        }
    }, [inputId])
  
    const setFocused = () => {
      const inputProps = {...props, onSubmitEditing:onSubmitEditing && setSubmit};
      setInputProps(inputProps)
      keyboardId? setKeyboardId(keyboardId): setKeyboardId(0);
      console.log(id);
      setId(id);
    };
    
    return (
        <NativeTextInput
          onFocus={() => {
            setFocused();
          }}
          ref={ref}
          {...props}
          
          
          style={[styles.text, props.style]}
        />
    );
  });

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
  