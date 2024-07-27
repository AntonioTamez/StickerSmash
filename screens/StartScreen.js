import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { FONTS } from '../constants/theme';
import Button from '../components/Button';

const rutaImagen = require('./../assets/images/foto_empezar.jpg')

//Asi se define el componente
export default function StartScreen({ navigation }) {
    return (
        <View style={{ alignItems: 'center' }}>
            {/* Este es un comentario */}
            <Image source={rutaImagen} 
                style={styles.fotoEmpezar}
                resizeMode='contain'
                />
            <Text style={styles.textoEnorme}>Empezar</Text>
            <View style={styles.contenedorBotones}>
                <Button title='Términos y condiciones'
                    onPress={() => navigation.navigate('Terminos')}/>
                <Button title='Escritorio'
                    onPress={() => navigation.navigate('Escritorio')}/>
            </View>
            <Button title='Mapa'
                    onPress={() => navigation.navigate('Envios')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    fotoEmpezar: {
        height: 300
    },
    textoEnorme: {
        ...FONTS.h1,
        textAlign: 'center',
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30,
    }
});