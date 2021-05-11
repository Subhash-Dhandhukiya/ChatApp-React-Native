import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text ,StyleSheet, Alert} from 'react-native'
import { clearAsyncStorage } from '../../AsyncStorage';
import Option from '../../Component/Option';
import { LogoutUser } from '../../Network';
import { color } from '../../Utility';
import { LOGIN, PROFILE } from '../../Utility/Constant/Route';

const Setting = ({navigation}) => {
    
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
                navigation.replace(LOGIN)
            })
            .catch(error=>alert(error))
        })
        .catch((error)=>alert(error))
    }

    return (
        <View style={styles.container}>
            <Option title="Profile" onPress={()=>navigation.navigate(PROFILE)}/>
            <Option title="Theme" onPress={()=>handelLogout()}/>
            <Option title="Logout" onPress={()=>handelLogout()}/>
        </View>
    )
}

export default Setting;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.WHITE
    }
})
