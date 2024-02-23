import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from "react-native";
function MealItem({ title, duration, complexity, affordability, imageUrl }) {
  return (
    <View style={styles.mealItem}>
      <Pressable style={({pressed})=> pressed ? styles.buttonPressed : null} android_ripple={{color : '#ccc'}}>
        <View style={styles.imageContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image}></Image>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <View style={styles.details}>
              <Text style={styles.detailItem}>{duration}m</Text>
              <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
              <Text style={styles.detailItem}>
                {affordability.toUpperCase()}
              </Text>
            </View>
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
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
