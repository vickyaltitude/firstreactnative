import { useState } from 'react';
import {  StyleSheet} from 'react-native';

import { View,Text,ScrollView,FlatList} from 'react-native';

export default function HomeScreen() {
   
 // const [text,setText] = useState('');
  const alphabetArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const alphabetMap = alphabetArr.map((letter,ind) => ({letterText: letter,key: ind}) )
  return (
    <View style={styles.container}>
     
     
      <Text style={styles.textContainer}>
      Hello world
      </Text>
      <FlatList

      data={alphabetMap}

       renderItem={(letter) => <Text style={styles.letters}>{letter.item.letterText}</Text>}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({

  textContainer:{
   color: '#fff'
  },
  letters:{
    color: '#fff',
    paddingBottom: 40
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
