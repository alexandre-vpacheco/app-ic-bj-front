import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import ButtonLogin from '../../Components/ButtonLogin';
import ButtonCadastro from '../../Components/ButtonCadastro';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading';

export default function Inicial() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const login = () => {
        console.log('Login clicado')
        setVisible(true);
        setTimeout(()=>{
            setVisible(false);
            navigation.navigate('Login')   
            console.log('Entramos na tela de login')
        }, 500)
        
    }

    const cadastro = () => {
        console.log('Cadastro clicado')
        setVisible(true);
        setTimeout(()=>{
            setVisible(false);
            navigation.navigate('Cadastro')   
            console.log('Entramos na tela de cadastro')
        }, 500)
        
    }

    return (
        <>
            <View style={styles.container}>  
                <Image style={styles.logo} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                }} />
                <Loading visible={visible}/>
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