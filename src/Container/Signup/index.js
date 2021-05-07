import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { DASHBOARD } from '../../Utility/Constant/Route'

const Signup = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text onPress={()=>navigation.navigate(DASHBOARD)}>Signup Screen</Text>
        </SafeAreaView>
    )
}

export default Signup
