import React from 'react'
import {View,StyleSheet, Text} from 'react-native'

export const RegHeader = ()=>{
    return(
        <View style={styles.container}>
            <Text style={{
                fontSize: 36,
                fontWeight:'normal',
                lineHeight: 49,
                color: '#FFFF',
                fontFamily: 'open-sans-light'}}>Sign up </Text>
            <Text style={{
                fontSize: 24,
                lineHeight:33,
                fontWeight:'normal',
                color: '#9c9c9c',
                fontFamily: 'open-sans-light'
            }}>sign up to start</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 40,
        paddingVertical: 20
    }
})