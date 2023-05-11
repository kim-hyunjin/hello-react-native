import { useContext } from 'react';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { ExpensesContext } from '../store/context/expenses-context';
import { getDateMinusDays } from '../utils/date';

export default function RecentExpense() {
  const expenseCtx = useContext(ExpensesContext);

  const recentExpenses = expenseCtx.expenses.filter((ex) => {
    const today = new Date();
    const date7DAgo = getDateMinusDays(today, 7);
    return ex.date > date7DAgo;
  });

  return <ExpensesOutput expenses={recentExpenses} expensePeriod='Last 7 Days' />;
}
