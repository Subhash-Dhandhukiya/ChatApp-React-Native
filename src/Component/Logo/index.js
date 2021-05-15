import React, { Component } from 'react';
import { View,  StyleSheet, Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';
import { color } from '../../Utility';

export default class Logo extends Component {

    constructor(props){
        super(props);
        this.state={
            progress:new Animated.Value(0)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <LottieView
                    autoPlay   
                    source={require('../../../assets/Splash/splash.json')}
                />
            </View>
        );
        // console.ignoredYellowBox('Setting a time')
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})