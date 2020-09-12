import React from 'react'
import {View, StyleSheet} from 'react-native'
import {AppText} from "./AppText"
import { Ionicons } from '@expo/vector-icons'

export const DonationButton = ({type}) => {
    return (
        <View style={style.default}>
            <View style={style.container}>
                {type.icon}
                <View style={style.textContainer}>
                    <AppText style={style.title}>{type.title}</AppText>
                    <AppText style={style.subTitle}>{type.subTitle}</AppText>
                </View>
                <Ionicons name="ios-arrow-forward" size={24} color="black" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    default: {
        width: '90%'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        width: '70%'
    },
    title: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'roboto-bold'
    },
    subTitle: {
        color: '#6D7885',
        fontSize: 13,
    }
})