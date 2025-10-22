import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, ImageBackground, TextComponent, Animated, Easing } from 'react-native'

export default function ImagenesScreen() {
const[cargando, setCargando] = useState(true);
const desvanecido=new Animated.Value(1);

useEffect(()=>{
  const timer = setTimeout(()=>{
  Animated.timing(desvanecido,{
  toValue: 0,
  duration: 800,
  easing: Easing.out(Easing.ease),
  useNativeDriver: true,
  }).start(() => setCargando(false));

  }, 2000);
  return () => clearTimeout(timer);
},[]);
if(cargando){
  return(
    <Animated.View style={[styles.splashConteiner, {opacity: desvanecido}]}>
      <ImageBackground
      source={require('../assets/Silson.png')}
      resizeMode='contain'
      style= {styles.splashImage}
      >
      <Text style={styles.splashText}> Cargando...</Text>
      </ImageBackground>
    </Animated.View>
  );

}
    return (
        <ImageBackground
          source={require('../assets/Tenna.png')}
          resizeMode='cover'
          style= {styles.backgrounds}
          >
            <Text style= {styles.texto}>Chinguen a su madre... digo Shaw</Text>
        </ImageBackground>
      //<View>
      //  <Text>Proximamente por Charly...</Text>
      //</View>

    )
  }


const styles = StyleSheet.create({
backgrounds:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
///////////////////////////////
width: '100%',
height: '100%',
},
texto:{
  color: 'white',
  fontSize: '24',
  fontWeight: 'bold',
},
splashConteiner:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  padding:50,

},
splashImage:{
  flex:1,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}, 
splashText:{
  position: 'absolute',
  marginBottom: 60,
  fontSize: 30,
  color: '#23bda1ff',
},


})