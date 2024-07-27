import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import Button from '../../components/Button';
import { rutaAPI } from '../../constants/utils';
import Toast from 'react-native-simple-toast'
import axios from 'axios';

export default function LoginPage({ navigation }) {
    const [usuario, setUsuario] = useState('')
    const [clave, setClave] = useState('')
    
const iniciarSesion = async() => {
    try {
        const rutaServicio = rutaAPI + 'iniciarsesion.php'

        const formData = new FormData()
        formData.append('usuario', usuario)
        formData.append('clave', clave)

        /*
        const response = await fetch(rutaServicio, {
            method: 'POST',
            body: formData,
        });
        const data = await response.text();
        */
        const response = await axios.post(rutaServicio, formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        })
        console.log(response.data)
        
    } catch (error) {
        console.error(error);
    } finally {
        //setLoading(false);
    }
}


return (
    <View style={styles.container}>
        <Text style={styles.textoEnorme}>Iniciar sesión</Text>
        <TextInput style={styles.input}
            value={usuario}
            onChangeText={setUsuario}
            placeholder='Nombre de usuario' />
        <TextInput style={styles.input}
            value={clave}
            secureTextEntry={true}
            onChangeText={setClave}
            placeholder='Contraseña' />
        <Button title='Iniciar sesión' onPress={iniciarSesion}/>
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