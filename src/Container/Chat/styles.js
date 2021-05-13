import {StyleSheet} from 'react-native'
import {color,appStyle} from '../../Utility'

export default StyleSheet.create({
    sendMessageContainer:{
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        bottom:-10
    },
    input:{
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        width:"75%",
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
    },
    sendBtnContainer:{
        height:appStyle.fieldHeight,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        width:"29%",
    }
})