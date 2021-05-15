import React, { useContext } from 'react'
import {TextInput,Text, StyleSheet} from 'react-native'
import {appStyle, color} from '../../Utility'
import {ThemeContext} from '../../ThemeContext'

const Input=({
    placeholder,
    inputStyle,
    placeholderTextColor,
    secureTextEntry,
    onChangeText,
    value,
    onSubmitEditing,
    onBlur,
    onFocus,
    numberOfLines,
    returnKeyType
})=>{

    //For Dark theme
    const {theme}=useContext(ThemeContext)
    const BACKGROUND_COLOR=theme=='Light'?color.WHITE:"#808e9b"
    const FONT_COLOR=theme=="Light"?appStyle.fieldTextColor:color.WHITE
    const PLACEHOLDER_COLOR=theme=="Light"?color.PLACEHOLDER:color.WHITE

    return(
        <TextInput
            style={[styles.input,inputStyle,{backgroundColor:BACKGROUND_COLOR,color:FONT_COLOR}]}
            value={value}
            numberOfLines={numberOfLines}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={PLACEHOLDER_COLOR}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
            onFocus={onFocus}  
            returnKeyType={returnKeyType}
        />
    );
}

export default Input;

const styles=StyleSheet.create({
    input:{
        paddingLeft:16,
        // backgroundColor:appStyle.fieldBgColor,
        width:"90%",
        color:appStyle.fieldTextColor,
        height:appStyle.fieldHeight,
        alignSelf:'center',
        marginVertical:appStyle.fieldMarginVertical,
        fontSize:16,
        borderWidth:1,
        borderColor:color.BLUE,
        borderTopLeftRadius:0,
        borderTopRightRadius:12,
        borderBottomLeftRadius:12,
        borderBottomRightRadius:0,
    }
})