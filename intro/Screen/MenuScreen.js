import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import ActivityScreen from './ActivityScreen';
import FlatlistScreen from './FlatlistScreen';
import ModalScreen from './ModalScreen';
import TextoScreen from './TextoScreen';
import ImagenesScreen from './ImagenesScreen';
import ScrollScreen from './ScrollScreen';

export default function MenuScreen (){
    const[screen, setScreen] = useState('menu');

    switch (screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>; 
            case 'activity':
            return <ActivityScreen/>; 
            case 'flatlist':
            return <FlatlistScreen/>; 
            case 'modal':
            return <ModalScreen/>; 
            case 'texto':
            return <TextoScreen/>;
            case 'imagenes':
            return <ImagenesScreen/>;
            case 'scroll':
            return <ScrollScreen/>;
        case 'menu':
            default:
                return (
                    <View>
                        <Text>MenuScreen</Text>
                        <Button onPress={()=>setScreen ('contador')} title='Pract: Contador'> </Button>
                        <Button onPress={()=>setScreen ('botones')} title='Pract: Buttons'> </Button>
                        <Button onPress={()=>setScreen ('activity')} title='Pract: Actividad'> </Button>
                        <Button onPress={()=>setScreen ('flatlist')} title='Pract: Flatlist'> </Button>
                        <Button onPress={()=>setScreen ('modal')} title='Pract: Modal'> </Button>
                        <Button onPress={()=>setScreen ('texto')} title='Pract: Texto'> </Button>
                        <Button onPress={()=>setScreen ('imagenes')} title='Pract: Imagenes'> </Button>
                        <Button onPress={()=>setScreen ('scroll')} title='Pract: Scroll'> </Button>

                        
                    </View>
        )        
    }

    
}

const styles =  StyleSheet.create({})