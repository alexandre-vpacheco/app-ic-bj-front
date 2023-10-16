import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import DescartarButton from '../../Components/DescartarButton';
import UsarPontosButton from '../../Components/UsarPontosButton';
import FaleConoscoButton from '../../Components/FaleConoscoButton';
import SairButton from '../../Components/SairButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading';
import MenuButton from '../../Components/MenuButton';
import MenuButtonFechar from '../../Components/MenuButtonFechar';

export default function HomePage() {

    const [visible, setVisible] = useState(false);

    const [modalVisible, setModalVisible] = useState('');

    const navigation = useNavigation();

    const menuLateralAbrir = () => {
        console.log('Menu clicado')
        setModalVisible(true);
    }

    const menuLateralFechar = () => {
        console.log('Menu clicado')
        setModalVisible(false);
    }

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
            <Modal transparent visible={modalVisible} >
                <View style={styles.modal}>
                    <View style={styles.modalHeader}>
                        <MenuButtonFechar onpress={menuLateralFechar} />
                        <Text style = {styles.modalHeaderTxt}>Menu</Text>
                    </View>
                    <Text style={styles.modalButton}>Início</Text>
                    <Text style={styles.modalButton} >Aonde encontrar nossos pontos de coleta?</Text>
                    <Text style={styles.modalButton}>Como Funciona?</Text>
                    <Text style={styles.modalButton}>Quem nós somos?</Text>
                    <Text style={styles.modalButton}>Conheça nossas parceiras!</Text>
                </View>
            </Modal>
            <View style={styles.container1}>
                <View style={styles.header}>
                    <MenuButton onpress={menuLateralAbrir} />
                    <Image style={styles.logo} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} />
                </View>
                <Text style={styles.txt}>Bem-vindo(a), Alexandre! Como você irá ajudar o planeta hoje?</Text>
                <Text style={styles.saldoTxt}>Saldo disponível: 10 Pontos</Text>
                <DescartarButton onpress={descarte} />
                <UsarPontosButton onpress={pontos} />
                <FaleConoscoButton onpress={contato} />
                <SairButton onpress={sair} />
                <Loading visible={visible} />
                <View >
                    <Image style={styles.footer} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/e7c5deab2b4c56209f2a7448ced4bc8f1a083602/ReturnTrash/assets/footer.jpg',
                    }} />
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
        color:'white',
        borderRadius: 30,
        height: 70,
        padding: 15,  
    },

    header: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    container1: {
        flexDirection: 'column',
        //flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
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
        padding: 20,
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
        marginTop: 15,
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
        marginTop: 100,
        marginLeft: -80,
        marginTop: 18,
        fontWeight: 'bold',
    },

    footer: {
        flex: 0.4,
        marginTop: 45,
        marginBottom: 200,
        width: 450,
        height: 80,
        //aspectRatio: 4,
    }

});