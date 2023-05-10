import 'react-native-gesture-handler';
import { Button, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import Colors from './constants/Colors';
import FavoritesScreen from './screens/FavoritesScreen';

export type StackParamList = {
  Drawer: undefined;
  MealsOverview: {
    categoryId: string;
  };
  MealDetail: {
    mealId: string;
  };
};

export type DrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const screenOption = {
  headerStyle: {
    backgroundColor: Colors.brown600,
  },
  headerTintColor: 'white',
  contentStyle: {
    backgroundColor: Colors.brown500,
  },
  sceneContainerStyle: {
    backgroundColor: Colors.brown500,
  },
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={screenOption}>
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style={'light'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOption}>
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const { categoryId } = route.params;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealsDetailScreen}
            options={{
              title: 'About the meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
