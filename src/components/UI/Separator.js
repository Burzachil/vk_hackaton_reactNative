import React from 'react'
import {View, StyleSheet} from 'react-native'
import {THEME} from "../../theme";

export const Separator = () => {
    return (
        <View style={style.default}>

        </View>
    )
}

const style = StyleSheet.create({
    default: {
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: THEME.GREY_COLOR
    }
})
