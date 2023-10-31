import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const ButtonLogin = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={onpress}>
            <Text style={styles.buttonText}>Fazer Login</Text>
        </TouchableOpacity>

    )
}

export default ButtonLogin

const styles = StyleSheet.create({

    button: {
        marginTop: 200,
        backgroundColor: '#F5F6F6',
        borderRadius: 35,
        width: 190,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8
    },

    buttonText: {
        fontSize: 17
    }
})