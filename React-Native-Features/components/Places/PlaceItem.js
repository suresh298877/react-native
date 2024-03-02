import { Pressable, StyleSheet, Text, View } from "react-native";

function PlaceItem({place,onSelect}){
    return (
        <Pressable>
            <Image source={{uri : place.imageUri}} />
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    )
}

export default PlaceItem;

const styles=StyleSheet.create({

});