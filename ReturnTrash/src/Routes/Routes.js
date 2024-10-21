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
//import CpfPage from '../Pages/CpfPage/CpfPage.js';
import PontosColeta from '../Pages/PontosColeta/PontosColeta.js';
import ComoFunciona from '../Pages/ComoFunciona/ComoFunciona.js';
import QuemSomos from '../Pages/QuemSomos/QuemSomos.js'
import Parceiras from '../Pages/Parceiras/Parceiras.js'
//import CameraScreen from '../Pages/CameraScreen/CameraScreen.js';
import TipoMaterial from '../Pages/TipoMaterial/TipoMaterial.js';
import TudoPronto from '../Pages/TudoPronto/TudoPronto.js';
import ObrigadoPorAjudar from '../Pages/ObrigadoPorAjudar/ObrigadoPorAjudar.js';
import ConfirmaCPF from '../Pages/ConfirmaCPF/ConfirmaCPF.js';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>

            {/* <Stack.Screen
                name="Inicial"
                component={Inicial}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            /> */}

            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Descarte"
                component={Descarte}
                options={{ headerShown: false }}
            />

            {/* <Stack.Screen
                name="ConfirmaCPF"
                component={ConfirmaCPF}
                options={{ headerShown: false }}
            /> */}

            <Stack.Screen
                name="TipoMaterial"
                component={TipoMaterial}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="TudoPronto"
                component={TudoPronto}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ObrigadoPorAjudar"
                component={ObrigadoPorAjudar}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Pontos"
                component={Pontos}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Contato"
                component={Contato}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="QrCodePage"
                component={QrCodePage}
                options={{ headerShown: false }}
            />

            {/* <Stack.Screen
                name="CpfPage"
                component={CpfPage}
                options={{ headerShown: false }}
            /> */}

            <Stack.Screen
                name="PontosColeta"
                component={PontosColeta}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ComoFunciona"
                component={ComoFunciona}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="QuemSomos"
                component={QuemSomos}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Parceiras"
                component={Parceiras}
                options={{ headerShown: false }}
            />

            {/* <Stack.Screen
                name="CameraScreen"
                component={CameraScreen}
                options={{ headerShown: false }}
            /> */}
        </Stack.Navigator>
    )
};