import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import { color } from '../../Utility';

const Setting = () => {
    return (
        <View style={styles.container}>
            <Text>This is Setting Screen</Text>
        </View>
    )
}

export default Setting;

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:color.WHITE
    }
})
