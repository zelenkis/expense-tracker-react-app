import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import generateKey from '../../methods/generateUniqueKey';
// import generateExpenseId from '../../methods/generateExpenseId';

const NewExpense = (props) => {

    const submitExpenseDataHandler = (expenseDataInput) => {
        console.log('Expense Data is submitted..');
        console.log(expenseDataInput);
        const expenseData = {
            ...expenseDataInput,
            id: generateKey()
        };

        props.onSubmitExpense(expenseData);


    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={submitExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;