import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';


const DescartarButton = ({ onpress }) => {
    return (
        <TouchableOpacity 
            onPress={onpress}>
            <View style={styles.button}>
                <Image style={styles.logoDescarte} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/f788fede015eab7590c9ffd34f770f4462c67d28/ReturnTrash/assets/logoDescarte.png',
                }} />

                <Text style={styles.buttonText}>Quero descartar!</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DescartarButton

const styles = StyleSheet.create({

    button: {
        flexDirection: 'row',
        marginTop: 50,
        backgroundColor: '#204722',
        borderRadius: 45,
        width: 350,
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