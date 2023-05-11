import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { DUMMY_EXPENSES } from '../fixture/dummy-expenses';

export default function AllExpenses() {
  return <ExpensesOutput expenses={DUMMY_EXPENSES} expensePeriod='Total' />;
}
