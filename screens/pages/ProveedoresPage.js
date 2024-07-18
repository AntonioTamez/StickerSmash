import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { rutaAPI } from '../../constants/utils';

export default function ProveedoresPage() {

    const [proveedores, setProveedores] = useState([]);

    const leerServicio = async () => {
        try {
            const rutaServicio =  rutaAPI + 'proveedores.php'
            const response = await fetch(rutaServicio);
            const data = await response.json();
            setProveedores(data);
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
        <TouchableOpacity style={styles.item}>
            <Text style={styles.itemTitulo}>{item.nombreempresa}</Text>
            <Text style={styles.itemSubtitulo}>{item.nombrecontacto}, {item.cargocontacto}</Text>
            <Text>{item.ciudad}, {item.pais}</Text>
        </TouchableOpacity>
    )
    return (
        <FlatList
            data={proveedores}
            keyExtractor={item => item.idproveedor}
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