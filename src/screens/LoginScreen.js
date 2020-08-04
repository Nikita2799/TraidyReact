import React, { useState } from 'react'
import {View,StyleSheet,Text,TouchableOpacity,TextInput} from 'react-native'

import {Header} from './component/LoginComp/Header';
import {SingIn} from './component/LoginComp/SingIn';
import {FooterMain} from './component/LoginComp/FooterMain'
import { AppButton } from './component/ui/AppButton';
import { MainScreen } from '../MainScreen';


export const LoginScreen = ({onSubmit,renderProfile}) =>{
    let content
    const url = "http://traidy-game.com/users/loginUser";
    const [loginData,setLoginData] = useState({
        id:Date.now().toString(),
        login: '',
        password: ''
    })
     const postData = async () =>{
        try{
        const responce = await  fetch(url,{
              method: 'POST',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify(loginData)
          })
          let data = await responce.json()
          console.log(data.success)
          let suc = data.success === 2 ? true:false
          if(suc) renderProfile(3)
        }catch(e){
            console.log(e.toString())
        }
         // const data =  responce.json()
         // Alert.alert(data)
      }

    const PressHandler =()=>{
        onSubmit(2)
    }
     content = (
                <View style={styles.container}>
                        <Header/>
                        <Text style={styles.text}>Login</Text>
                    <View style= {styles.inputView}>
                        <TextInput style={styles.input}  onChangeText={(text)=>{setLoginData({login: text})}}/>
                    </View>        
                        <Text style={styles.text}>Password</Text>
                    <View style={styles.inputView} onChangeText={(text)=>{setLoginData({password: text})}}>
                        <TextInput style={styles.input}/>
                    </View>
            
                    <View style={styles.buttonPozition}>
                        <TouchableOpacity onPress={postData} style={styles.buttonSingIn}>
                            <Text style={styles.textButton}>Log in</Text>
                        </TouchableOpacity>
                    </View>

                    <View style= {styles.footer}>
                        <Text style={{color: '#9c9c9c'}}>Don't have an account</Text>

                    <AppButton onPress={PressHandler} styles={styles.textButton}>
                        <Text style={{color:'#0063E0'}}>Sing up</Text>
                    </AppButton>

                    </View>
    
                    </View>
                    )

    return(
        <View style={styles.container}>
            {content}
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
    },
    inputView:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
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