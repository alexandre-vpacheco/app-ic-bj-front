import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Bem-vinde ao +ReturnTrash!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#856192',
    alignItems: 'center',
    justifyContent: 'center',
    //marginBottom: 200,
  },
  
  txt:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  }
});
