import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

const BottomTab=createBottomTabNavigator()
// const Drawer = createDrawerNavigator();
export default function App() {
  return (  
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName='Welcome' screenOptions={{headerStyle : {backgroundColor : '#3c0a6b'}, headerTintColor : 'white', drawerActiveBackgroundColor : 'black', drawerActiveTintColor : 'white', drawerStyle : {backgroundColor : 'yellow'}}}>
    //     <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{drawerLabel : 'Welcome Screen', drawerIcon : ({color,size})=><Ionicons color={color} size={size} name="home" />}} />
    //     <Drawer.Screen name="User" options={{drawerIcon : ({color,size})=><FontAwesome name="user" size={size} color={color} />}} component={UserScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen options={{tabBarIcon : ({color,size})=><Ionicons name="home-sharp" size={size} color={color} />}} name="Welcome" component={WelcomeScreen} />
        <BottomTab.Screen options={{tabBarIcon : ({color,size})=><Ionicons name="person" size={size} color={color} />}} name="User" component={UserScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}
