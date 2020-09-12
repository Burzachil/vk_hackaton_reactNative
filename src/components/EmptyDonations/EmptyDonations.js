import React from 'react'
import {View, StyleSheet} from 'react-native'
import {AppText} from "../UI/AppText";
import {THEME} from "../../theme";
import {AppButton} from "../UI/AppButton";
import {Header} from "../Header/Header";

export const EmptyDonations = ({setCreate}) => {
    return (
        <View style={styles.default}>
            <Header title='Пожертвования'/>
            <View style={styles.container}>
                <AppText style={styles.text}>У Вас пока нет сборов.</AppText>
                <AppText style={styles.text}>Начните доброе дело.</AppText>
                <AppButton style={styles.button} textStyle={styles.buttonText} onPress={() => setCreate(true)}>Создать сбор</AppButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: THEME.GREY_COLOR_TEXT,
        lineHeight: 25,
        fontSize: 20
    },
    button: {
        width: 133,
        height: 36,
        marginTop: 26
    },
    buttonText: {
        fontSize: 15
    }
})