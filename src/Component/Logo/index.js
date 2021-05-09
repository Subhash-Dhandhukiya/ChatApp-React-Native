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


    componentDidMount() {
        // Animated.timing(this.state.progress,{
        //     toValue:1,
        //     duration:2000,
        //     easing:Easing.linear,
        // }).start();
        // this.animation.play();
    }

    render() {
        return (
            <View style={styles.container}>
                <LottieView
                    // ref={animation => {
                    //     this.animation = animation;
                    // }}
                    autoPlay
                    

                    // style={{
                    //     width: 250,
                    //     height: 250,
                    // }}
                    source={require('../../../assets/Splash/splash.json')}
                    // progress={this.state.progress}
                />
            </View>
        );
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