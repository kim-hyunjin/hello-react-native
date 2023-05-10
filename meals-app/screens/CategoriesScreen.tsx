import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';

const CategoriesScreen = ({
  navigation,
}: NativeStackScreenProps<StackParamList, 'MealsCategories'>) => {
  const renderCategoryItem = (item: Category) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: item.id,
      });
    };
    return <CategoryGridTile title={item.title} color={item.color} onPress={pressHandler} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => renderCategoryItem(item)}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
