import React, { useContext, useEffect, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, Image } from 'react-native'
import { uuid } from '../../Utility/Constant'
import { Store } from '../../Context/store';
import { LOADING_START, LOADING_STOP } from '../../Context/actions/type'
import firebase from 'firebase'
import { BackIcon } from '../../Component/Icon';
import { color } from '../../Utility'
import * as ImagePicker from 'react-native-image-picker'
import { UpdateUser } from '../../Network'
import ImgToBase64 from 'react-native-image-base64';
import {ThemeContext} from '../../ThemeContext'

const Profile = ({ navigation }) => {
    const loadingContext = useContext(Store);
    const [UserDetail, setUserDetail] = useState({ id: '', fname: '', profileImg: '', email: '', lname: '', Gender: '' })

    const { fname, profileImg, email, lname } = UserDetail;

    //For Dark Mode Theme
    const {theme}=useContext(ThemeContext)
    const BACKGROUND_COLOR=theme=="Light"?color.WHITE:color.BLACK
    const SCREEN_BACKGROUND_COLOR=theme=="Light"?color.BLUE:'#2f3640'
    const FONT_COLOR=theme=="Light"?color.PLACEHOLDER:'#718093'
    const DATA=theme=="Light"?color.FONT:color.WHITE

    useEffect(() => {
        loadingContext.loadingDispatch(LOADING_START);
        try {
            firebase.database().ref('user').on('value', (dataSnapShot) => {
                let currentUser = { id: '', fname: '', profileImg: '', email: '', lname: '' }
                dataSnapShot.forEach((child) => {
                    if (uuid === child.val().uuid) {
                        currentUser.id = uuid;
                        currentUser.fname = child.val().firstname;
                        currentUser.email = child.val().email;
                        currentUser.profileImg = child.val().profileImg;
                        currentUser.lname = child.val().lastname;
                    }
                })
                setUserDetail(currentUser);
                loadingContext.loadingDispatch(LOADING_STOP);
            })

        } catch (error) {
            loadingContext.loadingDispatch(LOADING_STOP);
            alert(error);
        }
    }, [profileImg])

    //Image selection function
    const selectPhotoTapped = () => {
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
                        loadingContext.loadingDispatch(LOADING_START);
                        UpdateUser(uuid, base64String)
                            .then(() => {
                                setUserDetail({
                                    ...UserDetail,
                                    profileImg: `data:image;base64+${base64String}`
                                })
                                loadingContext.loadingDispatch(LOADING_STOP);
                            })
                            .catch((error) => {
                                loadingContext.loadingDispatch(LOADING_STOP);
                                alert(error);
                            })
                    })
                    .catch(err => console.log(err));
            }
        })
    }

    return (
        <SafeAreaView style={[styles.container,{backgroundColor:BACKGROUND_COLOR}]}>
            {/*Header 1 */}
            <View style={[styles.screen,{backgroundColor:SCREEN_BACKGROUND_COLOR}]}>
                <View style={styles.TopHeader}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                        <BackIcon fill={color.WHITE} height={18} width={18} />
                    </TouchableOpacity>
                    <View style={styles.text}>
                        <Text style={{ fontSize: 26, color: color.WHITE, fontWeight: '900', letterSpacing: 1 }}>Profile </Text>
                    </View>
                </View>
                <View style={{ height: '100%' }} >
                    <View style={styles.imageContainer}>
                        <View style={styles.imageRound}>
                            {profileImg ? (
                                <Image
                                    source={{ uri: profileImg }}
                                    resizeMode="cover"
                                    style={{ width: 130, height: 130, borderRadius: 70 }}
                                />
                            ) : (
                                <View>
                                    <Image
                                        source={require('../../../assets/Image/user_without_profile.jpg')}
                                        resizeMode="cover"
                                        style={{ width: 140, height: 140, borderRadius: 70 }}
                                    />
                                </View>
                            )}
                        </View>
                        <View style={{ marginTop: 18 }}>
                            <TouchableOpacity onPress={() => selectPhotoTapped()}>
                                <Text style={{ fontSize: 16, color: color.WHITE, letterSpacing: 1 }}>Edit Image</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            {/*Bottom part of Profile Screen */}

            <View style={{ flex: 0.52 }}>
                <View style={{marginTop:25}}>
                    <View style={styles.bottomField}>
                        <View style={{ height: 50, width: 130, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14, left: 25, letterSpacing: 1, color: FONT_COLOR}}>FIRST NAME</Text>
                        </View>
                        <Text style={{ left: 10, letterSpacing: 1, fontSize: 16 ,color:DATA}}>{fname}</Text>
                    </View>
                    <View style={{ width: "85%", height: 0.5, backgroundColor: color.PLACEHOLDER, alignSelf: 'center' }} />


                    <View style={styles.bottomField}>
                        <View style={{ height: 50, width: 130, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14, left: 25, letterSpacing: 1, color: FONT_COLOR}}>LAST NAME</Text>
                        </View>
                        <Text style={{ left: 10, letterSpacing: 1, fontSize: 16 ,color:DATA}}>{lname}</Text>
                    </View>
                    <View style={{ width: "85%", height: 0.5, backgroundColor: color.PLACEHOLDER, alignSelf: 'center' }} />


                    <View style={styles.bottomField}>
                        <View style={{ height: 50, width: 130, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14, left: 25, letterSpacing: 1, color: FONT_COLOR}}>EMAIL</Text>
                        </View>
                        <Text style={{ left: 10, letterSpacing: 1, fontSize: 16,color:DATA }}>{email}</Text>
                    </View>
                    <View style={{ width: "85%", height: 0.5, backgroundColor: color.PLACEHOLDER, alignSelf: 'center' }} />
                </View>
            </View>
        </SafeAreaView>
    );
}



export default Profile;

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screen: {
        flex: 0.48,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    TopHeader: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        top: 10,
    },
    btn: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        left: width / 4.1
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 40,
    },
    imageRound: {
        width: 140,
        height: 140,
        borderRadius: 75,
        borderWidth: 6,
        borderColor: "rgba(255, 255, 255,0.6)",
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomField: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginTop: 8
    }
})

