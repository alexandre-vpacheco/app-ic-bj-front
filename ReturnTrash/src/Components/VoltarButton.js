import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const VoltarButton = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
           onPress={onpress} >
            <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

    )
}

export default VoltarButton

const styles = StyleSheet.create({

    button: {
        marginTop: 10,
        backgroundColor: '#F5F6F6',
        borderRadius: 15,
        width: 190,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 17
    }
})