import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { Place } from '../../models/place';

type Prop = {
  place: Place;
  onSelect: () => void;
};
export default function PlaceItem({ place, onSelect }: Prop) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
