import React from 'react'
import {TextInput,Text, StyleSheet} from 'react-native'
import {appStyle, color} from '../../Utility'

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
    return(
        <TextInput
            style={[styles.input,inputStyle]}
            value={value}
            numberOfLines={numberOfLines}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={color.PLACEHOLDER}
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
        backgroundColor:appStyle.fieldBgColor,
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
        borderBottomRightRadius:0
    }
})