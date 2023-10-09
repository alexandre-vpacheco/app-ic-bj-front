import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ButtonCadastro = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>Cadastre-se</Text>
        </TouchableOpacity>
        
    )
}

export default ButtonCadastro

const styles = StyleSheet.create({

    button: {
        //marginBottom: -200,
        backgroundColor:'#F5F6F6',
        borderRadius: 15,
        width: 150,
        height: 40,
        alignItems: 'center',
        padding: 10,
        fontWeight: 'bold'    
    }
})