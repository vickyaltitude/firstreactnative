import { StyleSheet,View,Text,Button} from 'react-native';
import { useState } from 'react';

export default function TabTwoScreen() {

  const [count,setCount] = useState(0)
  
  return (
    <View style={styles.container}>
    
      <Text style={styles.text}>
        {count}
      </Text>
      <View style={styles.buttons}>
        <Button onPress={()=> setCount(count+1)} title='increment' />
        <Button onPress={()=> setCount(count-1)} title='decrement' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 

  container:{
    flex:1,
    backgroundColor: 'black',
     alignItems: 'center',
    justifyContent: 'center' ,
    paddingRight: 20
  }
     ,
       text:{
       
        color:'white',
        justifyContent: 'center',
        alignItems: 'center',
      
       },
       buttons:{
        width: 200,
         flexDirection: 'row',
          justifyContent: 'space-between'
       }
});
