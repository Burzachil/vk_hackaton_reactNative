import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Separator} from "../UI/Separator";
import {AppText} from "../UI/AppText";

export const Header = ({title, separatorInvisible = false, left = <View />, right = <View />}) => {
    return (
        <View style={style.container}>
            <View style={style.block}>
                {left}
                <AppText style={style.text}>{title}</AppText>
                {right}
            </View>
            {separatorInvisible ? null : <Separator/>}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 350,
        width: '100%',
        marginTop: 30,
        marginBottom: 4,
        alignItems: 'center'
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
        alignItems: 'center'
    },
    text: {
        paddingVertical: 14,
        fontSize: 26,
        fontFamily: 'roboto-bold'
    }
})