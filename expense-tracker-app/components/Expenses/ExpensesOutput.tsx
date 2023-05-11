import { View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { Expense } from '../../types/expense';

type Props = {
  expenses: Expense[];
  expensePeriod: string;
};
export default function ExpensesOutput({ expenses, expensePeriod }: Props) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensePeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}
