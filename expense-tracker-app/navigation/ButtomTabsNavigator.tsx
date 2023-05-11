import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteName } from './route-name';
import RecentExpense from '../screens/RecentExpense';
import AllExpenses from '../screens/AllExpenses';
import { GlobalStyles } from '../constants/styles';
import { Ionicons } from '@expo/vector-icons';

const BottomTabs = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTabs.Screen
        name={RouteName.RECENT_EXPENSE}
        component={RecentExpense}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => <Ionicons name='hourglass' size={size} color={color} />,
        }}
      />
      <BottomTabs.Screen
        name={RouteName.ALL_EXPENSE}
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => <Ionicons name='calendar' size={size} color={color} />,
        }}
      />
    </BottomTabs.Navigator>
  );
}
