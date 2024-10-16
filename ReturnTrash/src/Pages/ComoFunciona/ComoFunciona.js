import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import Loading from '../../Components/Loading';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../Components/Footer/Footer';
import MenuButtonComoFunciona from '../../Components/MenuButtonComoFunciona';

export default function ComoFunciona() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <Loading visible={visible} />
                <View style={styles.header1}>
                    <MenuButtonComoFunciona />
                    <Image style={styles.logo} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} />
                </View>

                <View style={styles.header2}>
                    <Text style={styles.txtBarra1}>                        </Text>
                    <View style={styles.title}>
                        <Image style={styles.logoLocais} source={{
                            uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/8581ed4cb37b13fb04b4f80939f9593d5a741cd5/ReturnTrash/assets/duvida.png',
                        }} />
                        <Text style={styles.txt}>Como funciona?                             </Text>
                    </View>
                    <Text style={styles.txtBarra2}>                       </Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.descarteTitle}>O descarte</Text>
                    <View style={styles.box}>
                        <Text style={styles.content}>Basta procurar a nossa lixeira mais próxima da sua localização. Após isso, basta ler o QR Code da lixeira com nosso app, pesar o produto e descartar. Pronto! Em instantes você receberá seus pontos no aplicativo, onde poderá trocar por compras, produtos e muito mais!</Text>
                    </View>
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

    header2: {
        marginTop: 10
    },

    body: {
        flex: 1,
        marginTop: 30
    },

    descarteTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        position: 'absolute',
        left: 20,
        top: 10,
    },

    box: {
        alignItems: 'center',
        justifyContent: 'center',

    },

    content: {
        color: 'white',
        backgroundColor: '#204722',
        fontWeight: 'bold',
        fontSize: 17,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'justify',
        borderRadius: 20,
        padding: 10,
        width: 340,
        marginTop:50
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

    logoLocais: {
        marginTop: -10,
        width: 55,
        height: 55,
        //alignItems: 'flex-start',
        //justifyContent: 'center',
        marginLeft: 35,
        marginBottom: -15,
        borderRadius: 30,
        borderColor: '#B7DA00',
        borderWidth: 1
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
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
        //alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 27,
        marginLeft: -170,
        //marginBottom: -15,
    },

    txt2: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
        //alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 27,
        marginLeft: -190,
        //marginBottom: -15,
    },

    txt3: {
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 27,
        marginLeft: -110,
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
        marginTop: 12,
        width: 120,
        height: 120,
    },

    container: {
        flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    buttons: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'space-evenly',
    },

    footer: {
        backgroundColor: '#B7DA00',
        marginTop: 100,
        width: 450,
        height: 120,
    },

});