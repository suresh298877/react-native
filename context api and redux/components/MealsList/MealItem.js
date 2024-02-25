import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem({ id, title, duration, complexity, affordability, imageUrl }) {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate('MealDetail', { mealId: id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable onPress={selectMealItemHandler} style={({pressed})=> pressed ? styles.buttonPressed : null} android_ripple={{color : '#ccc'}}>
        <View style={styles.imageContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image}></Image>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
  },
  buttonPressed : {
    opacity : 0.5,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  
});
