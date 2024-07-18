import { Image, StyleSheet, Text, View } from "react-native";
import { FONTS } from "../constants/theme";

const rutaLogo = require("./../assets/images/logo.png");
export default function Inicio() {
    return (
        <View>
            <Image source={rutaLogo} style={styles.logo} />
            <Text style={styles.textoEnorme}>Hola</Text>
            <Text style={styles.textoSaludo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis tellus id nisi tincidunt volutpat non sit amet massa. Nunc nibh diam, vehicula eget elit id, mollis rutrum erat. Duis hendrerit sodales lectus et finibus.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textoEnorme: {
        ...FONTS.enorme,
        textAlign: 'center',
    },
    textoSaludo: {
        padding: 20,
        textAlign: 'center',
    },
    logo: {
        width: 320,
        height: 320,
        alignSelf:'center'
    },
});