import React, { useContext, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import Button from '../../Component/button'
import Input from '../../Component/Input'
import { LOADING_START, LOADING_STOP } from '../../Context/actions/type'
import { Store } from '../../Context/store'
import { color } from '../../Utility'
import { DASHBOARD, LOGIN, } from '../../Utility/Constant/Route'
import { AddUser, signupRequest } from '../../Network'
import firebase from '../../Firebase/config'
import { setAsyncStorage, keys } from '../../AsyncStorage'
import { setUniqueValue } from '../../Utility/Constant'

const Signup = ({ navigation }) => {

    const loadingContext = useContext(Store);

    const [credentials, setCredentials] = useState({ email: "", password: "", name: "", confirmPassword: "" })
    const { email, password, name, confirmPassword } = credentials;


    const handleOnChange = (name, value) => {
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const onSignUpPress = () => {
        if (!name) {
            alert("Name is required")
        } else if (!email) {
            alert("Email is required")
        } else if (!password) {
            alert("Password is required")
        } else if (!confirmPassword) {
            alert("Confirm Password is required")
        } else if (password !== confirmPassword) {
            alert("Password did not match")
        } else {
            loadingContext.loadingDispatch(LOADING_START);
            signupRequest(email, password)
                .then((res) => {

                    if(!res.addtionalUserInfo){
                        loadingContext.loadingDispatch(LOADING_STOP);
                        alert(res)
                        return;
                    }

                    let uid = firebase.auth().currentUser.uid
                    let profileImg = "";
                    AddUser(name, email, uid, profileImg)
                        .then(() => {
                            setAsyncStorage(keys.uuid, uid);
                            setUniqueValue(uid);
                            loadingContext.loadingDispatch(LOADING_STOP);
                            navigation.replace(DASHBOARD)
                        })
                        .catch((error) => {
                            loadingContext.loadingDispatch(LOADING_STOP);
                            if (error.code === 'auth/email-already-in-use') {
                                alert('That email address is already in use!');
                            }

                            if (error.code === 'auth/invalid-email') {
                                alert('That email address is invalid!');
                            }

                            alert(error);
                        })
                })
                .catch((error) => {
                    loadingContext.loadingDispatch(LOADING_STOP);
                    if (error.code === 'auth/email-already-in-use') {
                        alert('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        alert('That email address is invalid!');
                    }

                    alert(error);
                })
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View>
                    <Text style={styles.headerText}>Sign Up</Text>
                </View>
                <View style={{ marginTop: 10, paddingLeft: 20 }}>
                    <Text style={styles.txt}>Please Registration with email and sign up</Text>
                    <Text style={styles.txt}>to continue using our app.</Text>
                </View>
            </View>

            {/*This is Input Field */}
            <SafeAreaView style={styles.middle}>
                <Input
                    placeholder="Name"
                    numberOfLines={1}
                    value={name}
                    onChangeText={(text) => handleOnChange('name', text)}
                />

                <Input
                    placeholder="Email"
                    numberOfLines={1}
                    value={email}
                    onChangeText={(text) => handleOnChange('email', text)}
                />
                <Input
                    placeholder="Password"
                    numberOfLines={1}
                    value={password}
                    onChangeText={(text) => handleOnChange('password', text)}
                    secureTextEntry={true}
                />
                <Input
                    placeholder="Confirm Password"
                    numberOfLines={1}
                    value={confirmPassword}
                    onChangeText={(text) => handleOnChange('confirmPassword', text)}
                    secureTextEntry={true}
                />
            </SafeAreaView>

            <View style={{ marginTop: 10 }}>
                <View style={{ alignItems: 'center' }}>
                    <Button
                        title="Sign up"
                        onPress={() => onSignUpPress()}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text>You already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
                            <Text style={{ color: color.BLUE }}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup;

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
        marginTop: 40,
    },
    Bottomtxt: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt2: {
        fontSize: 14,
        color: color.FONT2,
        fontWeight: 'bold'
    }
})