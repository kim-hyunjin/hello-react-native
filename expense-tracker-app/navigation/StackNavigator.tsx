import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteName } from './route-name';
import ManageExpense from '../screens/ManageExpense';
import BottomTabsNavigator from './ButtomTabsNavigator';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteName.EXPENSE_OVERVIEW}
        component={BottomTabsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={RouteName.MANAGE_EXPENSE} component={ManageExpense} />
    </Stack.Navigator>
  );
}
