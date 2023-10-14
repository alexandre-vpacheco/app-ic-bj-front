import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import Loading from '../../Components/Loading';
import VoltarButton from '../../Components/VoltarButton';
import { useNavigation } from '@react-navigation/native';

export default function Contato() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const voltar = () => {
        console.log('Voltar clicado')
        setVisible(true);
        setTimeout(()=>{
            setVisible(false);
            navigation.navigate('HomePage')  
            console.log('Voltamos para a HomePage')
        }, 500)
        
    }

    return (
        <>
            <View style={styles.container}>
        
                <Text style={styles.txt}>PÁGINA DE CONTATO</Text>
                <Loading visible = {visible}/>
                <VoltarButton onpress={voltar}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    txt: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        marginTop: 20
    },

});