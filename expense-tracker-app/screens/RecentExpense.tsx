import { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { ExpensesContext } from '../store/context/expenses-context';
import { getDateMinusDays } from '../utils/date';
import { fetchExpenses } from '../utils/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';

export default function RecentExpense() {
  const [isFetching, setIsFetching] = useState(true);
  const expenseCtx = useContext(ExpensesContext);

  const recentExpenses = expenseCtx.expenses.filter((ex) => {
    const today = new Date();
    const date7DAgo = getDateMinusDays(today, 7);
    return ex.date >= date7DAgo;
  });

  useEffect(() => {
    setIsFetching(true);
    fetchExpenses().then((expenses) => {
      expenseCtx.setExpenses(expenses);
      setIsFetching(false);
    });
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensePeriod='Last 7 Days'
      fallbackText='No expenses registered for the last 7 days'
    />
  );
}
