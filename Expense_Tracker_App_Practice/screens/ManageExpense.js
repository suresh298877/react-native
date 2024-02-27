import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../UI/Button";
import IconButton from "../UI/IconButton";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
function ManageExpense({ route, navigation }) {
    const expenseCtx=useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        }, [navigation, isEditing]);
    });

    function deleteExpenseHandler() {
        expenseCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler(){
        navigation.goBack();
    }

    function confirmHandler(){
        if (isEditing){
            expenseCtx.updateExpense(
                editedExpenseId,
                {
                    description : 'Test!!!!!!',
                    amount : 29.999,
                    date : new Date('2022-05-20'),
                }
            );
        }else{
            expenseCtx.addExpense({
                description : 'Test',
                amount : 19.999,
                date : new Date('202205-19'),
            })
        }
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <ExpenseForm
            submitButtonLabel={isEditing ? 'Update' : 'Add'}
            onCancel = {cancelHandler}
             />
            
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.primary500}
                        size={36}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    )
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },
});