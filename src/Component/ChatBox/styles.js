import {StyleSheet} from 'react-native'
import {color,appStyle} from '../../Utility'

export default StyleSheet.create({
    chatContainer:{
        backgroundColor:color.BLACK,
        borderRadius:20
    },
    chatText:{
        color:color.WHITE,
        fontSize:18,
        marginVertical:5,
        fontWeight:"500",
        padding:8
    }
})