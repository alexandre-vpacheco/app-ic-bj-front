import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native'



const DescartarButton = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
            onPress={onpress} >
            <Text style={styles.buttonText}>Quero descartar!</Text>
        </TouchableOpacity>

    )
}

export default DescartarButton

const styles = StyleSheet.create({

    button: {
        marginTop: 50,
        backgroundColor: '#204722',
        borderRadius: 45,
        width: 320,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 15,
        color:'white',
        fontWeight:'bold',
        marginLeft: -15,
    }
})