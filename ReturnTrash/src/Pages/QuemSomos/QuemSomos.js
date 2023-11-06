import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import Loading from '../../Components/Loading';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../Components/Footer/Footer';
import MenuButtonQuemSomos from '../../Components/MenuButtonQuemSomos';

export default function QuemSomos() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <Loading visible={visible} />
                <View style={styles.header1}>
                    <MenuButtonQuemSomos />
                    <Image style={styles.logo} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} />
                </View>

                <View style={styles.header2}>
                    <Text style={styles.txtBarra1}>                        </Text>
                    <View style={styles.title}>
                        <Image style={styles.logoLocais} source={{
                            uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/8581ed4cb37b13fb04b4f80939f9593d5a741cd5/ReturnTrash/assets/quem.png',
                        }} />
                        <Text style={styles.txt}>Quem nós somos?                             </Text>
                    </View>
                    <Text style={styles.txtBarra2}>                       </Text>
                </View>

                <View style={styles.body}>
                    <View style={styles.box}>
                        <Text style={styles.content}>Somos três meninas, estudantes do
                            ensino médio que tiveram a
                            oportunidade de participar da
                            Iniciação Científica da nossa escola
                            (BJMJ). E que a partir de reflexões
                            sobre a quantidade de lixo
                            acumulado nas ruas e rios, nós
                            tivemos ideia da ReturnTrash.</Text>
                    </View>
                    <Text style={styles.missaoTitle}>Missão</Text>
                    <View style={styles.box}>
                        <Text style={styles.content}>Criar uma lixeira tecnológica,
                            adaptada aos meios digitais
                            utilizados atualmente, para amenizar
                            os problemas causados pelos lixos.
                            Tendo como uma maneira de
                            estimular cada um a jogar o lixo
                            corretamente, vamos propor que o
                            indivíduo que faz a ação do
                            descarte, acumule pontos que no
                            futuro poderão lhe gerar descontos
                            em lojas parceiras.</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 55
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },

    missaoTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        position: 'absolute',
        left: 10,
        top: 140,
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
        marginTop: 40
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
        marginLeft: 35
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