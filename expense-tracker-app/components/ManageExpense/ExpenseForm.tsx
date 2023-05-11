import { View, StyleSheet, Text } from 'react-native';
import { useState, useCallback, useContext } from 'react';
import Input from './Input';
import CustomButton from '../UI/CustomButton';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ExpensesContext } from '../../store/context/expenses-context';
import { StackParamList } from '../../navigation/types';
import { getFormattedDate } from '../../utils/date';

type Props = {};
export default function ExpenseForm({}: Props) {
  const navigation = useNavigation();
  const expenseCtx = useContext(ExpensesContext);
  const route = useRoute<RouteProp<StackParamList>>();

  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const oldExpense = expenseCtx.expenses.find((ex) => ex.id === expenseId);

  const [inputValue, setInputValue] = useState({
    amount: oldExpense ? String(oldExpense.amount) : '',
    date: oldExpense ? getFormattedDate(oldExpense.date) : '',
    description: oldExpense?.description ?? '',
  });

  const amountChangeHandler = useCallback((enteredAmount: string) => {
    setInputValue((prev) => ({
      ...prev,
      amount: enteredAmount,
    }));
  }, []);

  const dateChangeHandler = useCallback((enteredDate: string) => {
    setInputValue((prev) => ({
      ...prev,
      date: enteredDate,
    }));
  }, []);

  const descriptionChangeHandler = useCallback((enteredDescriptoin: string) => {
    setInputValue((prev) => ({
      ...prev,
      description: enteredDescriptoin,
    }));
  }, []);

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    const expenseData = {
      amount: +inputValue.amount,
      date: new Date(inputValue.date),
      description: inputValue.description,
    };
    if (isEditing) {
      expenseCtx.updateExpense({ ...expenseData, id: expenseId });
    } else {
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label={'Amount'}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler,
            value: inputValue.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label={'Date'}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: dateChangeHandler,
            value: inputValue.date,
          }}
        />
      </View>
      <Input
        label={'Description'}
        textInputConfig={{
          multiline: true,
          onChangeText: descriptionChangeHandler,
          value: inputValue.description,
          // autoCorrect: false // default is true
        }}
      />
      <View style={styles.buttonContainer}>
        <CustomButton mode='flat' onPress={cancelHandler} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton onPress={confirmHandler} style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
