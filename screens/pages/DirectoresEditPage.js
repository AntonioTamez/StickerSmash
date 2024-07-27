import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Button from '../../components/Button';
import { rutaAPI } from '../../constants/utils';
import Toast from 'react-native-simple-toast'

export default function DirectoresEditPage({ route, navigation }) {
    const { iddirector, nombres, peliculas } = route.params
    const [viddirector, setIddirector] = useState(iddirector);
    const [vnombres, setNombres] = useState(nombres);
    const [vpeliculas, setPeliculas] = useState(peliculas);

    const actualizarDirector = async() => {
        console.log(nombres + "-" + peliculas)
        try {
            const rutaServicio = rutaAPI + 'directoresupdate.php'

            const formData = new FormData()
            formData.append('iddirector', viddirector)
            formData.append('nombres', vnombres)
            formData.append('peliculas', vpeliculas)

            const response = await fetch(rutaServicio, {
                method: 'POST',
                body: formData,
            });
            Toast.show("Actualizado director con codigo " + viddirector, Toast.LONG)
            navigation.navigate('Directores')
        } catch (error) {
            console.error(error);
        } finally {
            //setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textoEnorme}>Editar Director</Text>
            <TextInput style={styles.input}
                value={viddirector}
                editable={false}
                />
            <TextInput style={styles.input}
                value={vnombres}
                onChangeText={setNombres}
                placeholder='Nombre del director' />
            <TextInput style={styles.input}
                value={vpeliculas}
                onChangeText={setPeliculas}
                placeholder='Pelìculas' />
            <Button title='Actualizar'  onPress={actualizarDirector} />
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