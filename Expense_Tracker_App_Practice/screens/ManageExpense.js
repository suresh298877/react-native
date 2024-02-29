import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../UI/IconButton";
import LoadingOverlay from "../UI/LoadingOverlay";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
function ManageExpense({ route, navigation }) {
    const [isSubmitting,setIsSubmitting]=useState(false);
    const expenseCtx = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const selectedExpense=expenseCtx.expenses.find(
        (expense)=>expense.id===editedExpenseId
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        }, [navigation, isEditing]);
    });

    async function deleteExpenseHandler() {
        setIsSubmitting(true);
        expenseCtx.deleteExpense(editedExpenseId);
        const res=await deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expenseData) {
        setIsSubmitting(true);
        if (isEditing) {
            expenseCtx.updateExpense(
                editedExpenseId, expenseData
            );
            const res=await updateExpense(editedExpenseId,expenseData);
            // console.log(res);
        } else {
            const id = await storeExpense(expenseData);
            expenseCtx.addExpense({...expenseData , id : id});
        }
        navigation.goBack();
    }
    if(isSubmitting){
        return <LoadingOverlay />
    }
    return (
        <View style={styles.container}>
            <ExpenseForm
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                defaultValues={selectedExpense}
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