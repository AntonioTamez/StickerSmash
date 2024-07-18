import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { rutaAPI } from '../../constants/utils';

const { width } = Dimensions.get('window')
const cardWidth = (width / 2) - 20
const rutaImagen = require('./../../assets/images/nofoto.jpg')

export default function ProductosPage({ route, navigation }) {
    const { idcategoria, nombre } = route.params
    const [productos, setProductos] = useState([]);

    const leerServicio = async () => {
        try {
            const rutaServicio = rutaAPI + 'productos.php?idcategoria=' + idcategoria
            const response = await fetch(rutaServicio);
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.error(error);
        } finally {
            //setLoading(false);
        }
    };

    useEffect(() => {
        leerServicio();
    }, []);

    const renderItem = ({ item }) => {
        let porcentajeDescuento = (1 - item.preciorebajado/item.precio)*100;
        return(
        <TouchableOpacity style={styles.card} onPress={() => seleccionarProducto(item)}>
            <Image source={
                item.imagenchica === null ? rutaImagen
                :{ uri: rutaAPI + item.imagenchica}} style={styles.imagenProducto}/>
            <Text style={styles.itemTitulo}>{item.nombre}</Text>
            <Text style={styles.itemSubtitulo}>
                S/ {item.preciorebajado === '0' ? Number(item.precio).toFixed(2) : Number(item.preciorebajado).toFixed(2) }
            </Text>
            {item.preciorebajado === '0' ?<></>:<Text style={styles.precioAnterior}>S/ {Number(item.precio).toFixed(2)}</Text>}

            {item.preciorebajado === '0' ?<></>:<Text style={styles.porcentajeDescuento}>{Number(porcentajeDescuento).toFixed(0)+'%'}</Text>}
        </TouchableOpacity>
    )}

    const seleccionarProducto = (item) => {
        navigation.navigate('ProductoDetalle',{
            idproducto: item.idproducto,
            nombre: item.nombre, 
        })
    }

    return (
        <View>
            <Text style={styles.tituloPagina}>{nombre}</Text>
            <FlatList
                data={productos}
                keyExtractor={idproducto => idproducto.idproducto}
                renderItem={renderItem}
                contentContainerStyle={styles.container}
                numColumns={2}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: { padding: SIZES.medio, paddingBottom: 100 },
    card: {
        flex: 1,
        backgroundColor: COLORS.colorBlanco,
        padding: SIZES.medio,
        margin: SIZES.small,
        borderRadius: SIZES.base,
        
        elevation: 2,//Android

        //IOS
        shadowColor: COLORS.colorNegro,
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.8,

        maxWidth: cardWidth,
        position: 'relative',
    },
    itemTitulo: {
        ...FONTS.h3,
        textAlign:'center',
    },
    itemSubtitulo: {
        fontSize: 20,
        textAlign:'center',
    },
    tituloPagina: {
        ...FONTS.h1,
        textAlign: 'center',
    },
    imagenProducto: {
        height: 160,
        width:'100%',
        resizeMode: 'cover',
    },
    precioAnterior:{
        textAlign: 'center',
        textDecorationLine: 'line-through',
    },
    porcentajeDescuento: {
        position: 'absolute',
        backgroundColor: COLORS.color3,
        color: COLORS.colorBlanco,
        right: 0,
        top: 0,
        paddingHorizontal: SIZES.medio,
        paddingVertical: SIZES.base,
    },

})