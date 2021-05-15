import React,{useContext} from 'react'
import {View,Text,Image} from 'react-native'
import {Card,CardItem} from 'native-base'
import {deviceWidth} from '../../Utility/StyleHelper/appStyle'
import {uuid} from '../../Utility/Constant'
import styles from './styles'
import {color} from '../../Utility'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {ThemeContext} from '../../ThemeContext'

const ChatBox=({userId,msg,img,onImgTap})=>{

    const {theme} =useContext(ThemeContext)

    let isCurrentUser=userId===uuid ? true :false;
    
    const BACKGROUNDCOLOR=theme=="Light"?color.GREY:color.DARK_THEME_CHATBOX_BACKGROUND
    const TEXTCOLOR=theme=="Light"?color.BLACK:color.WHITE

    return (
        <Card
            transparent
            style={{
                maxWidth:deviceWidth/2+10,
                alignSelf:isCurrentUser?'flex-end':'flex-start'
            }}
        >
            <View 
                style={[
                    styles.chatContainer,
                    {backgroundColor:BACKGROUNDCOLOR},
                    isCurrentUser && {
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20,
                        backgroundColor:BACKGROUNDCOLOR
                    }
                ]}
            >
                {img ? (
                    <CardItem cardBody>
                        <TouchableOpacity onPress={onImgTap}>
                            <Image 
                                source={{uri:img}}
                                resizeMode="cover"
                                style={{height:200,width:deviceWidth/2}}
                            />
                        </TouchableOpacity>
                    </CardItem>
                ) : (
                    <Text style={[styles.chatText,{color:TEXTCOLOR},isCurrentUser && {color:TEXTCOLOR}]}>
                        {msg}
                    </Text>
                )}

            </View>

        </Card>
    );

}

export default ChatBox;