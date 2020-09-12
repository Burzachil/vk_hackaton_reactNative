import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {Header} from "../Header/Header"
import {BackArrowButton} from "../UI/BackArrowButton"
import {DonationButton} from "../UI/DonationButton";

export const CreateList = ({setCreate}) => {
    const donationsType = [
        {
            title: 'Целевой сбор',
            subTitle: 'Когда есть определенная цель',
            id: 'target'
        },
        {
            title: 'Регулярный Сбор',
            subTitle: 'Если помощь нужна ежемесячно',
            id: 'regular'
        }
    ]

    let content = donationsType.map(donation => {
        return (
            <DonationButton type={donation} key={donation.id}/>
        )
    })

    return (
        <View style={style.default}>
            <Header title='Тип сбора' left={<BackArrowButton onPress={() => setCreate(false)}/>}/>
            {content}
        </View>
    )
}

const style = StyleSheet.create({
    default: {
        alignItems: 'center'
    }
})