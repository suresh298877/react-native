import {StyleSheet, Text} from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../Data/dummy-data";
import { View } from "react-native";

function FavouriteScreen(){

    const favoriteMealsCtx=useContext(FavoritesContext);
    const favoriteMeals=MEALS.filter((meal)=>favoriteMealsCtx.ids.includes(meal.id));

    if (favoriteMeals.length === 0){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
    }
    return <MealsList items={favoriteMeals} />
}

export default FavouriteScreen;

const styles=StyleSheet.create({
    rootContainer :{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        fontSize : 18,
        fontWeight : 'bold',
        color : 'white',
    }
})