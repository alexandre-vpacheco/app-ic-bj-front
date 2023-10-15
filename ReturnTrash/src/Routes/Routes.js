import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicial from '../Pages/Inicial/Inicial.js';
import Login from '../Pages/Login/Login.js';
import Cadastro from '../Pages/CadastroCliente/Cadastro.js';
import HomePage from '../Pages/HomePage/HomePage.js';
import Descarte from '../Pages/DescartePage/Descarte.js';
import Pontos from '../Pages/UsarPontosPage/Pontos.js';
import Contato from '../Pages/Contato/Contato.js';
import QrCodePage from '../Pages/QrCodePage/QrCodePage.js';
import CpfPage from '../Pages/CpfPage/CpfPage.js';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Inicial"
                component={Inicial}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Descarte"
                component={Descarte}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Pontos"
                component={Pontos}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Contato"
                component={Contato}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="QrCodePage"
                component={QrCodePage}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="CpfPage"
                component={CpfPage}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
        
    )
};