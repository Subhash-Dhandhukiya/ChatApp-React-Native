import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { SIGNUP } from '../../Utility/Constant/Route'

const Login = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text onPress={()=>navigation.navigate(SIGNUP)}>Login Screen</Text>
        </SafeAreaView>
    )
}

export default Login
