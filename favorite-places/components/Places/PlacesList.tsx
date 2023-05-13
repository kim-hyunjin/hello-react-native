import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Place } from '../../models/place';
import PlaceItem from './PlaceItem';
import { Colors } from '../../constants/colors';

type Props = {
  places: Place[];
};
export default function PlacesList({ places }: Props) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
      </View>
    );
  }
  const handlePlaceSelect = () => {};

  return (
    <FlatList
      data={places}
      renderItem={(itemData) => <PlaceItem place={itemData.item} onSelect={handlePlaceSelect} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary100,
  },
});
