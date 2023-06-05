import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdicionarScreen from './src/screens/AdicionarScreen';
import ListarScreen from './src/screens/ListarScreen';
import EditarScreen from './src/screens/EditarScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Adicionar" component={AdicionarScreen} />
        <Stack.Screen name="Listar" component={ListarScreen} />
        <Stack.Screen name="Editar" component={EditarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
