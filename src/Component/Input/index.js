import React from 'react'
import {TextInput,Text} from 'react-native'
import styles from './style'
import {color} from '../../Utility'

export default({
    placeholder,
    inputStyle,
    placeholderTextColor,
    secureTextEntry,
    onChangeEditing,
    onChangeText,
    value,
    onSubmitEditing,
    onBlur,
    onFocus,
    numberOfLines,
})=>(
    <TextInput
        style={[styles.input,inputStyle]}
        value={value}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={
            placeholderTextColor?placeholderTextColor:color.WHITE
        }
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}
        onFocus={onFocus}
    />
)