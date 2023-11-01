import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import DescartarButton from '../../Components/DescartarButton';
import UsarPontosButton from '../../Components/UsarPontosButton';
import FaleConoscoButton from '../../Components/FaleConoscoButton';
import SairButton from '../../Components/SairButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading';
import MenuButton from '../../Components/MenuButton';
import { useUser } from '../../Context/UserContext';
import Footer from '../../Components/Footer/Footer';
//import MenuLateral from '../../Components/MenuLateral';

export default function HomePage() {

    const { user } = useUser();

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

    return (
        <>
            <View style={styles.container1}>
                <Loading visible={visible} />
                <View style={styles.header}>
                    <MenuButton />
                    <Image style={styles.logo} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.txt}>Bem-vindo(a), {user.nameid}! Como você irá ajudar o planeta hoje?</Text>
                    <DescartarButton onpress={descarte} />
                    <UsarPontosButton onpress={pontos} />
                    <FaleConoscoButton onpress={contato} />
                    <Text style={styles.saldoTxt}>Saldo disponível: 50 Pontos</Text>
                </View>
                <View style={styles.footer}>
                    <Footer />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    modal: {
        //flex: 1,
        backgroundColor: 'white',
        height: 660,
        width: 300,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderWidth: 2,
        borderColor: '#204722',
        backgroundColor: '#A6C600',
    },

    modalHeaderTxt: {
        fontWeight: 'bold',
        marginTop: 10,
        marginRight: 40,
        fontSize: 20,
    },

    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
    },

    modalButton: {
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#204722',
        color: 'white',
        borderRadius: 30,
        height: 70,
        padding: 15,
    },

    modalText: {
        fontSize: 15,
        color: 'white'
    },

    header: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    container1: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        marginTop: 12,
        width: 210,
        height: 50,
        //marginLeft:-15,
        //aspectRatio: 8.0,
    },

    txt: {
        borderTopWidth: 1.5,
        borderBottomWidth: 1.5,
        borderTopColor: '#8F7975',
        borderBottomColor: '#8F7975',
        padding: 15,
        fontWeight: 'bold',
        fontSize: 21,
        color: 'white',
        marginTop: 45,
        //marginLeft: 10,
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
        marginTop: 50,
        marginLeft: -60,
        fontWeight: 'bold',
    },

    footer: {
        backgroundColor: '#B7DA00',
        marginTop: 100,
        width: 450,
        height: 120,
    }

});