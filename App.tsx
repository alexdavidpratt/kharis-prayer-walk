  import * as React from 'react';
  import { StyleSheet, View, Text } from 'react-native';
  import { SafeAreaProvider } from 'react-native-safe-area-context';
  import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
