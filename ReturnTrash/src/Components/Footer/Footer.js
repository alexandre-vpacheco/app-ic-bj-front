import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.footerText}>ReturnTrash</Text>
        </View>

    )
}

export default Footer

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#B7DA00',
        flex: 1,
        justifyContent: 'center',

    },

    body: {
        flex: 1,
        backgroundColor: '#B7DA00',
        justifyContent:'center',
        alignItems:'center'
    },

    footerText:{
        fontSize: 18,
        marginLeft:50,
        fontWeight:'bold',
        color: 'white'

    },

    footer:{
        backgroundColor: '#B7DA00',
        justifyContent:'center',
        alignItems:'center'
    }

})