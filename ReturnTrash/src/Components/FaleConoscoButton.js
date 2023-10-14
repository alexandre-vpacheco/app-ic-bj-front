import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native'



const FaleConoscoButton = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={onpress} >
            <Text style={styles.buttonText}>Fale Conosco!</Text>
        </TouchableOpacity>
    )
}

export default FaleConoscoButton

const styles = StyleSheet.create({

    button: {
        marginTop: 18,
        backgroundColor: '#204722',
        borderRadius: 45,
        width: 350,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 15,
        color:'white',
        fontWeight:'bold',
        marginLeft: -40,
        
    }
})