import { View, StyleSheet } from 'react-native';
import { ManageExpenseScreenProps } from '../navigation/types';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/context/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { Expense, NewExpense } from '../types/expense';
import { deleteExpense, storeExpense, updateExpense } from '../utils/http';

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

  const deleteExpenseHandler = async () => {
    expenseCtx.deleteExpense(expenseId);
    await deleteExpense(expenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const submitHandler = async (expenseData: NewExpense) => {
    if (isEditing) {
      const updatedExpense: Expense = {
        ...expenseData,
        id: expenseId,
      };
      expenseCtx.updateExpense(updatedExpense);
      await updateExpense(updatedExpense);
    } else {
      const id = await storeExpense(expenseData);
      expenseCtx.addExpense({ ...expenseData, id });
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
