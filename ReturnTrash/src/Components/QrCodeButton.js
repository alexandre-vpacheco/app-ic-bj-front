import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

const QrCodeButton = ({ onpress }) => {



    return (
            <TouchableOpacity
                onPress={onpress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>QR Code</Text>
                    <Image style={styles.logoQrCode} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/4d85b3700787e805112e75e800658e7954cfddd9/ReturnTrash/assets/qrCode.png',
                    }} />
                </View>
            </TouchableOpacity>        
    )
}

export default QrCodeButton

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
        marginRight: 70,
        marginLeft: 50,
        marginTop: 0,
    },

    logoQrCode: {
        marginTop: -1,
        marginLeft: 20,
        marginRight: -35,
        width: 70,
        height: 70,
        borderRadius: 30,
        borderColor: '#204722',
    }

})