import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState, useCallback } from 'react';

function GoalInput({ onAddGoal }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = useCallback((text) => {
    setEnteredGoalText(text);
  }, []);

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your Goal'
        value={enteredGoalText}
        onChangeText={goalInputHandler}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
