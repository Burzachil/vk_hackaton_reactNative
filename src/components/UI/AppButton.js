import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {THEME} from "../../theme";
import {AppText} from "./AppText";

export const AppButton = ({children, onPress, color = THEME.BUTTON_BLUE, style, textStyle}) => {

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={{...styles.default, backgroundColor: color, ...style}}>
                <AppText style={{...styles.text, ...textStyle}}>
                    {children}
                </AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    default: {
        marginVertical: 12,
        marginHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 22,
        color: '#fff'
    }
})