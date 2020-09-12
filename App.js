import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

import {MainLayout} from "./src/MainLayout";
import {CreateList} from "./src/components/CreateList/CreateList";

async function loadApplication() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
}

export default function App() {

    const [isReady, setIsReady] = useState(false)
    const [create, setCreate] = useState(false)

    let content = <MainLayout setCreate={setCreate}/>

    if (create) {
        content = <CreateList setCreate={setCreate}/>
    }

    if (!isReady) {
        return <AppLoading
            startAsync={loadApplication}
            onError={err => console.log(err)}
            onFinish={() => setIsReady(true)}
        />
    }

    return (
        <View style={styles.container}>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
});
