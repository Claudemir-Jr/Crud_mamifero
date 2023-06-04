import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// App.tsx
import React from 'react';
import AppNavigator from './AppNavigator';

const App = () => {
  return <AppNavigator />;
};

export default App;

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
