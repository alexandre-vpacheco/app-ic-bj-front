import React from "react";
import { StyleSheet, Text, TouchableOpacity} from 'react-native'



const EnviarButton = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
           onPress={onpress} >
            <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

    )
}

export default EnviarButton

const styles = StyleSheet.create({

    button: {
        marginTop: 15,
        backgroundColor: '#204722',
        borderRadius: 15,
        width: 170,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
    },

    buttonText: {
        fontSize: 17,
        color: 'white'
    }
})