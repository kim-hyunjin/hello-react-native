import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Expense } from '../../types/expense';
import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../utils/date';
import { RouteName } from '../../navigation/route-name';
import { StackParamList } from '../../navigation/types';
import CustomPressable from '../UI/CustomPressable';

type Props = {
  expense: Expense;
};
export default function ExpenseItem({ expense }: Props) {
  const { description, amount, date } = expense;

  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const expensePressHandler = () => {
    navigation.navigate(RouteName.MANAGE_EXPENSE, {
      expenseId: expense.id,
    });
  };

  return (
    <CustomPressable pressableProps={{ onPress: expensePressHandler }}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.textBase, styles.amount]}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </CustomPressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
