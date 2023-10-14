import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import DescartarButton from '../../Components/DescartarButton';
import UsarPontosButton from '../../Components/UsarPontosButton';
import FaleConoscoButton from '../../Components/FaleConoscoButton';
import SairButton from '../../Components/SairButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading';

export default function HomePage() {

    const [visible, setVisible] =  useState(false);

    const navigation = useNavigation();

    const descarte = () => {
        navigation.navigate('Descarte')
    }

    const pontos = () => {
        navigation.navigate('Pontos')
    }

    const contato = () => {
        navigation.navigate('Contato')
    }

    const sair = () => {
        setVisible(true);
        setTimeout(()=>{
            setVisible(false);
            navigation.navigate('Inicial')
        }, 500) 
        
    }

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.logo} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                }} />
                <Text style={styles.txt}>BEM VINDO A HOME, FULANO!</Text>

                <DescartarButton onpress = {descarte}/>
                <UsarPontosButton onpress = {pontos}/>
                <FaleConoscoButton onpress = {contato} />
                <SairButton onpress={sair}/>

                <Loading visible = {visible}/>
                <Text style={styles.saldoTxt}>Saldo disponível: 10 pontos</Text>
                <div>
                <Image style={styles.footer} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/e7c5deab2b4c56209f2a7448ced4bc8f1a083602/ReturnTrash/assets/footer.jpg',
                }} />
                </div>
                
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

    logo: {
        marginBottom: 10,
        width: 250,
        height: 58,
    },

    txt: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        marginTop: 20,
        alignItems: 'center'
    },

    optionsTxt: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginTop: 50,
        fontWeight: 'bold'
    },

    saldoTxt: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginTop: 200,
        fontWeight: 'bold'
    },

    footer: {
        marginBottom: -450,
        width: 350,
        height: 100,
    }

});