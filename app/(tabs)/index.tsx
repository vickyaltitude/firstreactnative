import { useState } from 'react';
import {  StyleSheet} from 'react-native';

import { View,Text,Button,TextInput } from 'react-native';

export default function HomeScreen() {
   
  const [text,setText] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.textContainer}>
      Hello world
      </Text>
      <TextInput onChangeText={(newText) => setText(newText)} style={styles.inputContainer} placeholder='type something...' />
      <Text style={styles.textContainer}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  textContainer:{
   color: '#fff'
  },

  inputContainer:{
    backgroundColor: '#fff'
  }
 ,
  container:{
    flex:1,
    backgroundColor: 'black',
     alignItems: 'center',
    justifyContent: 'center' ,
    paddingRight: 20
  },
 

});
