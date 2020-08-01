import React from 'react';
import { StyleSheet, Text, View ,Button,TextInput, TouchableOpacity, Alert} from 'react-native';

export const FooterMain = ({onClick}) =>{
    
    return(
        <View style= {styles.container}>
            <Text style={{color: '#9c9c9c'}}>Don't have an account</Text>
            
            <TouchableOpacity onPress={PressHandler} style={styles.button}>
                <Text style={styles.textButton}>Sing up</Text>
            </TouchableOpacity>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 20,
        marginLeft: 20,
        color: '#9C9C9C'
    },
    textButton:{   
        marginLeft: 8,
        color: '#0063E0'
    }

})
