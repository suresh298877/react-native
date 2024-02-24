import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle : {backgroundColor : '#351401'},
            headerTintColor : 'white',
            contentStyle : { backgroundColor : '3f2f25'}
          }}
         initialRouteName=''>
          <Stack.Screen options={{title : 'All Categories'}} name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen
            name='MealsOverviewScreen'
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            // const catId = route.params.categoryId;
            // return {
            //   title : catId,
            // }
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
