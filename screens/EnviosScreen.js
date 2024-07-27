import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { rutaAPI } from '../constants/utils';

export default function EnviosScreen({navigation}) {
    
    const [envios, setEnvios] = useState([]);

    const leerServicio = async () => {
        try {
            const rutaServicio =  rutaAPI + 'envios.php'
            const response = await fetch(rutaServicio);
            const data = await response.json();
            setEnvios(data);
        } catch (error) {
            console.error(error);
        } finally {
            //setLoading(false);
        }
    };

    useEffect(() => {
        leerServicio();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => seleccionarEnvio(item)}>
            <Text style={styles.itemTitulo}>{item.nombre}</Text>
            <Text style={styles.itemSubtitulo}>{item.latitud}, {item.longitud}</Text>
        </TouchableOpacity>
    )


    const seleccionarEnvio = (item) => {
        navigation.navigate('Mapa',{
            nombre: item.nombre,
            latitud: item.latitud, 
            longitud: item.longitud, 
            telefono: item.telefono,  
        })
    }


    return (
        <FlatList
            data={envios}
            keyExtractor={item => item.idempresaenvio}
            renderItem={renderItem}
            contentContainerStyle={styles.container}
        />
    )
}
const styles = StyleSheet.create({
    container: { padding: SIZES.medio },
    item: {
        flex: 1,
        borderBottomColor: COLORS.color3,
        borderBottomWidth: 1,
        padding: SIZES.large,
        margin: SIZES.small,
    },
    itemTitulo: {
        ...FONTS.h3,
        color: COLORS.color3
    },
    itemSubtitulo: {
        fontSize: 20,
    },
})