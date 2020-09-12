import React, {useState} from 'react'
import {View} from 'react-native'
import {Header} from "./components/Header/Header";
import {EmptyDonations} from "./components/EmptyDonations/EmptyDonations";

export const MainLayout = ({setCreate}) => {

    const [donations, setDonations] = useState([])

    let content

    if (!donations.length) {
        content = <EmptyDonations setCreate={setCreate}/>
    }

    return (
        <View>
            {content}
        </View>
    )
}