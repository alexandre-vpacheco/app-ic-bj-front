import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Alert, SafeAreaView } from 'react-native';
import EntrarButton from '../../Components/EntrarButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading';
//import VoltarButtonLogin from '../../Components/VoltarButtonLogin';
//import fetch from 'node-fetch';
import { useUser } from '../../Context/UserContext';
//import { KeyboardAvoidingView } from 'react-native';

export default function Login() {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const { login } = useUser();

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    //const [nome, setNome] = useState('');

    const entrar = () => {

        if (username == '' || password == '') {
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
            }, 500)
            Alert.alert('Aviso', 'Os campos não podem estar vazios!')
        } else {
            setVisible(true);
            login(username, password);
            setTimeout(() => {
                setVisible(false);
            }, 1500)
        }
    }

    const voltar = () => {
        console.log('Voltar clicado')
        setVisible(true);
        setTimeout(() => {
            navigation.navigate('Inicial')
            setVisible(false);
            console.log('Voltamos para a tela inicial')
        }, 500)

    }

    return (
        <>
            <Loading visible={visible} />
            <View style={styles.container}>
                <Image style={styles.logo} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                }} />
                <View style={styles.body}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                      //onChangeText={(text) => setUsername(text)}
                        onChangeText={setUsername}
                        value={username}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttons}>
                    <EntrarButton onpress={entrar} />
                </View>
            </View>

        </>
    );
}

const styles = StyleSheet.create({

    flexStyle: {
        flex: 1,
        backgroundColor: '#856192'
    },

    container: {
        flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    body: {
        marginTop: 180,
        marginBottom: 10,
        //marginLeft: 8,
        //flex: 1,
        backgroundColor: '#856192',
        //alignItems: 'center',
        justifyContent: 'center',
    },

    buttons: {
        marginTop: -20,
        marginBottom: 100,
        flexDirection: 'column',
        flex: 1,
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
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        color: 'white',
    },

});