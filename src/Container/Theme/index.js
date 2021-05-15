import React, { useContext, useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { color } from '../../Utility'
import { Circle, FullCircle } from '../../Component/Icon';
import {ThemeContext} from '../../ThemeContext'

const Theme = ({navigation}) => {

    const {theme,setTheme}=useContext(ThemeContext);

    const Dark="Dark";
    const Light="Light";

    const FONT_COLOR=theme=="Light"?color.FONT:color.WHITE
    const BORDER_BACKGROUND_COLOR=theme=="Light"?color.FONT:"#222831"

    const _onSelect=(i)=>{
        setTheme(i);
    }

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={[styles.txt,{color:FONT_COLOR}]}>THEME</Text>
            </View>
            <View style={{ height: 1, width: "100%", backgroundColor: color.WHITE, shadowColor: 'rgba(0, 0, 0, 0.2)', elevation: 1 }} />

            <View>
                <TouchableOpacity style={styles.option} onPress={()=>_onSelect(Dark)}>
                    <Text style={{ fontSize: 16, paddingLeft: 10,color:FONT_COLOR }}>Dark</Text>
                    <View style={{ paddingRight: 15 }}>
                        {theme=="Dark" ? (<FullCircle width={18} height={18} />) :  (<Circle fill={color.BLUE} width={18} height={18} />) }
                    </View>
                </TouchableOpacity>
                <View style={{ height: 0.5, backgroundColor:BORDER_BACKGROUND_COLOR, width: '100%' }} />
            </View>

            <View>
                <TouchableOpacity style={styles.option} onPress={()=>_onSelect(Light)}>
                    <Text style={{ fontSize: 16, paddingLeft: 10 ,color:FONT_COLOR}}>Light</Text>
                    <View style={{ paddingRight: 15 }}>
                        {theme=="Light" ? (<FullCircle width={18} height={18} />)  :  (<Circle fill={color.BLUE} width={18} height={18} />)}
                    </View>
                </TouchableOpacity>
                <View style={{ height: 0.5, backgroundColor:BORDER_BACKGROUND_COLOR, width: '100%' }} />
            </View>
        </View >
    )
}

export default Theme

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 48,
        alignItems: 'center',
        justifyContent: "center",
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOpacity: 0.2,
        elevation: 6
    },
    txt: {
        fontSize: 20,
        letterSpacing: 0.7
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 55
    }
})