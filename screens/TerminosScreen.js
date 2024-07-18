import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import React from 'react'
import { FONTS } from '../constants/theme';

export default function TerminosScreen({ navigation }) {
    return (
        <View>
            <Text style={styles.textoEnorme}>Términos y condiciones</Text>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.parrafo}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo orci. Cras faucibus nisl sed rhoncus ornare. Aenean sodales nibh eget arcu euismod, at bibendum est aliquam. Aliquam lacus risus, mattis hendrerit tempor eget, sodales ut lacus. Aenean bibendum dignissim feugiat. Integer aliquet felis sit amet est auctor, id malesuada metus imperdiet. Etiam gravida nisi eget ante bibendum, eget commodo magna ultrices. Proin interdum dictum magna quis sagittis. Proin cursus iaculis mauris in efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Text>
                <Text style={styles.parrafo}>
                    Nulla in nibh vestibulum, feugiat lacus sodales, ullamcorper massa. Donec sodales tellus justo, sed feugiat enim luctus a. Sed bibendum nunc non iaculis eleifend. Aliquam non mattis ante. Nulla quis eros in leo hendrerit gravida non vel diam. Aenean metus ante, lobortis vitae sapien a, viverra vehicula enim. Donec sit amet nisi varius, viverra augue ac, ultrices eros. Curabitur nunc orci, eleifend eget dictum vel, blandit sed velit. Praesent id urna felis. Nam venenatis lectus eu ligula fringilla, a cursus velit suscipit.
                </Text>
                <Text style={styles.parrafo}>
                    Nulla vel diam finibus, condimentum risus id, condimentum lorem. Mauris eleifend risus in viverra elementum. Suspendisse aliquet blandit finibus. Praesent ante massa, varius quis lorem nec, sodales dictum est. Nunc molestie non lectus eu placerat. Morbi ac urna vitae erat lobortis interdum. Morbi in consequat sem, vitae pretium enim. Duis eget diam eros. Morbi semper eget risus et dictum. Morbi nec arcu diam.
                </Text>
                <Text style={styles.parrafo}>
                    Nulla sed enim congue, ultrices neque at, placerat est. Vestibulum orci ligula, mattis vehicula porta vitae, hendrerit ac ex. Fusce a tortor et sem posuere ultrices. Vestibulum eu sapien pharetra, gravida ante sed, euismod ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut quis ex pretium, fringilla lectus at, sagittis mauris. Curabitur pretium viverra egestas. Mauris purus ante, feugiat sit amet consequat id, venenatis quis risus. Pellentesque id felis sed eros cursus ultricies. In varius ipsum molestie augue pretium, eu auctor ex accumsan. Etiam gravida lectus nec dui feugiat elementum sed eu risus. Maecenas rhoncus urna non arcu dictum luctus.
                </Text>
                <Text style={styles.parrafo}>
                    Suspendisse semper tellus in enim viverra, et suscipit nunc finibus. Aliquam lacinia feugiat urna, id vehicula ipsum vulputate vitae. Sed vel venenatis dui, sit amet commodo dolor. Nulla non velit a purus molestie egestas. Sed ac tellus ut tellus pharetra pulvinar. Curabitur tincidunt metus quis magna dapibus auctor. Vivamus ultricies varius lectus eget dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ultrices, elit nec pharetra posuere, lorem felis facilisis tortor, eget placerat lectus nunc sit amet ex. Cras fermentum augue vitae neque elementum sodales.
                </Text>
                <Button title='Cerrar'
                    onPress={() => navigation.goBack()} />
                <View style={{ height: 300 }} />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    textoEnorme: {
        ...FONTS.h1,
        textAlign: 'center',
    },
    scrollView: {
        padding: 30,
    },
    parrafo: {
        marginBottom: 30,
    },
});