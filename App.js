import React, {useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,Image, ImageBackground, Alert} from 'react-native';
import * as Font from 'expo-font' 
import  {AppLoading} from 'expo'

import { LoginScreen } from './src/screens/LoginScreen';
import {RegistrScreen} from './src/screens/RegistrScreen'

async function loadAplication(){
  await Font.loadAsync({
      'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf')
  })
}

export default function App() {
  const [isReady,setIsReady] = useState(false)
  const [next,setNext] = useState(false)

  if(!isReady){
    return <AppLoading 
              startAsync={loadAplication} 
              onFinish={()=>setIsReady(true)}/>
  }

  const PressHandler=(action)=>{
      setNext(action)
  }
  
  let content = (
    <LoginScreen onSubmit={PressHandler} />
  )
  if(next!==false){
    content=<RegistrScreen onBack= {()=>setNext(false)}/>
  }

 
  
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={require('./assets/mainbg.png')}>
      {content}
      </ImageBackground>
    </View> 

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column'
  },
  img:{
      flex: 1,
      resizeMode: 'cover'
  }
});
