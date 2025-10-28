import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, Button, TextInput, Alert, ImageBackground, TextComponent, Animated, Easing, Platform } from 'react-native'

export default function Practica11() {
const[cargando, setCargando] = useState(true);
const desvanecido=new Animated.Value(1);
  const[nombre, setNombre] = useState('');
    const[password, setPassword] = useState('');
    const[telefono, setTelefono] = useState('');

    const mostrarAlerta = ()=>{
      if(nombre.trim() === '' || password.trim() === '' ){
        Alert.alert("Error porfavor ingresa todos los campos (movil)"); // solo se ve en el telefono
        alert("Error porfavor ingresa todos los campos (web)"); // para web
      }else{
        Alert.alert('Datos ingresados\n' + `Nombre: ${nombre}\n Password: ${password}`); //movil
        alert('Datos ingresados\n' + `Nombre: ${nombre}\n Correo Electronico: ${password}`);
      }
    }

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
      source={require('../assets/TD.jpg')}
      resizeMode='contain'
      style= {styles.splashImage}
      >
      <Text style={styles.splashText}> Technical Difficulties, please hold...</Text>
      </ImageBackground>
    </Animated.View>
  );

}
    return (
        <View style={styles.container}>
        <Text style={styles.titulo}>TextInput & Alert</Text>
        
        <Text style={styles.etiquetas}>Nombre: </Text>
        <TextInput 
          style={styles.inputs} 
          placeholder='Ingresa tu nombre ' 
          value={nombre} 
          onChangeText={setNombre}
        />
          
        
        <Text style={styles.etiquetas}>Correo electronico: </Text>
        <TextInput 
          style={styles.inputs} 
          placeholder='Ingresa tu correo electronico ' 
          keyboardType='phone-pad' 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry={true}
        />
          
        

        <Button title='Mostrar Alerta' onPress={mostrarAlerta}/>

      </View>

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
  marginBottom: -450,
  fontSize: 50,
  color: '#000000ff',
},
 container:{
    flex: 1,
    backgroundColor:'#ffffffff',
    alignItems:'center',
    justifyContent: 'center',  
  },
  titulo:{
    fontFamily: 'Times New Roman',
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20,
  }, 
  etiquetas:{
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  inputs:{
    width: '50%',
    borderWidth: 2,
    borderColor: '#106f59ff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'grey',
  },


})