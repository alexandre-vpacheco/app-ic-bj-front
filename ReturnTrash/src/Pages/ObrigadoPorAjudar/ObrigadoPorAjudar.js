import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import Loading from '../../Components/Loading';
import { useNavigation } from '@react-navigation/native';
import MenuButtonDescarte from '../../Components/MenuButtonDescarte';
import Footer from '../../Components/Footer/Footer';
import DescartarNovamenteButton from '../../Components/DescartarNovamenteButton';
import HomeButton from '../../Components/HomeButton';
import UsarPontosButton2 from '../../Components/UsarPontosButton2';
import { PointsContext } from '../../Context/PointsContext';

export default function ObrigadoPorAjudar() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const { totalPoints } = useContext(PointsContext);

    const home = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('HomePage')
        }, 500)
    }

    const descarte = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Descarte')
        }, 500)
    }

    const usarPontos = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Pontos')
        }, 500)
    }

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
                    <Text style={styles.txt1}>     Obrigado por ajudar o planeta hoje!                </Text>

                    <Text style={styles.txt1}>Total de Pontos: {totalPoints}</Text>

                    {/* <Text style={styles.txt1}>     Total de pontos acumulados: 45               </Text> */}
                    <HomeButton onpress={home} />
                    <DescartarNovamenteButton onpress={descarte} />
                    <UsarPontosButton2 onpress={usarPontos} />
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
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
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
        fontSize: 19,
        color: 'white',
        //alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 27,
        marginLeft: 10,
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