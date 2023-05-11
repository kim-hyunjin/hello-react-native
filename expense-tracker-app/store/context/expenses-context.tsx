import { ReactNode, createContext, useReducer } from 'react';
import { Expense, NewExpense } from '../../types/expense';
import { DUMMY_EXPENSES } from '../../fixture/dummy-expenses';

type ExpenseContextProps = {
  expenses: Expense[];
  addExpense: (newExpense: NewExpense) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (expense: Expense) => void;
};

export const ExpensesContext = createContext<ExpenseContextProps>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});

export interface AddExpenseAction {
  type: 'add';
  payload: NewExpense;
}
export interface DeleteExpenseAction {
  type: 'delete';
  payload: string;
}
export interface UpdateExpenseAction {
  type: 'update';
  payload: Expense;
}
export type ExpenseActions = AddExpenseAction | DeleteExpenseAction | UpdateExpenseAction;

function expensesReducer(expenses: Expense[], action: ExpenseActions) {
  switch (action.type) {
    case 'add':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...expenses];
    case 'delete':
      return expenses.filter((ex) => ex.id !== action.payload);
    case 'update':
      const updatableIndex = expenses.findIndex((ex) => ex.id === action.payload.id);
      const updatableExpense = expenses[updatableIndex];
      const updatedItem = { ...updatableExpense, ...action.payload };
      const updatedExpenses = [...expenses];
      updatedExpenses[updatableIndex] = updatedItem;
      return updatedExpenses;
    default:
      return expenses;
  }
}

export default function ExpensesContextProvider({ children }: { children: ReactNode }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (newExpense: NewExpense) => {
    dispatch({
      type: 'add',
      payload: newExpense,
    });
  };
  const deleteExpense = (id: string) => {
    dispatch({
      type: 'delete',
      payload: id,
    });
  };
  const updateExpense = (expense: Expense) => {
    dispatch({
      type: 'update',
      payload: expense,
    });
  };
  const value: ExpenseContextProps = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}
