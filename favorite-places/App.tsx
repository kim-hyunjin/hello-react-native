import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
