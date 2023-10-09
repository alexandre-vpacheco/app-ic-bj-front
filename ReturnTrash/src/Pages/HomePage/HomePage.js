import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function HomePage() {

    return (
        <>
            <View style={styles.container}>
            <Image style={styles.logo} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                }} />
        
                <Text style={styles.txt}>BEM VINDO A HOME, FULANO!</Text>
                <Text style={styles.optionsTxt}>Quero descartar!</Text>
                <Text style={styles.optionsTxt}>Quero usar meus pontos agora!</Text>
                <Text style={styles.optionsTxt}>Fale conosco!</Text>
                <Text style={styles.pontosTxt}>Saldo disponível: 10 pontos</Text>

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

    logo: {
        marginTop: 200,
        width: 250,
        height: 58,
    },

    txt: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        marginTop: 20
    },

    optionsTxt: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginTop: 50,
        fontWeight: 'bold'
    },


    pontosTxt: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginTop: 40,
        fontWeight: 'bold'
    },
    
});