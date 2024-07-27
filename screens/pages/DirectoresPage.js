import { Text, FlatList, TouchableOpacity, StyleSheet, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { rutaAPI } from '../../constants/utils';
import { useFocusEffect } from '@react-navigation/native';

export default function DirectoresPage({ navigation }) {

    const [directores, setDirectores] = useState([]);

    const leerServicio = async () => {
        try {
            const rutaServicio = rutaAPI + 'directores.php'
            const response = await fetch(rutaServicio);
            const data = await response.json();
            setDirectores(data);
        } catch (error) {
            console.error(error);
        } finally {
            //setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            leerServicio();
        })
    );

    const seleccionarDirector = (item) => {
        navigation.navigate('DirectoresEdit',{
            iddirector: item.iddirector,
            nombres: item.nombres,
            peliculas: item.peliculas,
        })
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => seleccionarDirector(item)}>
            <Text style={styles.itemTitulo}>{item.iddirector}</Text>
            <View>
                <Text style={styles.itemSubtitulo}>{item.nombres}</Text>
                <Text>{item.peliculas}</Text>
            </View>
        </TouchableOpacity>
    )

    const nuevoDirector = () => {
        navigation.navigate('DirectoresInsert')
    }

    return (
        <View>
            <FlatList
                data={directores}
                keyExtractor={item => item.iddirector}
                renderItem={renderItem}
                contentContainerStyle={styles.container}
            />
            <TouchableOpacity style={styles.fab} onPress={nuevoDirector}>
                <Text  style={styles.fabIcon}>+</Text> 
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    fab:{
        position: 'absolute',
        backgroundColor: COLORS.color4,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        elevation: 8,
    },
    fabIcon:{
        fontSize: 24,
        color: COLORS.colorBlanco,        
    },
    container: { padding: SIZES.medio },
    item: {
        flex: 1,
        borderBottomColor: COLORS.color3,
        borderBottomWidth: 1,
        padding: SIZES.medio,
        flexDirection: 'row',
    },
    itemTitulo: {
        ...FONTS.h3,
        color: COLORS.color3,
        padding: SIZES.base,
        paddingRight: SIZES.large
    },
    itemSubtitulo: {
        fontSize: 20,
    },
})