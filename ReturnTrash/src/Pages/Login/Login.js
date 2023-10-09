import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import VoltarButton from '../../Components/VoltarButton';
import EntrarButton from '../../Components/EntrarButton';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation();

    const entrar = () => {
        console.log('Entrar clicado')
        navigation.navigate('HomePage')
    }
    
    const voltar = () => {
        navigation.navigate('Inicial')

    }

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.logo} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                }} />
                <Text style={styles.txt}>Usuário ou e-mail</Text>
                <Text style={styles.txt}>Senha</Text>
                <EntrarButton onpress={entrar}/>
                <VoltarButton onpress={voltar}/>
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