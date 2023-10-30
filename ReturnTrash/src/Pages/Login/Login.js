import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Alert } from 'react-native';
import EntrarButton from '../../Components/EntrarButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading';
import VoltarButtonLogin from '../../Components/VoltarButtonLogin';
//import fetch from 'node-fetch';
import { useUser } from '../../Context/UserContext';

export default function Login() {

    const { login } = useUser();

    const [username, setUsername] = useState('');
    
    const [password, setPassword] = useState('');

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    //const [nome, setNome] = useState('');

    const entrar = async () => {

        //navigation.navigate('HomePage');

        if (username == '' || password == '') {
            Alert.alert('Aviso', 'Os campos não podem estar vazios!')
        } else {
            login(username, password);
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
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
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
        marginTop: 150,
        marginBottom: 70,
        //marginLeft: 8,
        flex: 1,
        backgroundColor: '#856192',
        //alignItems: 'center',
        justifyContent: 'center',
    },

    container3: {
        marginTop: -20,
        marginBottom: 100,
        flexDirection: 'column',
        //flex: 0.33,
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
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        color: 'white',
    },

});