import React, { useContext, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import Button from '../../Component/button'
import Input from '../../Component/Input'
import { color } from '../../Utility'
import { BOTTOMTAB, DASHBOARD, SIGNUP } from '../../Utility/Constant/Route'
import { LOADING_START, LOADING_STOP } from '../../Context/actions/type'
import { Store } from '../../Context/store'
import { loginRequest } from '../../Network'
import { setAsyncStorage, keys } from '../../AsyncStorage'
import { setUniqueValue, keyboardVerticalOffset } from '../../Utility/Constant'

const Login = ({ navigation }) => {

    const loadingContext = useContext(Store);

    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const { email, password } = credentials;


    const handleOnChange = (name, value) => {
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const onLoginPress = () => {
        Keyboard.dismiss();
        if (!email) {
            alert("Email is required")
        } else if (!password) {
            alert("Password is required")
        } else {
            loadingContext.loadingDispatch(LOADING_START);
            loginRequest(email, password)
                .then((res) => {

                    if (res.additionalUserInfo==null) {
                        loadingContext.loadingDispatch(LOADING_STOP);
                        alert(res);
                        return;
                    }

                    setAsyncStorage(keys.uuid, res.user.uid);
                    setUniqueValue(res.user.uid);
                    loadingContext.loadingDispatch(LOADING_STOP);
                    navigation.replace(BOTTOMTAB);
                })
                .catch(error => {
                    loadingContext.loadingDispatch(LOADING_STOP);
                    alert("Invalid email or password.")
                })
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <View>
                    <View>
                        <Text style={styles.headerText}>Login Now</Text>
                    </View>
                    <View style={{ marginTop: 10, paddingLeft: 20 }}>
                        <Text style={styles.txt}>Please login to continue using our app</Text>
                    </View>
                </View>

                {/*This is Input Field */}
                <SafeAreaView style={styles.middle}>

                    <Input
                        placeholder="Email"
                        numberOfLines={1}
                        value={email}
                        onChangeText={(text) => handleOnChange('email', text)}
                        returnKeyType="next"
                    />
                    <Input
                        placeholder="Password"
                        secureTextEntry={true}
                        numberOfLines={1}
                        value={password}
                        onChangeText={(text) => handleOnChange('password', text)}
                        keybordType="numeric"
                    />
                </SafeAreaView>

                <View style={{ marginTop: 10 }}>
                    <View style={{ alignItems: 'center' }}>

                        <Button
                            title="Login"
                            onPress={() => onLoginPress()}
                        />

                        <View style={{ flexDirection: 'row' }}>
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate(SIGNUP)}>
                                <Text style={{ color: color.BLUE }}> Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

export default Login;

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