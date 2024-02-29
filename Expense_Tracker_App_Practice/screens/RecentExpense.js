import { useContext, useEffect, useState } from "react";
import LoadingOverlay from "../UI/LoadingOverlay";
import ExpensesOutput from "../components/Expenses Output/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
function RecentExpenses(){
    const [isFetching, setIsFetching]=useState(true);
    const expensesCtx=useContext(ExpensesContext);

    useEffect(()=>{
        async function getExpenses(){
            setIsFetching(true);
            const expenses = await fetchExpenses();
            setIsFetching(false);
            expensesCtx.setExpenses(expenses);
        }
        getExpenses()
    },[]);

    if(isFetching){
        return <LoadingOverlay />
    }

    const recentExpenses=expensesCtx.expenses.filter((expense)=>{
        const today=new Date();
        const date7DaysAgo=getDateMinusDays(today,7);
        return expense.date>date7DaysAgo;
    });

    return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallbackText={"No Expenses Registered for the last 7 days"} />
}

export default RecentExpenses;