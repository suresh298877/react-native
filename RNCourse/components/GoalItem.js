import { StyleSheet, View, Text } from "react-native";
function GoalItem(props) {
    return <View style={styles.goalItem}>
        <Text style={{ color: 'white' }}>{props.text}</Text>
    </View>
};

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#5e0acc',
        margin: 8,
        padding: 8,
        color: 'white',
        borderRadius: 6,
    },
});
export default GoalItem;