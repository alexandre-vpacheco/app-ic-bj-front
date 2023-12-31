import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';


const CpfButton = ({ onpress }) => {
    return (
        <TouchableOpacity 
            onPress={onpress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Vincule seu CPF no caixa</Text>
                <Image style={styles.logoTablet} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/397bf886c227f48663d24ad3ba2904125b13df0d/ReturnTrash/assets/tablet.png',
                }} />
            </View>
        </TouchableOpacity>
    )
}

export default CpfButton

const styles = StyleSheet.create({

    button: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#204722',
        borderRadius: 25,
        width: 350,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5,
        marginRight: 15,
    },

    logoTablet: {
        marginTop: -1,
        marginRight: -10,
        width: 70,
        height: 70,
        borderRadius: 30,
        borderColor: '#204722',
    }

})