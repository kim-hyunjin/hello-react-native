import { useCallback, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = useCallback((enteredGoalText) => {
    setGoals((prev) => [{ id: enteredGoalText + Math.random(), value: enteredGoalText }, ...prev]);
  }, []);

  const removeGoalHandler = useCallback((id) => {
    setGoals((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => <GoalItem item={item} onPress={removeGoalHandler} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
