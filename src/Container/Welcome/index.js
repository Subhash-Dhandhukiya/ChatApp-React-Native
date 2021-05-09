import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Button from '../../Component/button'
import { color } from '../../Utility'
import { LOGIN, SIGNUP } from '../../Utility/Constant/Route'

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View>
                    <Text style={styles.headerText}>Welcome</Text>
                </View>
                <View style={{ marginTop: 10, paddingLeft: 20 }}>
                    <Text style={styles.txt}>Please login or sign up to continue using</Text>
                    <Text style={styles.txt}>our app.</Text>
                </View>
            </View>

            <View style={styles.middle}>
                <Image
                    source={require('../../../assets/Image/Login.jpg')}
                    resizeMode="contain"
                    style={{
                        width: "100%",
                        height: 300
                    }}
                />
            </View>
            <View style={{flex:1}}>
                <View style={styles.Bottomtxt}>
                    <Text style={styles.txt2}>Login with</Text>
                    <Text style={styles.txt2}>Email</Text>
                </View>
                <View style={{alignItems:'center',marginTop:20}}>
                    <Button  title="Sign up" onPress={() => navigation.navigate(SIGNUP)} />
                    <View style={{flexDirection:'row'}}>
                        <Text>You already have an account?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate(LOGIN)}>
                            <Text style={{color:color.BLUE}}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerText: {
        color: color.BLUE,
        fontSize: 38,
        paddingLeft: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    txt: {
        fontSize: 14,
        color: color.FONT, 
        fontWeight: 'normal'
    },
    middle: {
        marginTop: 20,
        flex:1.5
    },
    Bottomtxt: {
        alignItems:'center',
        justifyContent:'center',
    },
    txt2:{
        fontSize: 14,
        color: color.FONT2,
        fontWeight: 'bold'
    }
})