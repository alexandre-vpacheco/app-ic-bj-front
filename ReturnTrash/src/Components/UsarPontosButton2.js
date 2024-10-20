import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';


const UsarPontosButton2 = ({ onpress }) => {
    return (
        <TouchableOpacity 
            onPress={onpress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Usar Meus pontos</Text>
            </View>
        </TouchableOpacity>
    )
}

export default UsarPontosButton2

const styles = StyleSheet.create({

    button: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#204722',
        borderRadius: 45,
        width: 350,
        height: 70,
        //alignItems: 'flex-start',
        //justifyContent: 'center'
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

    logoUsarPontos: {
        marginTop: 2,
        width: 65,
        height: 65,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderWidth: 4,
        borderRadius: 30,
        borderColor: '#204722',
    }

})