import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, TextInput, Button } from 'react-native';
import CadastrarButton from '../../Components/CadastrarButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading';
import VoltarButtonLogin from '../../Components/VoltarButtonLogin';
import VoltarButtonCadastro from '../../Components/VoltarButtonCadastro';
import fetch from 'node-fetch';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [password, setPassword] = useState('');

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const handleCadastro = async () => {

        if (nome === '' || username === '' || email === '' || password === '') {
            Alert.alert('Aviso', 'Todos os campos devem estar preenchidos!');
            return;
        }

        if (email !== confirmarEmail) {
            Alert.alert('Os e-mails preenchidos devem ser iguais!');
            return;
        }

        const url = "https://app-ic-bj-back-production.up.railway.app/api/auth/register";
        //const url = "localhost:5000/api/auth/register";

        const dadosUsuario = {
            nameid: nome,
            username: username,
            emails: email,
            password: password,
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosUsuario),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                Alert.alert('Erro na requisição:', errorMessage);
            } else {
                const data = await response.json();
                setTimeout(() => {
                    Alert.alert('Cadastro realizado!');
                }, 500);
                setVisible(true);
                setTimeout(() => {
                    setVisible(false);
                    navigation.navigate('Login');
                }, 500);

            }
        } catch (error) {
            console.log('Erro na requisição de cadastro:', error);
            Alert.alert('Erro na requisição de cadastro:', error.message);
        }
    };

    const handleVoltar = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Inicial')
        }, 500)
    }

    return (
        <>
            <Loading visible={visible} />
            <View style={styles.container}>
                <View style={styles.body}>

                    <TextInput
                        placeholder='Nome'
                        style={styles.input}
                        onChangeText={setNome}
                    />

                    <TextInput
                        placeholder='Username'
                        style={styles.input}
                        onChangeText={setUsername}
                    />

                    <TextInput
                        placeholder='E-mail'
                        style={styles.input}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <TextInput
                        placeholder='Confirmar E-mail:'
                        style={styles.input}
                        onChangeText={setConfirmarEmail}
                        keyboardType="email-address"
                    />

                    <TextInput
                        placeholder='Senha:'
                        style={styles.input}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <View style={styles.buttonsBox}>
                        <CadastrarButton onpress={handleCadastro} />
                        <VoltarButtonCadastro onpress={handleVoltar} />
                    </View>
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#856192',
        padding: 20,
    },

    body: {
        marginTop: 130
    },

    input: {
        height: 60,
        width: 'auto',
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        marginBottom: 10,
        padding: 10,
        borderRadius: 30
    },

    buttonsBox: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },

    bodyTxt: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center'
    }

});