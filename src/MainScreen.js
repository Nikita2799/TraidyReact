import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export const MainScreen = () => {
    return (
        <View>
           <View style={styles.container}>
                <Text style={styles.text}>Wallet</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        width: '100%',
        height: '50%',
        backgroundColor: '#FFFF',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30
    },
    text:{
        fontStyle: 'normal',
        marginTop: 20,
        fontFamily: 'open-sans-light',
        fontWeight: '200',
        fontSize: 17,
        color: '#000000'
        
    },

})