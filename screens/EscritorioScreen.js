import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import Ionicons from '@expo/vector-icons/Ionicons';


const botonera = [
    { key: '1', text: 'Proveedores', icon: 'logo-dropbox' },
    { key: '2', text: 'Empleados', icon: 'people-sharp' },
    { key: '3', text: 'Tienda', icon: 'storefront-sharp' },
    { key: '4', text: 'Directores', icon: 'people-outline' },
    { key: '5', text: 'Area clientes', icon: 'person' },
    { key: '6', text: 'Salir', icon: 'log-out' },
]

export default function EscritorioScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => seleccionarOpcion(item)}>
            <Ionicons name={item.icon} size={SIZES.large} color={COLORS.colorBlanco} />
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    )

    const seleccionarOpcion = (item) => {
        switch (item.key) {
            case '1':
                navigation.navigate('Proveedores')
                break;
            case '2':
                navigation.navigate('Empleados')
                break;
            case '3':
                navigation.navigate('Tienda')
                break;
            case '4':
                navigation.navigate('Directores')
                break;
            case '5':
                navigation.navigate('Login')
                break;
            case '6':
                break;
        }
    }

    return (
        <View>
            <ImageBackground source={{ uri:"https://cdn.shedefined.com.au/wp-content/uploads/2022/04/14091506/How-to-save-money-on-groceries-as-food-prices-soar.jpg"}} 
                style={styles.fotoEmpezar}
                resizeMode='cover'>
                <Text style={styles.textoEnorme}>Escritorio</Text>    
            </ImageBackground>
            
            <FlatList
                data={botonera}
                keyExtractor={item => item.key}
                numColumns={2}
                renderItem={renderItem}
                contentContainerStyle={styles.container}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    textoEnorme: {
        ...FONTS.h1,
        textAlign: 'center',
        color: COLORS.colorBlanco
    },
    fotoEmpezar: {
        height: 300
    },
    container: {
        padding: SIZES.medio
    },
    item: {
        flex: 1,
        backgroundColor: COLORS.color2,
        padding: SIZES.large,
        margin: SIZES.small,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: COLORS.colorBlanco
    }
})