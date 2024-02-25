import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecentExpenses from './screens/RecentExpense';
import AllExpenses from './screens/AllExpenses';

const Stack=createNativeStackNavigator();
const BottomTabs=createBottomTabNavigator();

function ExpensesOverview(){
  retur (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomTabs.Screen name='AllExpenses' component={AllExpenses} />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack.Navigator>
      </Stack.Navigator>
    </>
  );
}
