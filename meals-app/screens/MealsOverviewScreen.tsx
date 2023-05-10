import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({
  route,
}: NativeStackScreenProps<StackParamList, 'MealsOverview'>) => {
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryId) !== -1);

  const renderMealItem = (item: Meal) => {
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderMealItem(item)}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
