import { Text } from "react-native";
import { useLayoutEffect } from "react";
function ManageExpense({ route, navigation }) {
    
    const editedExpenseId = route.params?.expenseId;
    const idEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: idEditing ? 'Edit Expense' : 'Add Expense'
        }, [navigation, idEditing]);
    });
    return <Text>RecentExpenses</Text>
}

export default ManageExpense;