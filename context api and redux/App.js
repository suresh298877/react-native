import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: "brown" },
    contentStyle: { backgroundColor: '3f2f25' },
    drawerContentStyle: { backgroundColor: '#351401' },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: 'yellow',
    drawerActiveBackgroundColor: 'blue'
  }}>
    <Drawer.Screen component={CategoriesScreen} name='Categories' options={{ title: 'All Categories', drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} /> }} />
    <Drawer.Screen options={{ drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} /> }} component={FavouriteScreen} name='Favourites' />
  </Drawer.Navigator>
}
export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '3f2f25' }
            }}
            initialRouteName=''>
            <Stack.Screen options={{ title: 'All Categories', headerShown: false }} name='Drawer' component={DrawerNavigator} />
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
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: 'About the meal' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
