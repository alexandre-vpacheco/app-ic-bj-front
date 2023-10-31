import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';


const DescartarButton = ({ onpress }) => {
    return (
        <TouchableOpacity 
            onPress={onpress}>
            <View style={styles.button}>
                <Image style={styles.logoDescarte} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/9a8674ef8d1f9639a6b3f86bdf9edecc0d52d97b/ReturnTrash/assets/logoDescarte.png',
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
        marginTop: 40,
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

    logoDescarte: {
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