import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme'


export default function Button(props) {
    return (
        <View>
            <Pressable style={styles.roundButton}
                onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: COLORS.color1
    },
    roundButton:{
        backgroundColor: COLORS.color3,
        alignItems: 'center',
        paddingVertical: SIZES.base,
        paddingHorizontal: SIZES.medio,
        borderRadius: SIZES.large
    },
    buttonText: {
        color: COLORS.colorBlanco,
        ...FONTS.body2
    }
})
