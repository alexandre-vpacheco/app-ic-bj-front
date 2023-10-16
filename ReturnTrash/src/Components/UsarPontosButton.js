import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';


const UsarPontosButton = ({ onpress }) => {
    return (
        <TouchableOpacity 
            onPress={onpress}>
            <View style={styles.button}>
                <Image style={styles.logoDescarte} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/8d7912d4ae23ff87c045103da5b31f7692025e30/ReturnTrash/assets/logoPontos.png',
                }} />

                <Text style={styles.buttonText}>Quero usar meus pontos agora!</Text>
            </View>
        </TouchableOpacity>
    )
}

export default UsarPontosButton

const styles = StyleSheet.create({

    button: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#204722',
        borderRadius: 45,
        width: 380,
        height: 60,
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