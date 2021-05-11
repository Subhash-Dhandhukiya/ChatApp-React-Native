import React, { useContext, useEffect, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, Image } from 'react-native'
import { uuid } from '../../Utility/Constant'
import { Store } from '../../Context/store';
import { LOADING_START, LOADING_STOP } from '../../Context/actions/type'
import firebase from 'firebase'
import { BackIcon } from '../../Component/Icon';
import { color } from '../../Utility'

const Profile = ({ navigation }) => {
    const loadingContext = useContext(Store);
    const [UserDetail, setUserDetail] = useState({ id: '', name: '', profileImg: '', email: '' })

    const { id, name, profileImg, email } = UserDetail;

    useEffect(() => {
        loadingContext.loadingDispatch(LOADING_START);
        try {
            firebase.database().ref('user').on('value', (dataSnapShot) => {
                let currentUser = { id: '', name: '', profileImg: '', email: '' }
                dataSnapShot.forEach((child) => {
                    if (uuid === child.val().uuid) {
                        currentUser.id = uuid;
                        currentUser.name = child.val().name;
                        currentUser.email = child.val().email;
                        currentUser.profileImg = child.val().profileImg;
                    }
                })
                setUserDetail(currentUser);
                loadingContext.loadingDispatch(LOADING_STOP);
            })

        } catch (error) {
            loadingContext.loadingDispatch(LOADING_STOP);
            alert(error);
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {/*Header 1 */}
            <View style={styles.screen}>
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
                                    source={profileImg}
                                    resizeMode="cover"
                                    style={{ width: 140, height: 140, borderRadius: 70 }}
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
                            <TouchableOpacity onPress={() => console.log("Edit Image Pressed")}>
                                <Text style={{ fontSize: 16, color: color.WHITE, letterSpacing: 1 }}>Edit Image</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            {/*Bottom part of Profile Screen */}

            <View style={{ flex: 0.52 }}>
                <View style={styles.bottomField}>
                    <View style={{height:50,width:130,justifyContent:'center'}}>
                        <Text style={{fontSize:14,left:25,letterSpacing:1,color:color.PLACEHOLDER}}>FIRST NAME</Text>
                    </View>
                    <Text style={{left:10,letterSpacing:1,fontSize:16}}>{name}</Text>
                </View>
                <View style={{width:"85%",height:0.5,backgroundColor:color.PLACEHOLDER,alignSelf:'center'}}/>


                <View style={styles.bottomField}>
                    <View style={{height:50,width:130,justifyContent:'center'}}>
                        <Text style={{fontSize:14,left:25,letterSpacing:1,color:color.PLACEHOLDER}}>LAST NAME</Text>
                    </View>
                    <Text style={{left:10,letterSpacing:1,fontSize:16}}>{name}</Text>
                </View>
                <View style={{width:"85%",height:0.5,backgroundColor:color.PLACEHOLDER,alignSelf:'center'}}/>


                <View style={styles.bottomField}>
                    <View style={{height:50,width:130,justifyContent:'center'}}>
                        <Text style={{fontSize:14,left:25,letterSpacing:1,color:color.PLACEHOLDER}}>GENDER</Text>
                    </View>
                    <Text style={{left:10,letterSpacing:1,fontSize:16}}>{name}</Text>
                </View>
                <View style={{width:"85%",height:0.5,backgroundColor:color.PLACEHOLDER,alignSelf:'center'}}/>

                <View style={styles.bottomField}>
                    <View style={{height:50,width:130,justifyContent:'center'}}>
                        <Text style={{fontSize:14,left:25,letterSpacing:1,color:color.PLACEHOLDER}}>BIRTHDAY</Text>
                    </View>
                    <Text style={{left:10,letterSpacing:1,fontSize:16}}>{name}</Text>
                </View>
                <View style={{width:"85%",height:0.5,backgroundColor:color.PLACEHOLDER,alignSelf:'center'}}/>

                <View style={styles.bottomField}>
                    <View style={{height:50,width:130,justifyContent:'center'}}>
                        <Text style={{fontSize:14,left:25,letterSpacing:1,color:color.PLACEHOLDER}}>EMAIL</Text>
                    </View>
                    <Text style={{left:10,letterSpacing:1,fontSize:16}}>{name}</Text>
                </View>
                <View style={{width:"85%",height:0.5,backgroundColor:color.PLACEHOLDER,alignSelf:'center'}}/>
            </View>
        </SafeAreaView>
    );
}


{/**

                <View style={styles.bottomField}>
                    <View style={{height:50,width:150,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:14,left:5,letterSpacing:1}}>FIRST NAME</Text>
                    </View>
                    <Text style={{left:10,letterSpacing:1}}>{name}</Text>
                </View>
                <View style={{width:"85%",height:0.5,backgroundColor:color.PLACEHOLDER,alignSelf:'center'}}/>
 
*/}
export default Profile;

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.WHITE
    },
    screen: {
        flex: 0.48,
        backgroundColor: color.BLUE,
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




























// import React from 'react'
// import {Image,View,Text} from 'react-native'
// import styles from './Style'
// import {globalStyle,color} from '../../Utility'
// import {TouchableOpacity} from 'react-native-gesture-handler'
// import { UserEditIcon } from '../../Component/Icon'

// export default ({img,name,onImgTap,onEditTab})=>{
//     <View style={[globalStyle.sectionCentered]}>
//         <View>
//             <TouchableOpacity onPress={onImgTap} activeOpacity={0.8}>
//                 {img?(
//                     <Image source={{uri:img}} style={styles.img} resizeMode="cover"/>
//                 ):(
//                     <View style={[globalStyle.sectionCentered,styles.img,{backgroundColor:color.ICON}]}>
//                         <Text>{name[0]}</Text>
//                     </View>
//                 )}
//             </TouchableOpacity>
//             <View style={[globalStyle.sectionCentered,styles.editImgContainer]}>
//                 <UserEditIcon
//                     fill={color.ICON}
//                     width={20}
//                     height={20}
//                     onPress={onEditTab}
//                 />
//             </View>
//         </View>
//         <Text style={styles.welcome}>{name}</Text>
//     </View>
// }