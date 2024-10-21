import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importa o hook de navegação
import Loading from './Loading';

const CodeInput = () => {
  const [code, setCode] = useState(['', '', '', '']);

  const [visible, setVisible] = useState(false);
  //const [loading, setLoading] = useState(false); // Estado para controlar o "loading"

  // Criação de referências para cada campo de entrada
  const inputs = useRef([]);
  const navigation = useNavigation();  // Usado para navegar para outra tela

  const handleInputChange = (text, index) => {
    let newCode = [...code];

    // Atribuir o texto ao código correspondente e mover para o próximo input
    if (text.length <= 1) {
      newCode[index] = text;
      setCode(newCode);

      // Move para o próximo campo se não for o último
      if (text && index < 3) {
        inputs.current[index + 1].focus();
      }

      // Se todos os 4 campos estiverem preenchidos
      if (newCode.every(digit => digit !== '')) {
        setVisible(true); // Exibe o "loading"

        // Simula uma operação de carregamento
        setTimeout(() => {
          setVisible(false); // Esconde o "loading" após 2 segundos

          // Navega para a página "TipoMaterial"
          navigation.navigate('TipoMaterial');
        }, 2000);
      }
    }
  };

  const handleKeyPress = (e, index) => {
    // Permitir que o usuário apague o dígito atual e mova para o campo anterior
    if (e.nativeEvent.key === 'Backspace' && index > 0 && code[index] === '') {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}      
    >
      <View style={styles.inputRow}>
        <Loading visible={visible}/>
        {code.map((digit, index) => (
          <View key={index} style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleInputChange(text, index)}
              ref={(input) => inputs.current[index] = input} 
              textAlign="center"
              onKeyPress={(e) => handleKeyPress(e, index)} 
            />
            <View style={styles.underline} />
          </View>
        ))}
      </View>

      {/* {loading && (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
      )} */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 15,
    borderColor: '#204722',
    height: 110,
    length: 100,
  },

  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  inputContainer: {
    width: 60, 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    marginBottom: 20,
  },

  input: {
    fontSize: 28, 
    height: 60, 
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'transparent', 
    //backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingVertical: 10,
    textAlign: 'center',
  },

  underline: {
    width: '100%',
    height: 3,
    backgroundColor: 'black',
    marginTop: 5,
  },

  loadingIndicator: {
    marginTop: 30, 
  },
});

export default CodeInput;
