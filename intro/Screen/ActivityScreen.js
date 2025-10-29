import { Text, StyleSheet, View, ActivityIndicator, Button} from 'react-native'
import React, { useState } from 'react'

export default function ActivityScreen () {


    const [loading, setLoading] = useState (false);
    const startLoading = () =>{
      setLoading(true);
      setTimeout(()=> setLoading(false), 3000)
    };

    if(loading){
      return(
      <View style={styles.container}>
        <View style={styles.loadercontainer}>
          <ActivityIndicator
              size="large"
              color="#008ed5ff"
              animating={true}
              hidesWhenStopped={true}
          />
          <Text style={styles.texto}>Cargando...</Text>
        </View>
      </View>
      );
    }
    return(
      <View>
        <Text style={styles.title} >ActivityIndicator</Text>
        <Button
        title="carga de datos" onPress={startLoading}/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000ff',
  },
  texto: {
    color: '#ffffffff',
  },
  title: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loadercontainer: {
    alignItems: 'center',

}
})