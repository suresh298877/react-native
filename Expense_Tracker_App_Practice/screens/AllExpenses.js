import { useContext } from "react";
import ExpensesOutput from "../components/Expenses Output/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
function AllExpenses(){

    const expensesCtx=useContext(ExpensesContext);
    return <ExpensesOutput expenses={expensesCtx.expenses} fallbackText={"No Registered Expenses found!"} expensesPeriod="Total" />
}

export default AllExpenses;