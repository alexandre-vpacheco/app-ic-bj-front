import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import React from 'react';
import ButtonLogin from './src/Pages/Components/ButtonLogin';
import ButtonCadastro from './src/Pages/Components/ButtonCadastro';

const logoImg = require("./assets/logort.jpg");

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={{
          uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
        }} />
        <ButtonLogin />
        <Text>ou</Text>
        <ButtonCadastro />
      </View>     
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#856192',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  },

  logo: {
    marginTop: -100,
    width: 250,
    height: 58,
  }
  
});
