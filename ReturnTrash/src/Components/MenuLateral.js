import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';


const MenuLateral = ({ onpress }) => {
    return (
        <TouchableOpacity
            onPress={onpress}>
            <View >
                <Image style={styles.menuImage} source={{
                    uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/8d7912d4ae23ff87c045103da5b31f7692025e30/ReturnTrash/assets/logoHamburguer.png',
                }} />
            </View>
        </TouchableOpacity>
    )
}

export default MenuLateral

const styles = StyleSheet.create({

    menuImage: {
        marginTop: 12,
        marginLeft: -80,
        width: 55,
        height: 55,
        
        //justifyContent: 'center',
        borderRadius: 30,
        
    }

})