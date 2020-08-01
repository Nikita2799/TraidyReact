import React, { useState } from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'

import {Header} from './component/LoginComp/Header';
import {SingIn} from './component/LoginComp/SingIn';
import {FooterMain} from './component/LoginComp/FooterMain'
import { AppButton } from './component/ui/AppButton';

export const LoginScreen = ({onSubmit}) =>{
    const PressHandler =()=>{
        onSubmit(true)
    }
    return(
        <View style={styles.container}>
                <Header/>
                <SingIn/>

                <View style= {styles.footer}>
            <Text style={{color: '#9c9c9c'}}>Don't have an account</Text>
            
            <AppButton onPress={PressHandler} styles={styles.textButton}>
                    <Text style={{color:'#0063E0'}}>Sing up</Text>
            </AppButton>
          
        </View>
                
        </View>
    )

    
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    footer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 20,
        marginLeft: 20,
        color: '#9C9C9C'
    },
    textButton:{  
        color: '#FFFF', 
        marginLeft: 8,
        
    },
    
    img:{
        flex: 1,
        resizeMode: 'cover'
    }
})