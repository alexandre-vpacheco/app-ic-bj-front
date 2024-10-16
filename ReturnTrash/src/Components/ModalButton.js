import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, Modal } from 'react-native';


const ModalButton= ({ onpress }) => {

    return (
            <TouchableOpacity
                onPressIn={onpress}>
                <View >
                    <Image style={styles.menuImage} source={{
                        uri: 'https://raw.githubusercontent.com/alexandre-vpacheco/app-ic-bj-front/44cc2aa4be90ff98d92544ddfe56b66c478f93e7/ReturnTrash/assets/logoHamburguer.png',
                    }} />
                </View>
            </TouchableOpacity>
    )
}

export default ModalButton

const styles = StyleSheet.create({

    menuImage: {
        marginTop: 12,
        marginLeft: -80,
        width: 55,
        height: 55,
        //justifyContent: 'center',
        borderRadius: 30,
    }
});