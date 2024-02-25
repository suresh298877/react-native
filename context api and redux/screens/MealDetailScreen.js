import { View, Text, Image, StyleSheet, ScrollView,Button } from "react-native";
import { MEALS } from "../Data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";
function MealDetailScreen({ route, navigation }) {

  // const favoriteMealsCtx=useContext(FavoritesContext);

  const favoriteMealIds=useSelector((state)=>state.favoriteMeals);
  const dispatch=useDispatch();
    const mealId = route.params.mealId;

    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.ids.includes(mealId);
    
    function changeFavoriteStatusHandler() {
        // if (mealIsFavorite){
        //   favoriteMealsCtx.removeFavorite(mealId);
        // }
        // else{
        //   favoriteMealsCtx.addFavorite(mealId);
        // }


        if (mealIsFavorite){
          dispatch(removeFavorite({id : mealId}));
        }
        else{
          dispatch(addFavorite({id : mealId}));
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color={'white'} onPress={changeFavoriteStatusHandler} />
            }
        })
    },[navigation,changeFavoriteStatusHandler])

  const selectedMeal = MEALS.find((meal) => meal.id == mealId);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },
  image: {
    height: 350,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
