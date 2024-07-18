import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { rutaAPI } from '../../constants/utils';

const { width } = Dimensions.get('window')

export default function EmpleadosPage() {
    const [empleados, setEmpleados] = useState([]);
    const leerServicio = async () => {
        try {
            const rutaServicio = rutaAPI + 'empleados.php'
            const response = await fetch(rutaServicio);
            const data = await response.json();
            setEmpleados(data);
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
        <View style={styles.item}>
            <ImageBackground source={{ uri: rutaAPI + 'fotos/' + item.foto }} style={styles.imagenEmpleado}>
                <View style={styles.container}>
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,1)']}
                        style={styles.background}>

                        <Text style={styles.itemTitulo}>{item.nombres} {item.apellidos}</Text>
                        <Text style={styles.itemSubtitulo}>{item.cargo}</Text>
                        <Text style={styles.ubicacion}>{item.ciudad}, {item.pais} </Text>

                    </LinearGradient>
                </View>
            </ImageBackground>
        </View>
    )
    return (
        <FlatList
            data={empleados}
            keyExtractor={item => item.idempleado}
            renderItem={renderItem}
            horizontal={true}
        />
    )
}
const styles = StyleSheet.create({
    background: {flex: 1, width: width, padding: SIZES.large, paddingTop: 150},
    container: { position: 'absolute', bottom: 0 },
    item: {
        flex: 1,
        width: width,
    },
    itemTitulo: {
        ...FONTS.h3,
        color: COLORS.colorBlanco
    },
    itemSubtitulo: {fontSize: 20, color: COLORS.colorBlanco },
    ubicacion: { color: COLORS.colorBlanco, },
    imagenEmpleado: {
        height: '100%',
        width: width,
        resizeMode: 'cover'
    }
})