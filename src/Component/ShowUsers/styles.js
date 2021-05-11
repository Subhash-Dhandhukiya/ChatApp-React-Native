import { StyleSheet } from 'react-native'
import {color} from '../../Utility'

export default StyleSheet.create({
    cardStyle:{
        backgroundColor:color.SEMI_TRANSPARENT,
        borderBottomWidth:1,
        borderColor:color.WHITE,
    },
    cardItemStyle:{
        backgroundColor:color.SEMI_TRANSPARENT,
    },
    logoContainer:{
        height:60,
        width:60,
        borderColor:color.WHITE,
        borderWidth:2,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:color.ICON,
    },
    thumbnailName:{
        fontSize:30,
        fontWeight:'bold'
    },
    profileName:{
        fontSize:20,
        fontWeight:'bold'
    }
})