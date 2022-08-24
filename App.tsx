import 'reflect-metadata';
import './src/shared/ioc/container';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { makeSignUp as SignUp } from './src/main/factory/pages/signup.factory';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp />
      {/* <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
