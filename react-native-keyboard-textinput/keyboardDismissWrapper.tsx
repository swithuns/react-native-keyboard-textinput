import { ReactNode } from "react";
import { Pressable, Keyboard } from "react-native";

type KeyboardDismissWrapperType = {
    children:ReactNode;
    style?:any;
}

const KeyboardDismissWrapper:React.FC<KeyboardDismissWrapperType> = ({children, style}) => {
    return(
        <Pressable style={{flex:1, ...style}} onPress={Keyboard.dismiss} accessible={false}>
            {children}
        </Pressable>
    )
}
export default KeyboardDismissWrapper;