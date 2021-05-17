import React, { useContext } from 'react'
import { View, Text, Image } from 'react-native'
import { Card, CardItem } from 'native-base'
import { deviceWidth } from '../../Utility/StyleHelper/appStyle'
import { uuid } from '../../Utility/Constant'
import styles from './styles'
import { color } from '../../Utility'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemeContext } from '../../ThemeContext'
import { Double_Tick, Tick } from '../Icon'

const ChatBox = ({ userId, msg, img, onImgTap, seen_msg }) => {

    //console.log(seen_msg)
    const { theme } = useContext(ThemeContext)
    let isCurrentUser = userId === uuid ? true : false;

    const BACKGROUNDCOLOR = theme == "Light" ? color.GREY : color.DARK_THEME_CHATBOX_BACKGROUND
    const TEXTCOLOR = theme == "Light" ? color.BLACK : color.WHITE

    function checkUser() {
        if (isCurrentUser) {
            if (!seen_msg) {
                return <Tick fill={color.DARK_GRAY} height={12} width={12} />;
            } else {
                return <Double_Tick fill={color.BLUE} height={15} width={15} />;
            }
        }
    }

    return (
        <Card
            transparent
            style={{
                maxWidth: deviceWidth / 2 + 70,
                alignSelf: isCurrentUser ? 'flex-end' : 'flex-start'
            }}
        >
            <View
                style={[
                    styles.chatContainer,
                    { backgroundColor: BACKGROUNDCOLOR },
                    isCurrentUser && {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: BACKGROUNDCOLOR
                    }
                ]}
            >
                {img ? (
                    <CardItem cardBody>
                        <TouchableOpacity onPress={onImgTap}>
                            <Image
                                source={{ uri: img }}
                                resizeMode="cover"
                                style={{ height: 200, width: deviceWidth / 2 }}
                            />
                        </TouchableOpacity>
                    </CardItem>
                ) : (
                    <Text style={[styles.chatText, { color: TEXTCOLOR }, isCurrentUser && { color: TEXTCOLOR }]}>
                        {msg}
                    </Text>
                )}
                {isCurrentUser ? (
                    <View style={{alignItems:'flex-end' ,justifyContent:'flex-end',paddingRight:10,marginBottom:10,marginTop:-10}}>
                    {checkUser()}
                </View>
                ) : (null)}

            </View>

        </Card>
    );

}

export default ChatBox;