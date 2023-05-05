import { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';

function GoalItem({ item, onPress }) {
  const handlePress = useCallback(() => {
    onPress(item.id);
  }, [item, onPress]);

  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText} onPress={handlePress}>
        {item.value}
      </Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: 'white',
  },
});
