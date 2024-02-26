import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";



const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date : new Date('2022-02-18'),
    },
    {
        id: 'e2',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date : new Date('2022-02-18'),
    },
    {
        id: 'e3',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date : new Date('2022-02-18'),
    },
    {
        id: 'e4',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date : new Date('2022-02-18'),
    },
    {
        id: 'e5',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date : new Date('2022-02-18'),
    },
    {
        id: 'e6',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date : new Date('2022-02-18'),
    },
    {
        id: 'e7',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date : new Date('2022-02-18'),
    },
    {
        id: 'e8',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date : new Date('2022-02-18'),
    },
    {
        id: 'e9',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date : new Date('2022-02-18'),
    },
    {
        id: 'e10',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date : new Date('2022-02-18'),
    },
    {
        id: 'e11',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date : new Date('2022-02-18'),
    },
]
function ExpensesOutput({expenses,expensesPeriod}){
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES}  />
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom : 0,
        backgroundColor : GlobalStyles.colors.primary700,
    }
})