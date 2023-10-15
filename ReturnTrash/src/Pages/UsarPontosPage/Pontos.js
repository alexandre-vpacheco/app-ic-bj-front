import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import Loading from '../../Components/Loading';
import { useNavigation } from '@react-navigation/native';
import VoltarButtonPontos from '../../Components/VoltarButtonPontos';

export default function Pontos() {

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
        
                <Text style={styles.txt}>PÁGINA DE TROCA DE PONTOS</Text>
                <Loading visible = {visible}/>
                <VoltarButtonPontos onpress={voltar}/>
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

    footer: {
        flex: 0.5,
        //marginBottom: 10,
        width: undefined,
        height: undefined,
        aspectRatio: 3.5
    },

});