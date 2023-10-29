import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/Routes';
//import AndroidManifest from './src/main/res/xml';

export default function App() {

  return (

    <NavigationContainer>
      <Routes />
    </NavigationContainer>

  );
}
