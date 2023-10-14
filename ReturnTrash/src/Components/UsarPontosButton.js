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
        marginTop: 5,
        backgroundColor: '#204722',
        borderRadius: 10,
        width: 310,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 17,
        color:'white'
    }
})