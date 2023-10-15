import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import Loading from '../../Components/Loading';
import { useNavigation } from '@react-navigation/native';
import MenuLateral from '../../Components/MenuLateral';
import VoltarButtonDescarte from '../../Components/VoltarButtonDescarte';
import SairButtonDescarte from '../../Components/SairButtonDescarte';
import QrCodeButton from '../../Components/QrCodeButton';
import CpfButton from '../../Components/CpfButton';

export default function Descarte() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const menuLateral = () => {
        console.log('Menu lateral clicado')
    }

    const voltar = () => {
        console.log('Voltar clicado')
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('HomePage')
            console.log('Voltamos para a HomePage')
        }, 500)
    }

    const sair = () => {
        console.log('Voltar clicado')
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Inicial')
            console.log('Voltamos para a tela inicial')
        }, 500)
    }

    return (
        <>
            <View style={styles.container}>
                <Loading visible={visible} />
                <View style={styles.header}>
                    <MenuLateral onpress={menuLateral} />
                    <Image style={styles.logo} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} />
                </View>

                <View >
                    <Text style={styles.txtBarra1}>                        </Text>
                    <View style={styles.header2}>
                        <Image style={styles.logoDescarte} source={{
                            uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/9a8674ef8d1f9639a6b3f86bdf9edecc0d52d97b/ReturnTrash/assets/logoDescarte.png',
                        }} />
                        <Text style={styles.txt}>Quero descartar!                     </Text>
                    </View>
                    <Text style={styles.txtBarra2}>                       </Text>
                </View>
                <Image style={styles.recLogo} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/f788fede015eab7590c9ffd34f770f4462c67d28/ReturnTrash/assets/recLogo.png',
                }} />
                <Text style={styles.txt}>Registrar descarte:</Text>
                <QrCodeButton />
                <Text style={styles.txt}>Vincule seu CPF:</Text>
                <CpfButton />
                <Text style={styles.txt}>Nº de descartes do dia: 7</Text>
                <View style={styles.buttons}>
                    <VoltarButtonDescarte onpress={voltar} />
                    <SairButtonDescarte onpress={sair} />
                </View>
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

    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    header2: {
        flexDirection: 'row',
        //alignItems: 'flex-start',
    },

    txtBarra1: {
        borderTopWidth: 2,
        borderTopColor: '#8F7975',
        marginTop: 15,
    },

    txtBarra2: {
        borderBottomWidth: 2,
        borderBottomColor: '#8F7975',
        marginTop: 5,
    },

    logoDescarte: {
        marginTop: -10,
        width: 55,
        height: 55,
        //alignItems: 'flex-start',
        //justifyContent: 'center',
        marginLeft: 13,
        marginBottom: -15,
    },

    txt: {
        marginTop: 2,
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 27,
        marginLeft: 20,
        marginBottom: -15,
    },

    logo: {
        marginTop: 12,
        width: 210,
        height: 50,
        //marginLeft:-15,
        //aspectRatio: 8.0,
    },

    recLogo: {
        marginTop: 12,
        width: 140,
        height: 140,
    },

    container: {
        flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    buttons: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'space-evenly',
    },

    footer: {
        flex: 0.5,
        //marginBottom: 10,
        width: undefined,
        height: undefined,
        aspectRatio: 3.5
    },

});