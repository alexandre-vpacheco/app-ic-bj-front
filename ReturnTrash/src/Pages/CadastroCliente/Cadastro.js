import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import CadastrarButton from '../../Components/CadastrarButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading';
import VoltarButtonCadastro from '../../Components/VoltarButtonCadastro';

export default function Cadastro() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const cadastrar = () => {
        setVisible(true);
        setTimeout(()=>{
            setVisible(false);
            navigation.navigate('Login')
        }, 500)  
    }

    const voltar = () => {
        setVisible(true);
        setTimeout(()=>{
            setVisible(false);
            navigation.navigate('Inicial')
        }, 500)
        
    }

    return (
        <>
            <View style={styles.container}>
        
                <Text style={styles.titleTxt}>PÁGINA DE CADASTRO DE CLIENTE</Text>

                <Text style={styles.titleTxt}>Nome:</Text>
                <Text style={styles.titleTxt}>Sobrenome:</Text>
                <Text style={styles.titleTxt}>E-mail:</Text>
                <Text style={styles.titleTxt}>Confirme o e-mail:</Text>
                <Text style={styles.titleTxt}>Senha:</Text>
                
                <Loading visible={visible}/>
                <CadastrarButton onpress={cadastrar}/>
                <VoltarButtonCadastro onpress={voltar}/>


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

    titleTxt: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        marginTop: 20
    },

    bodyTxt: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
        marginTop: 100,
        alignItems: 'center'
    }

});