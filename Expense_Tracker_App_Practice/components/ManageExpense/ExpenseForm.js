import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../../UI/Button";

function ExpenseForm({onCancel,submitButtonLabel}) {
    const [inputValues,setInputValues]=useState({
        amount : "",
        date : "",
        description : '',
    });

    function inputChangeHandler(inputIdentifier,enteredText) {
        setInputValues((curInputValues)=>{
            return {
                ...curInputValues,
                [inputIdentifier] : enteredText,
            }
        })
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
                <Button style={styles.button} >{submitButtonLabel}</Button>
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