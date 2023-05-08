import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useCallback } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/color';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState<number | null>(null);

  const pickNumberHandler = useCallback((number: number) => {
    setPickedNumber(number);
  }, []);

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} />;
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary200, Colors.accent500]}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
