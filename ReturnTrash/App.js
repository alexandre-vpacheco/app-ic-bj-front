import React from 'react';
//import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes/Routes';

//import { StyleSheet, Text, View, Image, Alert } from 'react-native';


export default function App() {

  return (

    <NavigationContainer>
      <Routes/>
    </NavigationContainer>

  );
}
