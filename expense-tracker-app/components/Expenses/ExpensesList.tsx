import { FlatList, ListRenderItemInfo, Text } from 'react-native';
import { Expense } from '../../types/expense';

type Props = {
  expenses: Expense[];
};
export default function ExpensesList({ expenses }: Props) {
  const renderExpenseItem = ({ item }: ListRenderItemInfo<Expense>) => {
    return <Text>{item.description}</Text>;
  };

  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={keyExtractor} />;
}

function keyExtractor(item: Expense, index: number) {
  return item.id;
}
