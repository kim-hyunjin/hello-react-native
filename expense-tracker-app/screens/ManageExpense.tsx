import { Text, View, StyleSheet } from 'react-native';
import { ManageExpenseScreenProps } from '../navigation/types';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import CustomButton from '../components/UI/CustomButton';
import { ExpensesContext } from '../store/context/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { Expense, NewExpense } from '../types/expense';

type Props = ManageExpenseScreenProps;

export default function ManageExpense({ route, navigation }: Props) {
  const expenseCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const oldExpense = expenseCtx.expenses.find((ex) => ex.id === expenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expenseCtx.deleteExpense(expenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const submitHandler = (expenseData: Expense | NewExpense) => {
    if (isEditing) {
      expenseCtx.updateExpense({ ...expenseData, id: expenseId });
    } else {
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm defaultValue={oldExpense} onCancel={cancelHandler} onSubmit={submitHandler} />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
