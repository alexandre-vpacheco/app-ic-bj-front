import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';


const CpfButton = ({ onpress }) => {
    return (
        <TouchableOpacity 
            onPress={onpress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Vincule seu CPF no caixa</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CpfButton

const styles = StyleSheet.create({

    button: {
        marginTop: 10,
        backgroundColor: '#204722',
        borderRadius: 35,
        width: 350,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        //marginLeft: -30,
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 15,
    },

    logoDescarte: {
        marginTop: -2,
        width: 65,
        height: 65,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderWidth: 4,
        borderRadius: 30,
        borderColor: '#204722',
    }

})