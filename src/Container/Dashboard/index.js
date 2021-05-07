import React, { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Alert } from 'react-native';
import { Logout } from '../../../assets/Icon';
import { color } from '../../Utility';

const Dashboard = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Logout
                    fill={color.BLACK}
                    width={22}
                    height={22}
                    style={{ right: 10 }}
                    onPress={() => Alert.alert(
                        "Logout",
                        "Are you sure to logout",
                        [
                            {
                                text: "Yes",
                                onPress: () => alert('logged out')
                            },
                            {
                                text: 'NO'
                            }
                        ], {
                        cancelable: false
                    })}
                />
            )
        })
    }, [navigation])

    return (
        <SafeAreaView>
            <Text>Dashboard</Text>
        </SafeAreaView>
    )
}

export default Dashboard
