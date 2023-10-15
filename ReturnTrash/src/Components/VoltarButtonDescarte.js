import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const VoltarButtonDescarte = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
           onPress={onpress} >
            <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

    )
}

export default VoltarButtonDescarte

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#F5F6F6',
        borderRadius: 15,
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 17,    
    }
})