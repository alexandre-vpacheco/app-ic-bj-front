import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, TouchableOpacity } from 'react-native';
import Loading from '../../Components/Loading';
import { useNavigation } from '@react-navigation/native';
import MenuButtonDescarte from '../../Components/MenuButtonDescarte';
import Footer from '../../Components/Footer/Footer';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PointsContext } from '../../Context/PointsContext';

export default function TipoMaterial() {

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    // const handleAvancar = () => {

    //     navigation.navigate('TudoPronto');
    //     

    // };

    // const items = [
    //     { id: '1', name: 'Tampinha de Plástico' },
    //     { id: '2', name: 'Tampinha de Aço' },
    //     { id: '3', name: 'Lacre de Latinha' },
    //     { id: '4', name: 'Latinha' },
    //     { id: '5', name: 'Garrafa Pet' },

    // ];

    // const [quantities, setQuantities] = useState({});

    // const saveQuantities = async (newQuantities) => {
    //     try {
    //         await AsyncStorage.setItem('quantities', JSON.stringify(newQuantities));
    //     } catch (error) {
    //         console.log('Erro ao salvar as quantidades:', error);
    //     }

    // }

    // const increaseQuantity = (id) => {
    //     const newQuantities = { ...quantities, [id]: (quantities[id] || 0) + 1 };
    //     setQuantities(newQuantities);
    //     saveQuantities(newQuantities);
    // };

    // const decreaseQuantity = (id) => {
    //     const newQuantities = { ...quantities, [id]: Math.max((quantities[id] || 0) - 1, 0) };
    //     setQuantities(newQuantities);
    //     saveQuantities(newQuantities);
    // };

    // const renderItem = ({ item }) => (
    //     <View style={styles.itemContainer}>
    //         <Text style={styles.itemName}>{item.name}</Text>
    //         <View style={styles.quantityControls}>
    //             <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.button}>
    //                 <Text style={styles.buttonText}>-</Text>
    //             </TouchableOpacity>
    //             <Text style={styles.quantityText}>{quantities[item.id] || 0}</Text>
    //             <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.button}>
    //                 <Text style={styles.buttonText}>+</Text>
    //             </TouchableOpacity>
    //         </View>
    //     </View>
    // );

    const [tampinhas, setTampinhas] = useState(0);
    const [latinhas, setLatinhas] = useState(0);
    const [garrafas, setGarrafas] = useState(0);

    const { addPoints } = useContext(PointsContext);

    const aumentarTampinhas = () => setTampinhas(tampinhas + 1);
    const diminuirTampinhas = () => setTampinhas(tampinhas > 0 ? tampinhas - 1 : 0);

    const aumentarLatinhas = () => setLatinhas(latinhas + 1);
    const diminuirLatinhas = () => setLatinhas(latinhas > 0 ? latinhas - 1 : 0);

    const aumentarGarrafas = () => setGarrafas(garrafas + 1);
    const diminuirGarrafas = () => setGarrafas(garrafas > 0 ? garrafas - 1 : 0);


    const handlePronto = () => {
        const totalItens = tampinhas + latinhas + garrafas; // Soma tampinhas e latinhas
        addPoints(totalItens); // Adiciona os pontos ao total
        alert(`Você irá ganhar ${totalItens} pontos!`);
        navigation.navigate('TudoPronto');
        // Redireciona para outra página ou realiza outras ações
    };

    return (
        <>
            <View style={styles.container}>
                <Loading visible={visible} />
                <View style={styles.header1}>
                    <MenuButtonDescarte />
                    <Image style={styles.logo} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} />
                </View>
                <View style={styles.header2}>
                    <Text style={styles.txtBarra1}>                        </Text>
                    <View style={styles.title}>
                        <Image style={styles.logoDescarte} source={{
                            uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/9a8674ef8d1f9639a6b3f86bdf9edecc0d52d97b/ReturnTrash/assets/logoDescarte.png',
                        }} />
                        <Text style={styles.txt}>Quero descartar!                        </Text>
                    </View>
                    <Text style={styles.txtBarra2}>                       </Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.txt1}>Você vinculou com sucesso à lixeira!</Text>
                    <Text style={styles.txt1}>Selecione o que você irá descartar</Text>
                    {/* <FlatList
                        data={items}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        style={styles.flatlist}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            width="400"
                            color="#204722"
                            title="Pronto" onPress={handleAvancar}
                        />
                    </View> */}

                    {/* Tampinhas */}
                    <View style={styles.options}>
                    {/* <Image style={styles.logo2} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} /> */}
                        <Text style={styles.txt1}>Tampinhas: {tampinhas}</Text>
                        <View style={styles.buttons}>
                            <Button color="#204722" title="-" onPress={diminuirTampinhas} />
                            <Button color="#204722" title="+" onPress={aumentarTampinhas} />
                        </View>
                    </View>

                    {/* Latinhas */}
                    <View style={styles.options}>
                    {/* <Image style={styles.logo2} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} /> */}
                        <Text style={styles.txt1}>Latinhas: {latinhas}</Text>
                        <View style={styles.buttons}>
                            <Button color="#204722" title="-" onPress={diminuirLatinhas} />
                            <Button  color="#204722" title="+" onPress={aumentarLatinhas} />
                        </View>
                    </View>

                    {/* Garrafas Pet*/}
                    {/* <Image style={styles.logo2} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/Alexandre/ReturnTrash/assets/logort.jpg',
                    }} /> */}
                    <View style={styles.options}>
                        <Text style={styles.txt1}>Garrafas Pet: {garrafas}</Text>
                        <View style={styles.buttons}>
                            <Button color="#204722" title="-" onPress={diminuirGarrafas} />
                            <Button color="#204722" title="+" onPress={aumentarGarrafas} />
                        </View>
                    </View>

                    {/* Botão Pronto */}
                    <Button color="#204722" style={styles.buttonContainer} title="Pronto" onPress={handlePronto} />

                </View>
                <View style={styles.footer}>
                    <Footer />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    logo2: {
        marginTop: 12,
        width: 50,
        height: 50,
        //marginLeft:-15,
        //aspectRatio: 8.0,
    },

    options: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignContent: 'space-between',
        width: 190,
        height: 50
    },

    maisMenosButtons: {

},

    buttonContainer: {
    // marginTop: 15,
    width: 200,  // Largura desejada
    height: 100,  // Altura desejada
},

    flatlist: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    width: 350,
    borderRadius: 10,
    borderWidth: 5,
    padding: 10,

},

    header1: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'flex-start',
},

    body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    gap: 20,
    fontSize: 15
},

    header2: {
    marginTop: 35
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

    logoDescarte: {
    marginTop: -10,
    width: 65,
    height: 65,
    //alignItems: 'flex-start',
    //justifyContent: 'center',
    marginLeft: 35,
    marginBottom: -15,
},

    txt: {
    //marginTop: 2,
    fontWeight: 'bold',
    fontSize: 21,
    color: 'white',
    // alignItems: 'center',
    //justifyContent: 'center',
    //marginTop: 27,
    marginLeft: 30,
    //marginBottom: -15,
},

    txt1: {
    marginTop: 5,
    //fontWeight: 'bold',
    fontSize: 19,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 27,
    marginLeft: 15,
    //marginBottom: -15,
},

    txt2: {
    //marginTop: 2,
    //fontWeight: 'bold',
    fontSize: 19,
    color: 'white',
    // alignItems: 'center',
    //justifyContent: 'center',
    //marginTop: 27,
    marginLeft: 20,
    marginRight: 10,
    //marginBottom: -15,
},

    txt3: {
    marginTop: 55,
    fontWeight: 'bold',
    fontSize: 19,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 27,
    marginLeft: 5,
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
    marginTop: -30,
    width: 150,
    height: 150,
},

    container: {
    flex: 1,
    backgroundColor: '#856192',
    alignItems: 'center',
    //justifyContent: 'center',
},

    buttons: {
        marginLeft: 35,
    //marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'space-evenly',
},

    preFooter: {
    flexDirection: 'row',
},

    footer: {
    backgroundColor: '#B7DA00',
    marginTop: 100,
    width: 450,
    height: 120,
}

});