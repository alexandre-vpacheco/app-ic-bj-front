import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import Loading from '../../Components/Loading';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../Components/Footer/Footer';
import MenuButtonPontosColeta from '../../Components/MenuButtonPontosColeta';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function PontosColeta() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const [mapRegion, setMapRegion] = useState(
        {
            latitude: -22.389748,
            longitude: -43.131616,
            latitudeDelta: 0.01,
            longitudeDelta: 0.005,
        }
    )

    return (
        <>
            <View style={styles.container}>
                <Loading visible={visible} />
                <View style={styles.header1}>
                    <MenuButtonPontosColeta />
                    <Image style={styles.logo} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} />
                </View>

                <View style={styles.header2}>
                    <Text style={styles.txtBarra1}>                        </Text>
                    <View style={styles.title}>
                        <Image style={styles.logoLocais} source={{
                            uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/8581ed4cb37b13fb04b4f80939f9593d5a741cd5/ReturnTrash/assets/local.png',
                        }} />
                        <Text style={styles.txt}>Aonde encontrar nossos {'\n'}
                            pontos de coleta? </Text>
                    </View>
                    <Text style={styles.txtBarra2}>                       </Text>
                </View>

                <View style={styles.body}>
                    {/* <Image style={styles.bodyLogo} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/dcbab49c629b3d86bc546c9445d3724a65c68071/ReturnTrash/assets/maps.png',
                    }} /> */}
                    <View style={styles.mapBorder}>
                        <MapView
                            region={mapRegion}
                            style={styles.map}
                        // initialRegion={{
                        //     latitude: -22.389748,
                        //     longitude: -43.131616,
                        //     latitudeDelta: 0.0922,
                        //     longitudeDelta: 0.0421,
                        // }}

                        >
                            <Marker coordinate={mapRegion} title='Colégio Bom Jesus Itaipava'></Marker>
                        </MapView>
                    </View>


                </View>
                <View style={styles.footer}>
                    <Footer />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    mapBorder: {
        borderColor: '#204722',
        width: 330,
        height: 390,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 45
    },

    map: {
        width: 300,
        height: 360,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    header1: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    header2: {
        marginTop: 10
    },

    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },

    bodyLogo: {
        marginTop: 12,
        width: 270,
        height: 400,
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },

    txtBarra1: {
        borderTopWidth: 2,
        borderTopColor: '#8F7975',
        marginTop: 15,
    },

    txtBarra2: {
        borderBottomWidth: 2,
        borderBottomColor: '#8F7975',
        marginTop: 5,
    },

    logoLocais: {
        marginTop: -10,
        width: 55,
        height: 55,
        //alignItems: 'flex-start',
        //justifyContent: 'center',
        marginLeft: 35,
        marginBottom: -15,
        borderRadius: 30,
        borderColor: '#B7DA00',
        borderWidth: 1
    },

    txt: {
        //marginTop: 2,
        fontWeight: 'bold',
        fontSize: 21,
        color: 'white',
        // alignItems: 'center',
        //justifyContent: 'center',
        //marginTop: 27,
        marginLeft: 33,
    },

    txt1: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
        //alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 27,
        marginLeft: -170,
        //marginBottom: -15,
    },

    txt2: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
        //alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 27,
        marginLeft: -190,
        //marginBottom: -15,
    },

    txt3: {
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 27,
        marginLeft: -110,
        //marginBottom: -15,
    },

    logo: {
        marginTop: 12,
        width: 210,
        height: 50,
        //marginLeft:-15,
        //aspectRatio: 8.0,
    },

    recLogo: {
        marginTop: 12,
        width: 120,
        height: 120,
    },

    container: {
        flex: 1,
        backgroundColor: '#856192',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    buttons: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'space-evenly',
    },

    footer: {
        backgroundColor: '#B7DA00',
        marginTop: 100,
        width: 450,
        height: 120,
    },

});