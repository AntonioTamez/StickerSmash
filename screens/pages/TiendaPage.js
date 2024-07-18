import { Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { rutaAPI } from '../../constants/utils';

export default function TiendaPage({ navigation }) {

    const [categorias, setCategorias] = useState([]);

    const leerServicio = async () => {
        try {
            const rutaServicio = rutaAPI + 'categorias.php'
            const response = await fetch(rutaServicio);
            const data = await response.json();
            setCategorias(data);
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
        <TouchableOpacity style={styles.item}  onPress={() => seleccionarCategoria(item)}>
            <ImageBackground source={{ uri: rutaAPI + item.foto}} style={styles.imagenCategoria}>
                <View style={styles.overlay}/>
                <Text style={styles.itemTitulo}>{item.nombre}</Text>
                <Text style={styles.itemSubtitulo}>{item.descripcion}</Text>
                <Text>Total: {item.total}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )

    const seleccionarCategoria = (item) => {
        navigation.navigate('Productos',{
            idcategoria: item.idcategoria,
            nombre: item.nombre, 
        })
    }

    return (
        <FlatList
            data={categorias}
            keyExtractor={item => item.idcategoria}
            renderItem={renderItem}
            contentContainerStyle={styles.container}
        />
    )
}
const styles = StyleSheet.create({
    container: { padding: SIZES.medio },
    item: {
        flex: 1,
        margin: SIZES.base,
    },
    itemTitulo: {
        ...FONTS.h3,
        color: COLORS.colorBlanco,
    },
    itemSubtitulo: {
        fontSize: 20,
        color: COLORS.colorBlanco,
    },
    imagenCategoria: {
        padding:30,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.7)',
    }
})