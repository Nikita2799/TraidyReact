import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity, Image, ListViewBase, Alert} from 'react-native'
import {Entypo} from '@expo/vector-icons'

import { RegHeader } from './component/RegestryComp/RegHeader'
import { Inputs } from './component/RegestryComp/Inputs'
import { AppButton } from './component/ui/AppButton'

export const RegistrScreen=({onBack})=>{
    
    return(
        <View style={styles.container} >
            <AppButton onPress={onBack}  styles={styles.cross} >
               <Entypo  size={24} name='cross' color='#ffff'/> 
            </AppButton> 
            <RegHeader/>
            <Inputs/>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    cross:{
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 30
    }
})
