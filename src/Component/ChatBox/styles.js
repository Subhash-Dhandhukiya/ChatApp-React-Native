import React from 'react'
import {StyleSheet} from 'react-native'
import { ThemeContext } from '../../ThemeContext'
import {color,appStyle} from '../../Utility'


export default StyleSheet.create({
    chatContainer:{
        backgroundColor:color.BLACK,
        borderRadius:20
    },
    chatText:{
        color:color.WHITE,
        fontSize:15,
        marginVertical:5,
        fontWeight:"500",
        padding:8,
    }
})