import {StyleSheet} from 'react-native'
import {color,appStyle} from '../../Utility'

export default StyleSheet.create({
    chatContainer:{
        backgroundColor:color.WHITE,
        borderRadius:20
    },
    chatText:{
        color:color.BLACK,
        fontSize:18,
        marginVertical:5,
        fontWeight:"500",
        padding:8
    }
})