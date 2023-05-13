import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteName } from './route-name';
import AllPlaces from '../screens/AllPlaces';
import AddPlace from '../screens/AddPlace';
import IconButton from '../components/UI/IconButton';
import { Colors } from '../constants/colors';

export type StackParamList = {
  [RouteName.ALL_PLACES]: undefined;
  [RouteName.ADD_PLACE]: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary500,
        },
        headerTintColor: Colors.gray700,
        contentStyle: {
          backgroundColor: Colors.gray700,
        },
      }}
    >
      <Stack.Screen
        name={RouteName.ALL_PLACES}
        component={AllPlaces}
        options={({ navigation }) => ({
          title: 'Your Favorite Places',
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
      <Stack.Screen
        name={RouteName.ADD_PLACE}
        component={AddPlace}
        options={{
          title: 'Add a new place',
        }}
      />
    </Stack.Navigator>
  );
}
