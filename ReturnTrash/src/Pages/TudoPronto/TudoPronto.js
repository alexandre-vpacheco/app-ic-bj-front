import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import Loading from '../../Components/Loading';
import { useNavigation } from '@react-navigation/native';
//import VoltarButtonDescarte from '../../Components/VoltarButtonDescarte';
//import SairButtonDescarte from '../../Components/SairButtonDescarte';
import QrCodeButton from '../../Components/QrCodeButton';
import CpfButton from '../../Components/CpfButton';
//import MenuButton from '../../Components/MenuButton';
import MenuButtonDescarte from '../../Components/MenuButtonDescarte';
import Footer from '../../Components/Footer/Footer';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TudoPronto() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        // Define um temporizador para mostrar o loading antes de navegar
        const timer = setTimeout(() => {
            setVisible(true);  // Exibe o componente de loading

            // Navega para a próxima página após 2 segundos de loading
            const navigateTimer = setTimeout(() => {
                navigation.navigate('ObrigadoPorAjudar');  // Navega para "ObrigadoPorDescartar"
            }, 2000);  // 2 segundos com o loading visível

            // Limpa o temporizador de navegação
            return () => clearTimeout(navigateTimer);
        }, 3000);  // Espera 3 segundos antes de exibir o loading

        // Limpa o temporizador inicial se o componente for desmontado
        return () => clearTimeout(timer);
    }, [navigation]);

    // const voltar = () => {
    //     console.log('Voltar clicado')
    //     setVisible(true);
    //     setTimeout(() => {
    //         setVisible(false);
    //         navigation.navigate('HomePage');
    //         console.log('Voltamos para a HomePage')
    //     }, 500)
    // }

    // const sair = () => {
    //     console.log('Voltar clicado')
    //     setVisible(true);
    //     setTimeout(() => {
    //         setVisible(false);
    //         navigation.navigate('Inicial')
    //         console.log('Voltamos para a tela inicial')
    //     }, 500)
    // }

    return (
        <>
            <View style={styles.container}>
                <Loading visible={visible} />
                <View style={styles.header1}>
                    <MenuButtonDescarte />
                    <Image style={styles.logo} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} />
                </View>
                <View style={styles.header2}>
                    <Text style={styles.txtBarra1}>                        </Text>
                    <View style={styles.title}>
                        <Image style={styles.logoDescarte} source={{
                            uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/9a8674ef8d1f9639a6b3f86bdf9edecc0d52d97b/ReturnTrash/assets/logoDescarte.png',
                        }} />
                        <Text style={styles.txt}>Quero descartar!                        </Text>
                    </View>
                    <Text style={styles.txtBarra2}>                       </Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.txt1}>Tudo pronto!</Text>
                    <Text style={styles.txt1}>INCIE O DESCARTE</Text>
                    <Icon name="trash" size={180} color="white"/>
                </View>
                <View style={styles.footer}>
                    <Footer />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    header1: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        gap: 20
    },

    header2: {
        marginTop: 35
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
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
        width: 65,
        height: 65,
        //alignItems: 'flex-start',
        //justifyContent: 'center',
        marginLeft: 35,
        marginBottom: -15,
    },

    txt: {
        //marginTop: 2,
        fontWeight: 'bold',
        fontSize: 21,
        color: 'white',
        // alignItems: 'center',
        //justifyContent: 'center',
        //marginTop: 27,
        marginLeft: 30,
        //marginBottom: -15,
    },

    txt1: {
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        //alignItems: 'center',
        //justifyContent: 'center',
        //marginTop: 27,
        //marginLeft: 50,
        //marginBottom: -15,
    },

    txt2: {
        //marginTop: 2,
        //fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
        // alignItems: 'center',
        //justifyContent: 'center',
        //marginTop: 27,
        marginLeft: 20,
        marginRight: 10,
        //marginBottom: -15,
    },

    txt3: {
        marginTop: 55,
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 27,
        marginLeft: 5,
        //marginBottom: -15,
    },

    logo: {
        marginTop: 12,
        width: 210,
        height: 50,
        //marginLeft:-15,
        //aspectRatio: 8.0,
    },

    recLogo: {
        marginTop: -30,
        width: 150,
        height: 150,
    },

    container: {
        flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    buttons: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'space-evenly',
    },

    preFooter: {
        flexDirection: 'row',
    },

    footer: {
        backgroundColor: '#B7DA00',
        marginTop: 100,
        width: 450,
        height: 120,
    }

});