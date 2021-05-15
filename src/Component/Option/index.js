import React, { useContext } from 'react'
import { View, Text,TouchableOpacity, StyleSheet, ColorPropType} from 'react-native'
import { color } from '../../Utility';
import { GreaterThenIcon } from '../Icon';
import {ThemeContext} from '../../ThemeContext'

const Option = ({title,onPress}) => {

    //For dark theme
    const {theme}=useContext(ThemeContext)
    const BACKGROUNDCOLOR=theme=="Light"?color.WHITE:color.BLACK
    const FONT=theme=="Light"?color.BLACK:color.WHITE
    const BORDER_BACKGROUND_COLOR=theme=="Light"?color.FONT:"#222831"

    return (
       <View>
            <TouchableOpacity onPress={onPress} style={[styles.container,{backgroundColor:BACKGROUNDCOLOR}]}>
            <Text style={[styles.text,{color:FONT}]}>{title}</Text>
            <GreaterThenIcon
                fill={color.ICON}
                height={15}
                width={15}
                style={styles.icon}
            />
        </TouchableOpacity>
        <View style={[styles.border,{backgroundColor:BORDER_BACKGROUND_COLOR}]}/>
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
        alignSelf:'center'
    }
})
