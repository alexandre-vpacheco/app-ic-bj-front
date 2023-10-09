import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ButtonLogin = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>Fazer Login</Text>
        </TouchableOpacity>
        
    )
}

export default ButtonLogin

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