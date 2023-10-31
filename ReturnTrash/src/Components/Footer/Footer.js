import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'



const Footer = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.planeta} source={{
                uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/fbefb7f6e93babdc78188db1db6494fead2d395c/ReturnTrash/assets/planeta.png',
            }} />

            <Image style={styles.insta} source={{
                uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/fbefb7f6e93babdc78188db1db6494fead2d395c/ReturnTrash/assets/logoInsta.png',
            }} />
        </View>

    )
}

export default Footer

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#B7DA00',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    body: {
        flex: 1,
        backgroundColor: '#B7DA00',
        justifyContent: 'center',
        alignItems: 'center'
    },

    footerText: {
        fontSize: 18,
        marginLeft: 50,
        fontWeight: 'bold',
        color: 'white'

    },

    footer: {
        backgroundColor: '#B7DA00',
        justifyContent: 'center',
        alignItems: 'center',
    },

    planeta:{
        marginRight:30,
        marginTop:30,
        height: 48,
        width: 120
    },

    insta:{
        marginLeft:30,
        marginTop:30,
        height: 30,
        width: 150
    }

})