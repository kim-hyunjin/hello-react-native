import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PlaceForm from '../components/Places/PlaceForm';
import { Place } from '../models/place';
import { StackParamList } from '../navigation/StackNavigation';
import { RouteName } from '../navigation/route-name';

type Props = NativeStackScreenProps<StackParamList>;
export default function AddPlace({ navigation }: Props) {
  const createPlaceHandler = (place: Place) => {
    navigation.navigate(RouteName.ALL_PLACES, { place });
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}
