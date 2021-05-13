import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { color } from '../../Utility';
// import styles from './styles'

const ShowUsers = ({ name, img, onImgTap, onNameTap }) => {
    return (
        <View style={{marginBottom:5,left:3,top:2}}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <TouchableOpacity onPress={onImgTap} style={styles.imgContainer}>
                        {img ? (
                            <Image source={{uri:img}} resizeMode="cover" style={{width:52,height:52,borderRadius:27}} />
                        ) : (
                            // <Text style={styles.imgTextstyle}>{name[0].toUpperCase()}</Text>
                            <Image source={require('../../../assets/Image/user_without_profile.jpg')} resizeMode="cover" style={{width:52,height:52,borderRadius:26}}/>
                        )}
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.bodyPart} onPress={onNameTap}>
                        <Text style={styles.nameStyle}>{name}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.right}>
                    <View>
                        <Text></Text>
                    </View>
                </View>
            </View>
            <View style={styles.border}/>
        </View>
    )
}

export default ShowUsers;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
    },
    left: {
        width: "15%",
        alignItems:'center',
        justifyContent:'center'
    },
    body: {
        width: "70%"
    },
    right: {
        width: '15%'
    },
    imgContainer: {
        width: 52,
        height: 52,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: color.WHITE,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#b2bec3',
    },
    border:{
        width:"85%",
        height:0.5,
        backgroundColor:'#dfe6e9',
        alignSelf:'flex-end'
    },
    imgTextstyle:{
        fontSize:30,
        color:color.WHITE,
    },
    bodyPart:{
        flex:1,
        top:10,
        left:10
    },
    nameStyle:{
        fontSize:18,
        color:color.BLUE
    }
})