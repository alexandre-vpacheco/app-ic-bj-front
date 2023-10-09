import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import ButtonLogin from '../../Components/ButtonLogin';
import ButtonCadastro from '../../Components/ButtonCadastro';
import { useNavigation } from '@react-navigation/native';

export default function Inicial() {

    const navigation = useNavigation();

    const login = () => {
        console.log('Login clicado') 
        navigation.navigate('Login')    
    }

    const cadastro = () => {
        console.log('Cadastro clicado')
        navigation.navigate('Cadastro')  
    }

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.logo} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                }} />
                <ButtonLogin onpress={login} />
                <Text style={styles.txt}>ou</Text>
                <ButtonCadastro onpress={cadastro}/>
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
        fontSize: 20,
        color: 'white',
        marginTop: 10
    },

    logo: {
        marginTop: 240,
        width: 250,
        height: 58,
    }

});