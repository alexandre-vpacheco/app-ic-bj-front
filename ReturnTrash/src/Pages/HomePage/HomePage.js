import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import DescartarButton from '../../Components/DescartarButton';
import UsarPontosButton from '../../Components/UsarPontosButton';
import FaleConoscoButton from '../../Components/FaleConoscoButton';
import SairButton from '../../Components/SairButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading';

export default function HomePage() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const descarte = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Descarte')
        }, 500) 
    }

    const pontos = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Pontos')
        }, 500) 
        
    }

    const contato = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Contato')
        }, 500)   
    }

    const sair = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Inicial')
        }, 500)
    }

    return (
        <>
            <View style={styles.container1}>
                <View>
                    <Image style={styles.logo} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} />
                </View>
                <Text style={styles.txt}>Bem-vindo(a), Fulano! Como você irá ajudar o planeta hoje?</Text>
                <Text style={styles.saldoTxt}>Saldo disponível: 10 Pontos</Text>
                <DescartarButton onpress={descarte} />
                <UsarPontosButton onpress={pontos} />
                <FaleConoscoButton onpress={contato} />
                <SairButton onpress={sair} />

                <Loading visible={visible} />
                
            </View>
            <View >
                <Image style={styles.footer} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/e7c5deab2b4c56209f2a7448ced4bc8f1a083602/ReturnTrash/assets/footer.jpg',
                }} />
            </View>
        </>
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
        flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    logo: {
        marginTop: 10,
        width: 210,
        height: 50,
        //aspectRatio: 8.0,
    },

    txt: {
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderTopColor: '#8F7975',
        borderBottomColor: '#8F7975',
        padding: 20,
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
        marginTop: 15,
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
        fontSize: 18,
        color: 'white',
        marginTop: 100,
        marginLeft: -110,
        marginTop: 20,
        fontWeight: 'bold',
    },

    footer: {
        flex: 0.5,
        //marginBottom: 10,
        width: undefined,
        height: undefined,
        aspectRatio: 3.5,
    }

});