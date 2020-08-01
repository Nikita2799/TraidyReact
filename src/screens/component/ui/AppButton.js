import React from 'react'
import {StyleSheet,View,TouchableOpacity, Text} from 'react-native'

export const AppButton = ({children,onPress,styles, color})=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles} >
                <Text>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}



