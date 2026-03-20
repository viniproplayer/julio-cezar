import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, SafeAreaView, Alert } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SettingScreen() {
  return(
    <View style={styles.centerContainer}>
    <Text style={styles.header}>Página de Configurações</Text>
    <Text>Aqui você pode ajustar as preferências do app.</Text>
    </View>
   );
}
function HomeScreen({ navigation }) {
const Data = [
  { id: '1', title: 'Configurações' },
  { id: '2', title: 'Perfil' },
  { id: '3', title: 'Mensagens' },
  { id: '4', title: 'Segurança' },
  { id: '5', title: 'Ajuda' }
];


  const renderItem = ({ item }) => (
    <Pressable
      style={styles.button}
      onPress={() => {
        if (item.id === '1'){
          //Se for o ID 1,navega para a página de Configurações
          navigation.navigate('Settings');
        } else {
            Alert('Você clicou em: ' + item.title + ', seu pato');
        }
      }}
    >
      <Text style={styles.buttonText}>{item.title}</Text>
    </Pressable>
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
 return (
   <NavigationContainer>
   <Stack.Navigator initialRouteName="Home">
   <Stack.Screen 
   name="Home"
   component={HomeScreen}
   options={{title: 'Início'}}
   />
   <Stack.Screen
   name="Settings"
   component={SettingScreen}
   options={{title:'Configurações'}}
   />
   </Stack.Navigator>
   </NavigationContainer>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
   centerContainer: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'f5f5f5', 
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
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  listPadding: {
    paddingHorizontal: 20,
  },
});
