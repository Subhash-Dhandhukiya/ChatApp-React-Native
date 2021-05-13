import React, { Fragment, useEffect, useState } from 'react'
import { View, SafeAreaView, FlatList, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import { ChatBox, Input } from '../../Component';
import { Camera, Send } from '../../Component/Icon';
import { color, globalStyle } from '../../Utility';
import styles from './styles'
import firebase from '../../Firebase/config'
import * as ImagePicker from 'react-native-image-picker'
import ImgToBase64 from 'react-native-image-base64';
import { recieverMsg, senderMsg } from '../../Network';
import { deviceHeight } from '../../Utility/StyleHelper/appStyle';
import { smallDeviceHeigh } from '../../Utility/Constant';
import { SHOWFULLIMG } from '../../Utility/Constant/Route';


const Chat = ({ route, navigation }) => {

    const { name, img, guestUserId, currentUserId } = route.params;

    const [msgValue, setMsgValue] = useState('');
    const [message, setMesseges] = useState([]);


    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: name
        });
    }, [navigation]);


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
                            sendBy: child.val().messege.sender,
                            recievedBy: child.val().messege.reciever,
                            msg: child.val().messege.msg,
                            img: child.val().messege.img,
                        });
                    });
                    setMesseges(msgs.reverse());
                    console.log(msgs)
                });
        } catch (error) {
            alert(error);
        }
        console.log(message)
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
            senderMsg(msgValue, currentUserId, guestUserId, "")
                .then(() => { })
                .catch((err) => alert(err));

            // * guest user

            recieverMsg(msgValue, currentUserId, guestUserId, "")
                .then(() => { })
                .catch((err) => alert(err));
        }
    }


    const imgTap=(chatimg)=>{
        navigation.navigate(SHOWFULLIMG,{
            name,
            img:chatimg
        })
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f1f2f6' }}>
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
                    />
                )}
            />

            {/*send message */}
            <View style={styles.sendMessageContainer}>
                <Input
                    placeholder="Type Here"
                    numberOfLines={10}
                    inputStyle={styles.input}
                    onChangeText={(text) => handleOnChange(text)}
                    value={msgValue}
                />
                <View style={styles.sendBtnContainer}>
                    <TouchableOpacity onPress={() => handleCamera()}>
                        <Camera fill={color.DARK_GRAY} height={30} width={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSend()}>
                        <Send fill={color.DARK_GRAY} height={30} width={30} style={{ right: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Chat








// 



