import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import Button from '../../components/Button';
import { rutaAPI } from '../../constants/utils';
import Toast from 'react-native-simple-toast'

export default function DirectoresInsertPage({ navigation }) {
    const [nombres, setNombres] = useState('')
    const [peliculas, setPeliculas] = useState('')

    const registrarDirector = async() => {
        console.log(nombres + "-" + peliculas)
        try {
            const rutaServicio = rutaAPI + 'directoresinsert.php'

            const formData = new FormData()
            formData.append('nombres', nombres)
            formData.append('peliculas', peliculas)

            const response = await fetch(rutaServicio, {
                method: 'POST',
                body: formData,
            });
            const data = await response.text();
            console.log(data)
            Toast.show("Nuevo director con codigo " + data, Toast.LONG)
            navigation.navigate('Directores')
        } catch (error) {
            console.error(error);
        } finally {
            //setLoading(false);
        }
    }

return (
    <View style={styles.container}>
        <Text style={styles.textoEnorme}>Nuevo Director</Text>
        <TextInput style={styles.input}
            value={nombres}
            onChangeText={setNombres}
            placeholder='Nombre del director' />
        <TextInput style={styles.input}
            value={peliculas}
            onChangeText={setPeliculas}
            placeholder='Pelìculas' />
        <Button title='Registrar' onPress={registrarDirector} />
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