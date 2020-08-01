import React from 'react'
import {View,StyleSheet,Text, TextInput, TouchableOpacity} from 'react-native'

export const Inputs = ()=>{
    return(
        <View>
            <Text style={styles.text}>Login</Text>
            <View style= {styles.inputView}>
                <TextInput style={styles.input}/>
            </View>
            <Text style={styles.text}>Password</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.input}/>
            </View>
            <View style= {styles.buttonPozition}>
                <TouchableOpacity style={styles.buttonSingIn}>
                    <Text style={styles.textButton}>Sign up</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    inputView:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        fontFamily: 'open-sans-light',
        width: '90%',
        height: 30,
        backgroundColor: '#243D61',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#9c9c9c',
        marginBottom: 30,
        marginTop: 10,
        color: '#ffff',
        paddingLeft: 10
        
    },
    text:{
        fontFamily:'open-sans-light',
        color: '#FFFF',
        fontWeight: '800',
        fontSize: 15,
        marginHorizontal: 20
    },
    buttonSingIn:{
        width: '90%',
        height: 35,
        color: '#FFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#0063E0'
    },
    textButton:{
        fontSize:14,
        fontStyle: 'normal',
        lineHeight:19,
        fontFamily:'open-sans-light',
        fontWeight: '900',
        color: '#FFFF'
    },
    buttonPozition:{
        justifyContent:'center',
        alignItems:'center',
    }
})