import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const SairButtonDescarte = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
           onPress={onpress} >
            <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>

    )
}

export default SairButtonDescarte

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#F5F6F6',
        borderRadius: 15,
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:30,
    },

    buttonText: {
        fontSize: 17,
        
    }
})