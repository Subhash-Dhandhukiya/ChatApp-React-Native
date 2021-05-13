import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { Logout } from '../../../assets/Icon';
import { color } from '../../Utility';
import firebase from 'firebase'
import { LOADING_START, LOADING_STOP } from '../../Context/actions/type'
import { Profile, ShowUsers } from '../../Component'
import { uuid } from '../../Utility/Constant'
import { Store } from '../../Context/store';
import { SHOWFULLIMG,CHAT } from '../../Utility/Constant/Route';

const Dashboard = ({ navigation }) => {

    const loadingContext = useContext(Store);

    const [userDetail, setUserDetail] = useState({ id: '', name: '', profileImg: '' })
    const [allUsers, setAllUsers] = useState([]);

    const {profileImg,name,id}=userDetail
    useLayoutEffect(() => {

    }, [navigation])


    useEffect(() => {
        loadingContext.loadingDispatch(LOADING_START);
        try {
            firebase.database().ref('user').on('value', (dataSnapShot) => {
                let user = [];
                let currentUser = {
                    id: '',
                    name: '',
                    profileImg: ''
                }
                dataSnapShot.forEach((child) => {
                    if (uuid === child.val().uuid) {
                        currentUser.id = uuid;
                        currentUser.name = child.val().name;
                        currentUser.profileImg = child.val().profileImg;
                    } else {
                        user.push({
                            id: child.val().uuid,
                            name: child.val().name,
                            profileImg:child.val().profileImg,
                        })
                    } 
                })
                setUserDetail(currentUser);
                setAllUsers(user)
                loadingContext.loadingDispatch(LOADING_STOP);
            })

        } catch (error) {
            loadingContext.loadingDispatch(LOADING_STOP);
            alert(error)
        }
    }, [])


    //Show user's full profile Picture
    const imgTap=(profileImg,name)=>{
       navigation.navigate(SHOWFULLIMG,{
           name:name,
           img:profileImg
       })
    }

    //Start Conversation between usert
    const nameTap=(profileImg,name,guestUserId)=>{
        navigation.navigate(CHAT,{
            name:name,
            guestUserId:guestUserId,
            currentUserId:uuid,
            img:profileImg
        })
    }
 
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                alwaysBounceVertical={false}
                data={allUsers}
                keyExtractor={(_,index)=>index.toString()}
                renderItem={({item})=>(
                    <ShowUsers
                        name={item.name}
                        img={item.profileImg}
                        onImgTap={()=>imgTap(item.profileImg,item.name)}
                        onNameTap={()=>nameTap(item.profileImg,item.name,item.id)}
                    />
                )}
            />
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: color.WHITE
    }
})
