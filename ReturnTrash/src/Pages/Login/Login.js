import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native';
import EntrarButton from '../../Components/EntrarButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading';
import VoltarButtonLogin from '../../Components/VoltarButtonLogin';

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const entrar = () => {

        console.log('Entrar clicado')
        console.log('E-mail digitado:', { email }, 'Senha digitada:', { senha });

        if (email == '' && senha == '') {

            setVisible(true);
            setTimeout(() => {
                setVisible(false);
                navigation.navigate("HomePage");
                console.log('Estamos na HomePage')
            }, 500)
        } else {
            console.log('Erro ao realizar o login');
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
                    placeholder="E-mail"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    onChangeText={setSenha}
                    value={senha}
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
        //marginLeft: 8,
        flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    container3: {
        //marginTop: 40,
        //marginLeft: 20,
        flex: 1.5,
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
    },

    input: {
        width: 300,
        height: 50,
        margin: 12,
        borderWidth: 1.5,
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'white',
        color:'white'
    },

});