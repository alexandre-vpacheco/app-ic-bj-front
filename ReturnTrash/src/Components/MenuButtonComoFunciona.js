import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, Modal } from 'react-native';
import ModalButton from "./ModalButton";
import Loading from "./Loading";

const MenuButtonComoFunciona = () => {

    //const [visible, setVisible] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const modalClose = () => {
        setModalVisible(false)
    }

    const handleModal = () => {
        setModalVisible(true)
    }

    const handleHome = () => {
        setModalVisible(false);
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('HomePage');
        }, 500)
    }

    const handlePontosColeta = () => {
        setModalVisible(false);
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('PontosColeta')
        }, 500)
    }

    const handleQuemSomos = () => {
        setModalVisible(false);
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('QuemSomos')
        }, 500)
    }

    const handleParceiras = () => {
        setModalVisible(false);
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Parceiras')
        }, 500)
    }

    const handleSair = () => {
        setModalVisible(false);
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
                        <ModalButton onpress={modalClose} />
                        <Text style={styles.modalHeaderTxt}>Menu</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={handleHome}
                    >
                        <Text style={styles.modalText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={handlePontosColeta}
                    >
                        <Text style={styles.modalText}>Aonde encontrar nossos pontos de coleta?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={handleQuemSomos}
                    >
                        <Text style={styles.modalText}>Quem nós somos?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={handleParceiras}
                    >
                        <Text style={styles.modalText}>Conheça nossas parceiras!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={handleSair}
                    >
                        <Text style={styles.modalText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Loading visible={visible} />
            <TouchableOpacity
                onPress={handleModal}>
                <View >
                    <Image style={styles.menuImage} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/44cc2aa4be90ff98d92544ddfe56b66c478f93e7/ReturnTrash/assets/logoHamburguer.png',
                    }} />
                </View>
            </TouchableOpacity>
        </>

    )
}

export default MenuButtonComoFunciona

const styles = StyleSheet.create({

    menuImage: {
        marginTop: 12,
        marginLeft: -80,
        width: 55,
        height: 55,
        //justifyContent: 'center',
        borderRadius: 30,

    },

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
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#204722',
        color: 'white',
        borderRadius: 30,
        height: 62,
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

});