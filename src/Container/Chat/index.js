import React, { useContext, useEffect, useState } from 'react'
import { View, SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native'
import { ChatBox, Input } from '../../Component';
import { Camera, Send } from '../../Component/Icon';
import { color } from '../../Utility';
import styles from './styles'
import firebase from '../../Firebase/config'
import * as ImagePicker from 'react-native-image-picker'
import ImgToBase64 from 'react-native-image-base64';
import { recieverMsg, senderMsg } from '../../Network';
import { SHOWFULLIMG } from '../../Utility/Constant/Route';
import { ThemeContext } from '../../ThemeContext'


const Chat = ({ route, navigation }) => {

    const { name, img, guestUserId, currentUserId } = route.params;
    const [msgValue, setMsgValue] = useState('');
    const [message, setMesseges] = useState([]);
    const [seen_msg, setSeen_msg] = useState(false);


    //For Dark Mode theme
    const { theme } = useContext(ThemeContext);
    const BACKGROUND_COLOR = theme == "Light" ? '#f1f2f6' : "#1e272e"
    const ICON_COLOR = theme == "Light" ? color.DARK_GRAY : color.WHITE

    React.useLayoutEffect(() => {

        let isOnline = null;
        firebase.database().ref("online").child(guestUserId).on('value', dataSnapshot => { isOnline = dataSnapshot })
        navigation.setOptions({
            // title: name,
            title: (
                <View>
                    <Text style={{ fontSize: 19 }}>{name}</Text>
                    {isOnline == "true" ? <Text style={{ fontSize: 12.5 }}>Online</Text> : (null)}
                </View>
            )
        });



    }, [navigation]);



    //Update msg

    function UpdateMessage(child, data) {

        console.log("Child Key => ", child)
        console.log("Child Data =>", data)
        firebase
            .database()
            .ref("messeges")
            .child(guestUserId)
            .child(currentUserId)
            .update({
                [child]: {
                    sender: data.val().sender,
                    reciever: data.val().reciever,
                    msg: data.val().msg,
                    img: data.val().img,
                    seen_msg: true
                }
            })
    }

    function UpdateGuestMessage() {
        firebase
            .database()
            .ref("messeges")
            .child(guestUserId)
            .child(currentUserId)
            .on('value', (dataSnapshot) => {
                dataSnapshot.forEach((child) => {
                    UpdateMessage(child.key, child)
                })
            })
    }



    useEffect(() => {
        try {
            firebase
                .database()
                .ref("messeges")
                .child(currentUserId)
                .child(guestUserId)
                .on("value", (dataSnapshot) => {
                    let msgs = [];
                    dataSnapshot.forEach((child) => {
                        msgs.push({
                            sendBy: child.val().sender,
                            recievedBy: child.val().reciever,
                            msg: child.val().msg,
                            img: child.val().img,
                            seen_msg: child.val().seen_msg
                        });
                    });
                    setMesseges(msgs.reverse());
                });
        } catch (error) {
            alert(error);
        }
        UpdateGuestMessage();
    }, []);



    const handleOnChange = (text) => {
        setMsgValue(text)
    }

    //handle camera function
    const handleCamera = () => {
        let option = {
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.launchImageLibrary(option, (res) => {
            if (res.didCancel) {
                console.log('User Cancelled image picker')
            } else if (res.errorMessage) {
                console.log("Image Picker error", res.errorMessage)
            } else {
                // Base 64
                const image = res.uri;
                ImgToBase64.getBase64String(image)
                    .then(base64String => {
                        let source = 'data:image;base64,' + base64String;
                        senderMsg(msgValue, currentUserId, guestUserId, source)
                            .then(() => { })
                            .catch((err) => alert(err));

                        // * guest user

                        recieverMsg(msgValue, currentUserId, guestUserId, source)
                            .then(() => { })
                            .catch((err) => alert(err));
                    })
                    .catch(err => console.log(err));
            }
        })
    }


    //send message function
    const handleSend = () => {
        setMsgValue("");
        if (msgValue) {
            senderMsg(msgValue, currentUserId, guestUserId, "", seen_msg)
                .then(() => { })
                .catch((err) => alert(err));

            // * guest user

            recieverMsg(msgValue, currentUserId, guestUserId, "", seen_msg)
                .then(() => { })
                .catch((err) => alert(err));
        }
    };



    const imgTap = (chatimg) => {
        navigation.navigate(SHOWFULLIMG, {
            fname,
            img: chatimg
        })
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: BACKGROUND_COLOR }}>
            <FlatList
                inverted
                data={message}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <ChatBox
                        userId={item.sendBy}
                        img={item.img}
                        onImgTap={() => imgTap(item.img)}
                        msg={item.msg}
                        seen_msg={item.seen_msg}
                    />
                )}
            />

            {/*send message */}
            <View style={styles.sendMessageContainer}>
                <Input
                    placeholder="Type here..."
                    numberOfLines={10}
                    inputStyle={styles.input}
                    onChangeText={(text) => handleOnChange(text)}
                    value={msgValue}
                />
                <View style={styles.sendBtnContainer}>
                    <TouchableOpacity onPress={() => handleCamera()}>
                        <Camera fill={ICON_COLOR} height={30} width={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSend()}>
                        <Send fill={ICON_COLOR} height={28} width={28} style={{ right: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Chat;


