import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { appStyle, color } from '../../Utility'

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: color.BLUE,
        width: '85%',
        height: appStyle.btnHeight,
        borderRadius: appStyle.btnBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: appStyle.btnMarginVertical
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: appStyle.fieldTextColor
    }
})