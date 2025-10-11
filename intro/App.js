import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

export default function App() {

  const[contador, setContador]= useState(0);

  return (
    
    <View style={styles.container}>

      <Text>contador: {contador}</Text>
      <Button title='Aumentar' onPress={()=>setContador(contador + 1)}> </Button>
      <Button title='Quitar' onPress={()=>setContador(contador - 1)}> </Button>
      <Button title='Reinicio' onPress={()=>setContador(contador == 0)}> </Button>

    
      <StatusBar style="auto" />

    </View>

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