import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { ChatBox, Input } from '../../Component';
import { Camera, Send } from '../../Component/Icon';
import { color } from '../../Utility';
import styles from './styles'
import firebase from '../../Firebase/config'
import ImagePicker from 'react-native-image-picker'
import ImgToBase64 from 'react-native-image-base64'
import { recieveMsg, senderMsg } from '../../Network';


const Chat = ({ route, navigation }) => {

    const { name, img, guestUserId, currentUserId } = route.params;

    const [msgValue, setMsgValue] = useState('');
    const [message, setMessage] = useState([])


    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: name
        });
    }, [navigation]);


    useEffect(() => {
        try {
            firebase.database().ref('message').child(currentUserId).child(guestUserId)
        } catch (error) {
            alert(error)
        }
    }, [])

    const handleOnChange = ({ text }) => {
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
                        let source='data:image;base64'+base64String;
                    })
                    .catch(err => console.log(err));
            }
        })
    }


    //send message function
    const handleSend=()=>{
        setMessage('');
       
        if(msgValue){
            senderMsg(msgValue,currentUserId,guestUserId,'')
            .then(()=>{})
            .catch((error)=>{
                alert(error)
            })
        }

        //Guest User
        if(msgValue){
            recieveMsg(msgValue,currentUserId,guestUserId,'')
            .then(()=>{})
            .catch((error)=>{
                alert(error)
            })
        }

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














// firebase
//                 .database()
//                 .ref("message")
//                 .child(currentUserId)
//                 .child(guestUserId)
//                 .on('value', (dataSnapShot) => {
//                     let msg = [];
//                     dataSnapShot.forEach((child) => {
//                         console.log(child)
//                         msg.push({
//                             sendBy: child.val().message.sender,
//                             recieveBy: child.val().message.reciever,
//                             msg: child.val().msg,
//                             img: child.val().img,
//                         })
//                     })
//                     setMessage(msg.reverse())
//                 })