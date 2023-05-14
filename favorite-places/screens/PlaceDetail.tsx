import { ScrollView, Image, Text, View, StyleSheet } from 'react-native';
import OutlinedButton from '../components/UI/OutlinedButton';
import { Colors } from '../constants/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/StackNavigation';
import { RouteName } from '../navigation/route-name';

import { useEffect } from 'react';

type Props = NativeStackScreenProps<StackParamList, RouteName.DETAIL>;
export default function PlaceDetail({ route }: Props) {
  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    // selectedPlaceId
    console.log({ selectedPlaceId });
  }, [selectedPlaceId]);

  const showOnMapHandler = () => {};
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: '' }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>address</Text>
        </View>
        <OutlinedButton icon='map' onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
