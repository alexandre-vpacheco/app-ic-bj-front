import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';

const logoImg = require("./assets/logort.jpg");

export default function App() {
  return (

    <View style={styles.container}>
      <Image source={logoImg} />
      <Button
        title="Fazer Login"
        onPress={() => Window.alert('Simple Button pressed')}
        style={styles.button}
      />
      <Text>ou</Text>
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
    marginTop: -100
  },

  button: {

  },

  logo: {
    width: 66,
    height: 58,
  }
});
