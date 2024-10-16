import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importa o hook de navegação

const CodeInput = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false); // Estado para controlar o "loading"
  
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
        setLoading(true); // Exibe o "loading"
        
        // Simula uma operação de carregamento
        setTimeout(() => {
          setLoading(false); // Esconde o "loading" após 2 segundos
          
          // Navega para a página "TipoMaterial"
          navigation.navigate('ConfirmaCPF');
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
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajusta para iOS e Android
    >
      <View style={styles.inputRow}>
        {code.map((digit, index) => (
          <View key={index} style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleInputChange(text, index)}
              ref={(input) => inputs.current[index] = input} // Guarda a referência de cada campo
              textAlign="center"
              onKeyPress={(e) => handleKeyPress(e, index)} // Detecta Backspace
            />
            <View style={styles.underline} />
          </View>
        ))}
      </View>

      {loading && (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  inputContainer: {
    width: 60, // Ajusta o tamanho da caixa de entrada
    alignItems: 'center',
  },
  input: {
    fontSize: 28, // Aumenta o tamanho da fonte para melhor visualização
    height: 60, // Ajusta a altura da caixa de entrada
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'transparent', // Ocultando a linha padrão
    backgroundColor: '#f0f0f0', // Cor de fundo
    borderRadius: 5,
    paddingVertical: 10,
    textAlign: 'center',
  },
  underline: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginTop: 5,
  },
  loadingIndicator: {
    marginTop: 30, // Distância do indicador de loading
  },
});

export default CodeInput;
