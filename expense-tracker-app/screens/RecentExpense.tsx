import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { DUMMY_EXPENSES } from '../fixture/dummy-expenses';

export default function RecentExpense() {
  return <ExpensesOutput expenses={DUMMY_EXPENSES} expensePeriod='Last 7 Days' />;
}
