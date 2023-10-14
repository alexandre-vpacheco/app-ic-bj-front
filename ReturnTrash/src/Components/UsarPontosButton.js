import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native'



const UsarPontosButton = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={onpress} >
            <Text style={styles.buttonText}>Quero usar meus pontos agora!</Text>
        </TouchableOpacity>

    )
}

export default UsarPontosButton

const styles = StyleSheet.create({

    button: {
        marginTop: 10,
        backgroundColor: '#204722',
        borderRadius: 45,
        width: 320,
        height: 60,
        alignItems: 'flex-end',
        padding: 10,
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 15,
        color:'white',
        fontWeight:'bold',
    }
})