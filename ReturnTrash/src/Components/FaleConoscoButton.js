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