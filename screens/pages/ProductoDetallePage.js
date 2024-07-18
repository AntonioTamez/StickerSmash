import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FONTS } from '../../constants/theme'
import HTMLView from 'react-native-htmlview'
import { rutaAPI } from '../../constants/utils'

const rutaImagen = require('./../../assets/images/nofoto.jpg')

export default function ProductoDetallePage({ route }) {
    const { idproducto, nombre } = route.params
    const [productoSeleccionado, setProductoSeleccionado] = useState([]);

    const leerServicio = async () => {
        try {
            const rutaServicio = rutaAPI + 'productos.php?idproducto=' + idproducto
            const response = await fetch(rutaServicio);
            const data = await response.json();
            setProductoSeleccionado(data[0]);
            console.log(data)
        } catch (error) {
            console.error(error);
        } finally {
            //setLoading(false);
        }
    };

    useEffect(() => {
        leerServicio();
    }, []);

    return (
        <View>
            <Image source={
                productoSeleccionado.imagengrande === null ? rutaImagen
                    : { uri: rutaAPI + productoSeleccionado.imagengrande }} style={styles.imagenProducto} />
            <Text style={styles.tituloPagina}>{nombre}</Text>
            <Text>{productoSeleccionado.detalle}</Text>
            <Text>{productoSeleccionado.categoria}</Text>
            <Text>{productoSeleccionado.proveedor}</Text>
            <Text style={styles.itemSubtitulo}>
                S/ {productoSeleccionado.preciorebajado === '0' ? Number(productoSeleccionado.precio).toFixed(2) : Number(productoSeleccionado.preciorebajado).toFixed(2)}
            </Text>
            {productoSeleccionado.preciorebajado === '0' ? <></> : <Text style={styles.precioAnterior}>S/ {Number(productoSeleccionado.precio).toFixed(2)}</Text>}

            <HTMLView
                value={productoSeleccionado.descripcion} stylesheet={htmlstyle}
            />
        </View>
    )
}

const htmlstyle = StyleSheet.create({
    p: {
        marginBottom: -20,
    }
})

const styles = StyleSheet.create({
    tituloPagina: {
        ...FONTS.h2,
        textAlign: 'center',
    },
    imagenProducto: {
        height: 400,
        width: '100%',
        resizeMode: 'cover',
    },
    itemSubtitulo: {
        fontSize: 20,
        textAlign: 'center',
    },
    precioAnterior: {
        textAlign: 'center',
        textDecorationLine: 'line-through',
    },
})