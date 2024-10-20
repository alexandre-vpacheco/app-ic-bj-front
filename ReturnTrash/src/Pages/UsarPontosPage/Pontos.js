import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Loading from '../../Components/Loading';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../Components/Footer/Footer';
import MenuButtonUsarPontos from '../../Components/MenuButtonUsarPontos';
import { AntDesign } from '@expo/vector-icons';

export default function Pontos() {

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
                        <Image style={styles.logoPontos} source={{
                            uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/8d7912d4ae23ff87c045103da5b31f7692025e30/ReturnTrash/assets/logoPontos.png',
                        }} />
                        <Text style={styles.txt}>Quero usar meus pontos!               </Text>
                    </View>
                    <Text style={styles.txtBarra2}>                       </Text>
                </View>

                <View style={styles.body}>

                    <View style={styles.estabelecimentos}>
                        <Text style={styles.bodyText1}>Estabelecimentos</Text>

                        <KeyboardAvoidingView
                              style={styles.container}
                              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}   
                        >
                            <TextInput
                                style={styles.input}
                                placeholder="Supermercado, loja, atacadão"
                            />

                        </KeyboardAvoidingView>

                    </View>
                    <View style={styles.favoritos}>
                        <View style={styles.favoritosTitle}>
                            <Text style={styles.bodyText1}>Favoritos recentes</Text>
                            <TouchableOpacity>
                                <Text style={styles.verTodos}>               Ver todos</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.favoritosBox}>
                            <View style={styles.favoritosBox2}>
                                <Text style={styles.favoritosText1}>   Pão de Açúcar                                          {'\u003E'}

                                </Text>
                                <Text style={styles.line}></Text>
                                <Text style={styles.favoritosText2}>   Multimix                                                    {'\u003E'}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.outros}>
                        <Text style={styles.bodyText1}>Outros</Text>
                        <View style={styles.outros2}>
                            <View style={styles.saldoBox}>
                                <Text style={styles.saldoText}>Seu saldo: </Text>
                                <Text style={styles.saldoText}>45 pontos</Text>
                            </View>
                            <TouchableOpacity style={styles.historicoBox}><Text style={styles.saldoText}>Histórico</Text></TouchableOpacity>
                        </View>
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

    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },

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

    bodyText1: {
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
        // alignItems: 'center',
        //justifyContent: 'center',
        //marginTop: 27,
        //marginLeft: 20,
    },

    input: {
        width: 320,
        height: 50,
        margin: 12,
        borderWidth: 8,
        borderColor: '#204722',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
    },

    estabelecimentos: {
        position: 'absolute',
        top: -20,
        margin: 0,
    },

    favoritos: {
        flexDirection: 'column'
    },

    favoritosTitle: {
        flexDirection: 'row',
        marginTop: 170
    },

    verTodos: {
        fontWeight: 'bold',
        fontSize: 19,
        color: '#BCDA00',
    },

    favoritosBox: {
        marginTop: 10,
        marginLeft: 5,
        backgroundColor: 'white',
        borderColor: '#204722',
        borderWidth: 5,
        borderRadius: 20,
        width: 330,
        height: 120,
        justifyContent: 'center',
    },

    favoritosBox2: {
        justifyContent: 'center',
    },

    arrow1: {
        color: '#BCDA00',
        marginLeft: 200
    },

    arrow2: {
        color: '#BCDA00',
        marginLeft: 240
    },

    favoritosText1: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 7
    },

    favoritosText2: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10
    },

    favoritosText3: {
        color: 'black',
        fontWeight: 'bold',
        height: 30,
        marginTop: 0,
    },

    outros: {
        felx: 1,
        top: 10,
        bottom: 0,
        marginLeft: -15,
        flexDirection: 'column',
    },

    outros2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 27,
        marginLeft: 0,
        marginTop: 10
    },

    saldoBox: {
        flexDirection: 'column',
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#204722',
        height: 80,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15
    },

    saldoText: {
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
    },

    historicoBox: {
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 27,
        backgroundColor: '#204722',
        padding: 5,
        borderRadius: 20,
        height: 80,
        width: 150,
        marginLeft: 23
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

    logoPontos: {
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
        marginLeft: 20,
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

    footer: {
        backgroundColor: '#B7DA00',
        marginTop: 100,
        width: 450,
        height: 120,
    },

});