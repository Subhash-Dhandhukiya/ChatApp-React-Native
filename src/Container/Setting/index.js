import React, { useContext, useLayoutEffect } from 'react'
import { View, Text ,StyleSheet, Alert} from 'react-native'
import { clearAsyncStorage } from '../../AsyncStorage';
import Option from '../../Component/Option';
import { LogoutUser } from '../../Network';
import { color } from '../../Utility';
import { LOGIN, PROFILE, THEME } from '../../Utility/Constant/Route';
import {ThemeContext} from '../../ThemeContext'

const Setting = ({navigation}) => {
    
    //For Dark Mode theme
    const {theme,setTheme}=useContext(ThemeContext);
    const BACKGROUNDCOLOR=theme=="Light"?color.WHITE:color.BLACK;
    const FONT=theme=="Light"?color.FONT:color.WHITE;

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: "Setting"
        });
    }, [navigation]);
    
    const handelLogout=()=>{
        Alert.alert(
            "Logout",
            "Are you sure to logout",
            [
                {
                    text:"Yes",
                    onPress:()=>logout()
                },
                {
                    text:"No",
                    
                }
            ]
        )
    }
    
    //Logout
    const logout=()=>{
        LogoutUser()
        .then(()=>{
            clearAsyncStorage()
            .then(()=>{
                setTheme("Light")
                navigation.replace(LOGIN)
            })
            .catch(error=>alert(error))
        })
        .catch((error)=>alert(error))
    }

    //Handle Theme
    const handleTheme=()=>{
        navigation.navigate(THEME)
    }

    return (
        <View style={[styles.container,{backgroundColor:BACKGROUNDCOLOR}]}>
            <View style={[styles.header,{backgroundColor:BACKGROUNDCOLOR}]}>
                <Text style={[styles.txt,{color:FONT}]}>SETTING</Text>
            </View>
            <View style={{height:1,width:"100%",backgroundColor:color.WHITE,shadowColor: 'rgba(0, 0, 0, 0.2)',elevation:1}}/>
            <Option title="Profile" onPress={()=>navigation.navigate(PROFILE)}/>
            <Option title="Theme" onPress={()=>handleTheme()}/>
            <Option title="Logout" onPress={()=>handelLogout()}/>
        </View>
    )
}

export default Setting;

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        height:48,
        alignItems:'center',
        justifyContent:"center",
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOpacity:0.2,
        elevation:6
    },
    txt:{
        fontSize:20,
        color:color.FONT,
        letterSpacing:0.7
    }
})
