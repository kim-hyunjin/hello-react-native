import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';
import { useEffect, useLayoutEffect } from 'react';

const MealsOverviewScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<StackParamList, 'MealsOverview'>) => {
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryId) !== -1);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === categoryId)?.title,
    });
  }, [categoryId, navigation]);

  const renderMealItem = (item: Meal) => {
    return <MealItem meal={item} />;
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
