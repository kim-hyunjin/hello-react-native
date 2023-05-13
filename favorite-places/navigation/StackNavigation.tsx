import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteName } from './route-name';
import AllPlaces from '../screens/AllPlaces';
import AddPlace from '../screens/AddPlace';
import IconButton from '../components/UI/IconButton';

export type StackParamList = {
  [RouteName.ALL_PLACES]: undefined;
  [RouteName.ADD_PLACE]: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteName.ALL_PLACES}
        component={AllPlaces}
        options={({ navigation }) => ({
          headerRight({ tintColor }) {
            return (
              <IconButton
                icon='add'
                size={24}
                color={tintColor!}
                onPress={() => {
                  navigation.navigate(RouteName.ADD_PLACE);
                }}
              />
            );
          },
        })}
      />
      <Stack.Screen name={RouteName.ADD_PLACE} component={AddPlace} />
    </Stack.Navigator>
  );
}
