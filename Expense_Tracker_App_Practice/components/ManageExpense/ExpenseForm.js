import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useContext, useState } from "react";
import Button from "../../UI/Button";
import { ExpensesContext } from "../../store/expenses-context";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({onCancel,submitButtonLabel,onSubmit,defaultValues}) {
    const [inputValues,setInputValues]=useState({
        amount : defaultValues?defaultValues.amount.toString(): "",
        date : defaultValues? getFormattedDate(defaultValues.date): "",
        description : defaultValues?defaultValues.description: "",
    });
    function inputChangeHandler(inputIdentifier,enteredText) {
        setInputValues((curInputValues)=>{
            return {
                ...curInputValues,
                [inputIdentifier] : enteredText,
            }
        })
    }

    function submitHandler(){
        const expenseData={
            amount : +inputValues.amount,
            date : new Date(inputValues.date),
            description : inputValues.description,
        };

        const amountIsvalid=!isNaN(expenseData.amount) && expenseData.amount>0;
        const dateIsValid=expenseData.date.toString()!=='Invalid Date';
        const descriptionIsvalid=expenseData.description.trim().length>0;

        if(!amountIsvalid || !dateIsValid || !descriptionIsvalid){
            Alert.alert("Invalid input","Please check your values");
            return;
        }

        onSubmit(expenseData);
    }
    return <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
            <Input
                style={styles.rowInput}
                label="Amount"
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this,'amount'),
                    value : inputValues.amount,
                }}
            />
            <Input
                style={styles.rowInput}
                label="Date"
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this,'date'),
                    value : inputValues.date,
                }} />
        </View>
        <Input 
        label="Description" 
        textInputConfig={{
            multiline: true,
            onChangeText: inputChangeHandler.bind(this,'description'),
            value : inputValues.description,
        }}
        />
        <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
    </View>
}

export default ExpenseForm;

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
    form:{
        marginTop : 40,
        marginBottom : 20,
    },
    title : {
        fontSize : 24,
        fontWeight : 'bold',
        color : 'white',
        textAlign : 'center',

    },
    buttons : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    button : {
        minWidth : 120,
        marginHorizontal : 8,
    },
})