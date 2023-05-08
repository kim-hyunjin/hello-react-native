import { Alert, StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useCallback, useState } from 'react';
import Colors from '../constants/color';

const StartGameScreen = ({ onPickNumber }: { onPickNumber: (number: number) => void }) => {
  const [enteredValue, setEnteredValue] = useState('');

  const inputChangeHandler = useCallback((text: string) => {
    setEnteredValue(text);
  }, []);

  const resetInputHandler = useCallback(() => {
    setEnteredValue('');
  }, []);

  const confirmButtonHandler = () => {
    const chosenNumber = Number(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'it has to be number between 0 and 99', [
        {
          text: 'OK',
          style: 'destructive',
          onPress: resetInputHandler,
        },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        value={enteredValue}
        onChangeText={inputChangeHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmButtonHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // shadow for android
    // below, shadow for ios
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    backgroundColor: Colors.primary500,
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});
