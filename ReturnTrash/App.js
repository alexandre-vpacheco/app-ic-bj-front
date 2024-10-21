import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/Routes';
import { UserProvider } from './src/Context/UserContext';
import { StatusBar } from 'expo-status-bar';
import { PointsProvider } from './src/Context/PointsContext';

export default function App() {

  return (
    <PointsProvider>
    <NavigationContainer>
      <UserProvider>
      <StatusBar style="light" backgroundColor="transparent"  />
        <Routes />
      </UserProvider>
    </NavigationContainer>
    </PointsProvider>
  );
}
