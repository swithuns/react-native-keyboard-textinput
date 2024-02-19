import { Keyboard, Pressable, TextInputProps, TextStyle, TextInput as TextInput  } from "react-native";
import useTextInputStore from "./textInputStore";
import { KeyboardTextInput } from "./textInput";
import { useRef, useState } from "react";

interface TextInputButtonInterface {
    onPressStyle?:TextStyle
}

const TextInputOnPress: React.FC<TextInputButtonInterface & TextInputProps & KeyboardTextInput> = ({onPressStyle, keyboardId, children, ...props}) => {
    const textInputRef = useRef<TextInput>(null);

    const handlePress = () => {
        textInputRef.current?.focus();
    }
    const [id] = useState(Math.random().toString(36).substring(7));
    const { setId, setInputProps, setKeyboardId } = useTextInputStore();

    const setFocused = () => {
        setInputProps(props)
        keyboardId? setKeyboardId(keyboardId): setKeyboardId(0)
        setId(id);
      };


    return (
        <Pressable onPress={handlePress} style={onPressStyle}>
            {children}
            <TextInput ref={textInputRef} onFocus={() => {
        setFocused();
      }} style={{display:'none'}} />
        </Pressable>
    )
}

export default TextInputOnPress


