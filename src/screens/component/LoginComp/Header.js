import React from 'react';
import {Text,View,StyleSheet} from 'react-native'
export const Header = () =>{
    
    return(
        <View style = {styles.container}>
            <Text style ={styles.welcomeText} >Welcome</Text>
            <Text style={styles.singText}>sing in to continue</Text>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 40,
        paddingVertical: 70
    },
    welcomeText:{
        fontSize: 36,
        fontWeight:'normal',
        lineHeight: 49,
        color: '#FFFF',
        fontFamily: 'open-sans-light'
    },
    singText:{
        fontSize: 24,
        lineHeight:33,
        fontWeight:'normal',
        color: '#9c9c9c',
        fontFamily: 'open-sans-light'
    }
});