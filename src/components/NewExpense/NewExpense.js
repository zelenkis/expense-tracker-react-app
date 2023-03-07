import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import generateKey from '../../methods/generateUniqueKey';

const NewExpense = (props) => {

    const submitExpenseDataHandler = (expenseDataInput) => {
        console.log('Expense Data is submitted..');
        const expenseData = {
            ...expenseDataInput,
            id: generateKey()
        };

        console.log('NewExpense:', props);
        props.onSubmitExpense(expenseData);

        console.log(expenseData);

    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={submitExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;