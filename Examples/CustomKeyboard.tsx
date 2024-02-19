import { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { CustomKeyboardInputInterface } from "react-native-keyboard-textinput";
import { TextInput } from "react-native";



const styles = StyleSheet.create({
    textInput:{
        padding:5,
        borderColor:'black',
        borderWidth:1,
        marginBottom:20
    }
})
type SearchTermType = {
    searchTerm:string,
    tags: string[]
}
const tags = ['React-Native', 'React', 'Keyboards', 'Cheese']
const CustomKeyboard: React.FC<CustomKeyboardInputInterface> = ({ customOnChange, style, ...props}) => {
    const [searchTerms, setSearchTerms] = useState<SearchTermType>({searchTerm:'', tags:[]});
    const ref = useRef<TextInput>(null);
    useEffect(()=>{
        ref.current && ref.current.focus();
    },[])
    const toggleTag = (tag: string) => {
        setSearchTerms((prevSearchTerms) => {
          const isTagPresent = prevSearchTerms.tags.includes(tag);
    
          if (isTagPresent) {
            // If tag is present, remove it
            return {
              ...prevSearchTerms,
              tags: prevSearchTerms.tags.filter((existingTag) => existingTag !== tag),
            };
          } else {
            // If tag is not present, add it
            return {
              ...prevSearchTerms,
              tags: [...prevSearchTerms.tags, tag],
            };
          }
        });
      };
    return(
        <>
        <TextInput returnKeyType={'search'} ref={ref} onSubmitEditing={()=> customOnChange && customOnChange(searchTerms)} ref={ref} {...props} style={styles.textInput} onChangeText={(text) => setSearchTerms({tags:searchTerms.tags,searchTerm:text})}/>
        {tags.map((tag, index) => {
            return(
                <Tag key={'tag' + index} onPress={toggleTag} label={tag} isTagged={searchTerms.tags.includes(tag)} />
            )
        })}
        


        </>
        
    )
} 
interface TagProps {
    onPress: (value: string) => void;
    isTagged: boolean;
    label: string;
  }
const Tag: React.FC<TagProps> = ({ onPress, isTagged, label }) => {
    return (
      <Pressable onPress={() => onPress(label)} style={stylesTags.tagContainer}>
        <View style={stylesTags.textContainer}>
          <Text>{label}</Text>
        </View>
        <View style={stylesTags.iconContainer}>
          <Text>{isTagged ? '-' : '+'}</Text>
        </View>
      </Pressable>
    );
  };

  const stylesTags = StyleSheet.create({
    tagContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#ccc',
      margin: 5,
    },
    textContainer: {
      flex: 1,
    },
    iconContainer: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default CustomKeyboard;