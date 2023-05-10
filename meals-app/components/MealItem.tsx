import { Text, Pressable, View, Image, StyleSheet } from 'react-native';
import { Affordability, Complexity } from '../models/meal';
import shadow from '../styles/shadow';
import CustomPressable from './CustomPressable';

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: Complexity;
  affordability: Affordability;
}) => {
  return (
    <View style={styles.mealItem}>
      <CustomPressable>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </CustomPressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    ...shadow,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
