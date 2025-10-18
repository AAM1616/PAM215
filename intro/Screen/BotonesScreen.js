import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React,{useState} from 'react';


export default function BotonesScreen() {
  const [esEncendido, cambiarEncendido] = useState(false);
  const [color, cambiarColor] = useState('yellow');
  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Control de luz</Text>
        <Text style={[styles.luz, {color: esEncendido ? color: 'black'}]}>
          {esEncendido ? 'Luz encendida' : 'Luz apagada'}
        </Text>
        <Switch
        value={esEncendido}
        onValueChange={() => cambiarEncendido(!esEncendido)}
        trackColor={{true: 'yellow', false: 'gray'}}
        ></Switch>
        <View style={styles.cajaBotones}>
        <Button
        title='Amarillo'
        onPress={() =>esEncendido && cambiarColor('yellow')}
        color= '#b4e83aff'
        ></Button>
        <Button
        title='Azul'
        onPress={() =>esEncendido && cambiarColor('blue')}
        color= '#5829c7ff'
        ></Button>
                 
        <Button
        title='Rojo'
        onPress={() =>esEncendido && cambiarColor('red')}
        color='#e02c2cff'
        ></Button>
        </View>

      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1, //
    backgroundColor: '#000000ff', // color del fondo
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  cajaBotones: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },
  titulo: {
    fontSize : 40,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  luz: {
    fontSize: 30,
    marginBottom: 15
  },
})