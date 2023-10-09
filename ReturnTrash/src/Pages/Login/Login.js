import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

export default function Login() {

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.logo} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                }} />

                <Text style={styles.txt}>Usuário ou e-mail</Text>
                <Text style={styles.txt}>Senha</Text>
                <Text style={styles.txt}>ENTRAR</Text>

            </View>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    txt: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
        marginTop: 100,
        alignItems: 'center'
    },

    logo: {
        marginTop: 240,
        width: 250,
        height: 58,
    }

});