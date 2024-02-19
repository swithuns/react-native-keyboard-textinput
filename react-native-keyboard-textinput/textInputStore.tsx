
import { KeyboardTypeOptions, TextInputProps } from "react-native";
import { create } from "zustand";

type textInputStore = {
    keyboardId: number;
    inputProps: TextInputProps;
    inputId: string;
    setInputProps: (props: TextInputProps) => void;
    setId: (id: string) => void;
    setKeyboardId: (id: number) => void;
  };
  
  const useTextInputStore = create<textInputStore>((set) => ({
    inputProps:{},
    setInputProps: (props) => set({inputProps:props}),
    inputId: '',
    keyboardId: 0,
    setId: (id) => set({inputId:id}),
    setKeyboardId: (id) => set({keyboardId:id}),
  }));
  
  export default useTextInputStore;