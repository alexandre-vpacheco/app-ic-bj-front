import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';

const logoImg = require("./assets/logort.jpg");

export default function App() {
  return (
      <View style={styles.container}>
      <Image style={styles.logo} source={{
          uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
        }} />
        <Button
          title="Fazer Login"
          onPress={() => Window.alert('Simple Button pressed')}
          style={styles.button}
        />
        <Text style={styles.txt}>ou</Text>
        <Button
          title="Cadastre-se"
          onPress={() => Window.alert('Simple Button pressed')}
          style={styles.button}
        />
      </View>
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

  button: {
    
  },

  logo: {
    marginTop: -100,
    width: 250,
    height: 58,
  }
});
