import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, TextInput } from 'react-native';
import Loading from '../../Components/Loading';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../Components/Footer/Footer';
import MenuButtonUsarPontos from '../../Components/MenuButtonUsarPontos';
import EnviarButton from '../../Components/EnviarButton';

export default function Contato() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <Loading visible={visible} />
                <View style={styles.header1}>
                    <MenuButtonUsarPontos />
                    <Image style={styles.logo} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} />
                </View>

                <View style={styles.header2}>
                    <Text style={styles.txtBarra1}>                        </Text>
                    <View style={styles.title}>
                        <Image style={styles.logoContato} source={{
                            uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/8d7912d4ae23ff87c045103da5b31f7692025e30/ReturnTrash/assets/contatoLogo.png',
                        }} />
                        <Text style={styles.txt}>Fale conosco!                              </Text>
                    </View>
                    <Text style={styles.txtBarra2}>                       </Text>
                </View>

                <View style={styles.body}>

                    <Text style={styles.bodyText}>Nome:</Text>
                    <TextInput
                        placeholder=''
                        style={styles.input}
                    />
                    <Text style={styles.bodyText}>E-mail:</Text>
                    <TextInput
                        placeholder=''
                        style={styles.input}

                    />
                    <Text style={styles.bodyText}>   Assunto:</Text>
                    <TextInput
                        placeholder=''
                        style={styles.input}

                    />
                    <Text style={styles.bodyText}>       Mensagem:</Text>
                    <TextInput
                        placeholder=''
                        style={styles.input2}
                    />
                    <View style={styles.buttonsBox}>
                        <EnviarButton />
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
        marginTop: 40
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

    logoContato: {
        marginTop: -10,
        width: 55,
        height: 55,
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

    input: {
        height: 50,
        width: 320,
        borderWidth: 1,
        borderColor: 'white',
        color: 'black',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: '#204722',
        borderWidth: 5
    },

    input2: {
        height: 50,
        width: 320,
        borderWidth: 1,
        color: 'black',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: '#204722',
        borderWidth: 5
    },

    bodyText: {
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
        marginLeft: -250,
        marginBottom: 5
    },

    buttons: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'space-evenly',
    },

    buttonsBox: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },

    footer: {
        backgroundColor: '#B7DA00',
        marginTop: 100,
        width: 450,
        height: 120,
    },

});