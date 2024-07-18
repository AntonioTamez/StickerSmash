import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/theme'

export default function DirectoresInsertPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.textoEnorme}>Nuevo Director</Text>
            <TextInput style={styles.input} placeholder='Nombre del director'/>  
            <TextInput style={styles.input} placeholder='Pelìculas'/>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.large,
        justifyContent: 'center',
    },
    textoEnorme: {
        ...FONTS.h1,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.colorGrisClaro,
        paddingHorizontal: SIZES.base,
        paddingVertical: SIZES.small,
        ...FONTS.body2,
        marginBottom: SIZES.base,
    }
})    