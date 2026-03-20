import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
function SettingScreen() {
  return(
    <View style={styles.centerContainer}>
    <Text style={styles.header}>Página de Configurações</Text>
    <Text>Aqui você pode ajustar as preferências do app.</Text>
    </View>
   );
}
function HomeScreen({ navigator }) {
const Data = [
  { id: '1', title: 'Configurações' },
  { id: '2', title: 'Perfil' },
  { id: '3', title: 'Mensagens' },
  { id: '4', title: 'Segurança' },
  { id: '5', title: 'Ajuda' }
];


  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        if (item.id === '1'){
          //Se for o ID 1,navega para a página de Configurações
          navigation.navigate('Settings');
        } else {
            alert('Você clicou em: ' + item.title + ', seu pato');
        }
      }}
    >
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Menu principal </Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listPadding}
      />
    </SafeAreaView>
  );
}
export default function App() {
 return(
   
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#00faff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  listPadding: {
    paddingHorizontal: 20,
  },
});
