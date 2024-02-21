import {View,Text,StyleSheet} from "react-native";
function GuessLogItem({roundNumber,guess}){
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem;

const styles=StyleSheet.create({
    listItem:{
        borderColor: 'white',
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor: "#f8f8ff",
        flexDirection:'row',
        justifyContent:'space-between',
        width: '100%',
        elevation: 4,
    },
    itemText:{
        fontFamily:"open-sans",
    }
})