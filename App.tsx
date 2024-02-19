import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { InputKeyboardHandler, KeyboardDismissWrapper } from 'react-native-keyboard-textinput';
import SimpleTextInput from './Examples/example1';
import MultiLineTextInput from './Examples/example2';
import ModifiedSearchInput from './Examples/example3';
import CustomKeyboard from './Examples/CustomKeyboard';

type Tabs = 'Example1' | 'Example2' | 'Example3' | ''

export default function App() {
  const [tab, setTab] = useState<Tabs>('');
  const displayTab = () => {
    switch(tab){
      case 'Example1':
        return (<><SimpleTextInput /></>)
      case 'Example2':
        return (<><MultiLineTextInput /></>)
      case 'Example3':
        return (<><ModifiedSearchInput/></>)
      default:
        return(
          <>
          <Button onPress={()=>setTab('Example1')} title='Example 1' />
          <Button onPress={()=>setTab('Example2')} title='Example 2' />
          <Button onPress={()=>setTab('Example3')} title='Example 3' />
          </>
        )
        
    }

  }
  return (
    <KeyboardDismissWrapper>
      <View style={styles.container}>
        {displayTab()}
        { tab !== '' && (
            <Button onPress={()=>setTab('')} title='Back' />
        )
        }

        <StatusBar style="auto" />
        <InputKeyboardHandler customTextBoxes={[CustomKeyboard]} />
      </View>
    </KeyboardDismissWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
