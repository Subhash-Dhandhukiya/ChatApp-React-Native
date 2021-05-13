import React, { Fragment, useLayoutEffect } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { BackIcon } from '../../Component/Icon';
import { color } from '../../Utility';

const ShowFullImg = ({ route, navigation }) => {

    const { params } = route;
    const { name, img } = params;

    return (
        <Fragment>
            {img ? (
                <ImageBackground source={{ uri: img }} style={{ flex: 1 }} resizeMode="cover">
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                            <BackIcon fill={color.PLACEHOLDER} height={18} width={18} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            ) : (
                <ImageBackground
                    source={require('../../../assets/Image/user_without_profile.jpg')}
                    resizeMode="cover"
                    style={{ flex: 1 }}
                >
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                            <BackIcon fill={color.PLACEHOLDER} height={18} width={18} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            )}
        </Fragment>
    )
}

export default ShowFullImg;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50
    },
    icon: {
        width: 80,
        height: 50,
        justifyContent: 'center',
        paddingLeft: 20,
        top: 10
    },
})

