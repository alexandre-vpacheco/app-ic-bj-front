import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicial from '../Pages/Inicial/Inicial.js';
import Login from '../Pages/Login/Login.js';
import Cadastro from '../Pages/CadastroCliente/Cadastro.js';
import Home from '../Pages/Home/Home.js';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Inicial"
                component={Inicial}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />


        </Stack.Navigator>
    )
};