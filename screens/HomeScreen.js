import { View, Text } from 'react-native'
import React from 'react'
import Inicio from '../components/Inicio'
import Button from '../components/Button'

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Inicio/>
            <Button 
                title='Empezar'
                onPress = {() => navigation.navigate('Start')}/>
        </View>
    )
}