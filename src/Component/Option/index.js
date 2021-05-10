import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet} from 'react-native'
import { color } from '../../Utility';
import { GreaterThenIcon } from '../Icon';

const Option = ({title,onPress}) => {
    return (
       <View>
            <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <GreaterThenIcon
                fill={color.ICON}
                height={15}
                width={15}
                style={styles.icon}
            />
        </TouchableOpacity>
        <View style={styles.border}/>
       </View>
    )
}

export default Option;

const styles=StyleSheet.create({
    container:{
        width:"100%",
        height:55,
        backgroundColor:color.WHITE,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    text:{
        left:12,
        fontSize:16
    },
    icon:{
        right:10
    },
    border:{
        width:"100%",
        height:0.5,
        backgroundColor:color.ICON,
        alignSelf:'center'
    }
})
