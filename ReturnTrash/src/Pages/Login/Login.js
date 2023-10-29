import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native';
import EntrarButton from '../../Components/EntrarButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading';
import VoltarButtonLogin from '../../Components/VoltarButtonLogin';
import fetch from 'node-fetch';

export default function Login() {

    const [username, setUsername] = useState('');

    const [password, setSenha] = useState('');

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const entrar = async () => {

        if (username == '' || password == '') {
            Alert.alert('Aviso', 'Os campos não podem estar vazios!')
        } else {

            const url = "http://localhost:5000/api/auth/login";

            const dadosUsuario = {
                username: username,
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
                    console.log('Erro na requisição:', response.status);
                } else {
                    if (response.ok) {
                        const data = await response.json();
                        alert('Login bem-sucedido!', data);
                        setVisible(true);
                        setTimeout(() => {
                            setVisible(false);
                            navigation.navigate('HomePage', { nome: data.nameid });
                        }, 500)
                    } else {
                        Alert.alert('Login falhou! Usuário já existe ou dados incorretos.');
                        return;
                    }
                }
            } catch (error) {
                console.error('Erro na requisição de login:', error);
            }
        }

    }

    const voltar = () => {
        console.log('Voltar clicado')
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Inicial')
            console.log('Voltamos para a tela inicial')
        }, 500)

    }

    return (

        <View style={styles.container1}>
            <Image style={styles.logo} source={{
                uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
            }} />
            <Loading visible={visible} />
            <View style={styles.container2}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={setUsername}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    onChangeText={setSenha}
                    value={password}
                    secureTextEntry
                />
            </View>
            <View style={styles.container3}>
                <EntrarButton onpress={entrar} />
                <VoltarButtonLogin onpress={voltar} />
            </View>
        </View>


    );
}

const styles = StyleSheet.create({

    container1: {
        flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    container2: {
        marginTop: 210,
        //marginLeft: 8,
        flex: 1,
        backgroundColor: '#856192',
        //alignItems: 'center',
        justifyContent: 'center',
    },

    container3: {
        marginTop: 50,
        marginBottom: 70,
        flexDirection: 'column',
        //flex: 0.33,
        backgroundColor: '#856192',
        //alignItems: 'center',
        justifyContent: 'center',
    },

    txt: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
        marginTop: 100,
        alignItems: 'center'
    },

    logo: {
        marginTop: 190,
        width: 250,
        height: 58,
    },

    input: {
        width: 320,
        height: 60,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        color: 'white'
    },

});