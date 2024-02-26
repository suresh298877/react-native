import { createContext, useReducer } from "react";



const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date: new Date('2024-02-17'),
    },
    {
        id: 'e2',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e3',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e4',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e5',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e6',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e7',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e8',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e9',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e10',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e11',
        description: 'ldska;lsdkf',
        amount: 89.23,
        date: new Date('2022-02-18'),
    },
]
export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses

        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload.id);
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };
    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>
}

export default ExpensesContextProvider;