import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../UI/Button";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import Input from "./Input";

function ExpenseForm({ onCancel, submitButtonLabel, onSubmit, defaultValues }) {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : "",
            isValid : true,
        },
        date: {
            value : defaultValues ? getFormattedDate(defaultValues.date) : "",
            isValid : true,
        },
        description: {
            value : defaultValues ? defaultValues.description : "",
            isValid : true,
        }
    });
    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: {value : enteredValue,isValid : true},
            };
        })
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value,
        };

        const amountIsvalid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsvalid = expenseData.description.trim().length > 0;

        if (!amountIsvalid || !dateIsValid || !descriptionIsvalid) {
            // Alert.alert("Invalid input", "Please check your values");
            setInputs((curInputs)=>{
                return {
                    amount : {value : curInputs.amount.value, isValid : amountIsvalid},
                    date : {value : curInputs.date.value, isValid : dateIsValid},
                    description : {value : curInputs.description.value , isValid : descriptionIsvalid},
                }
            })
            return;
        }

        onSubmit(expenseData);
    }

    const formIsInvalid=!inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;
    return <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
            <Input
                style={styles.rowInput}
                label="Amount"
                invalid={!inputs.amount.isValid}
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputs.amount.value,
                }}
            />
            <Input
                style={styles.rowInput}
                label="Date"
                invalid={!inputs.date.isValid}
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputs.date.value,
                }} />
        </View>
        <Input
            label="Description"
            invalid={!inputs.description.isValid}
            textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputs.description.value,
            }}
        />
        {formIsInvalid && <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>}
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
    errorText :{
        textAlign : 'center',
        color : GlobalStyles.colors.error500,
    },
    form: {
        marginTop: 40,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
})