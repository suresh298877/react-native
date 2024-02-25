import { FlatList, Text, View } from "react-native";

function ExpensesOutput({expenses}){
    return (
        <View>
            <View>
                <Text>Last 7 Days</Text>
                <Text>$177.95</Text>
            </View>
            <FlatList />
        </View>
    )
}