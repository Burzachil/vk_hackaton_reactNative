import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {THEME} from "../../theme"
import {Ionicons} from '@expo/vector-icons'

export const BackArrowButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={style.default}>
            <View >
                <Ionicons name="ios-arrow-back" size={36} color={THEME.BUTTON_ARROW}/>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    default: {
        alignSelf: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 10,
        position: 'absolute',
        left: 0
    }
})