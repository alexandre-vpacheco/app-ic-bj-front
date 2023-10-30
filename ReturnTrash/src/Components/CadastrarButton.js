import React from "react";
import { StyleSheet, Text, TouchableOpacity} from 'react-native'



const CadastrarButton = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
           onPress={onpress} >
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

    )
}

export default CadastrarButton

const styles = StyleSheet.create({

    button: {
        marginTop: 5,
        backgroundColor: '#F5F6F6',
        borderRadius: 35,
        width: 170,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8
    },

    buttonText: {
        fontSize: 17
    }
})