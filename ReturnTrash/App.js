import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/Routes';
//import AndroidManifest from './src/main/res/xml';
import { UserProvider } from './src/Context/UserContext';

export default function App() {

  return (
    <NavigationContainer>
      <UserProvider>
        <Routes />
      </UserProvider>
    </NavigationContainer>

  );
}
