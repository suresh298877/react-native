import { useContext } from "react";
import ExpensesOutput from "../components/Expenses Output/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
function RecentExpenses(){
    const expensesCtx=useContext(ExpensesContext);

    const recentExpenses=expensesCtx.expenses.filter((expense)=>{
        const today=new Date();
        const date7DaysAgo=getDateMinusDays(today,7);
        return expense.date>date7DaysAgo;
    });

    return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallbackText={"No Expenses Registered for the last 7 days"} />
}

export default RecentExpenses;