import { useState } from 'react';
import showErrorMessage from '../../methods/showErrorMessage';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [titleInput, setTitle] = useState('');
    const [amountInput, setAmount] = useState('');
    const [dateInput, setDate] = useState('');
    /* Alternative approach to multiple state calls: */
    // const [userInput, setValue] = useState({
    //     title: '',
    //     amount: '',
    //     date: '',
    // });

    const titleChangeHandler = (e) => {
        const value = e.target.value;
        setTitle(value);
        /* Alternative approach to multiple state calls: */
        // setValue((prevState) => {
        //     return { ...prevState, title: value }
        // });

    };

    const amountChangeHandler = (e) => {
        const value = e.target.value;
        setAmount(value);
    };

    const dateChangeHandler = (e) => {
        const value = e.target.value;
        setDate(value);
    };

    const submitNewExpense = (e) => {
        e.preventDefault();
        let errorList = [];

        if (!titleInput || titleInput === '') errorList.push(showErrorMessage('REQUIRED_FIELD', 'Title'));
        if (!amountInput || amountInput === '') errorList.push(showErrorMessage('REQUIRED_FIELD', 'Amount'));
        if (!dateInput || dateInput === '') errorList.push(showErrorMessage('REQUIRED_FIELD', 'Date'));

        if (errorList.length <= 0) {
            const expenseData = {
                title: titleInput,
                amount: +amountInput,
                date: (new Date(dateInput)).toString(),
            }

            props.onSaveExpenseData(expenseData);
            setTitle('');
            setAmount('');
            setDate('');
        } else {
            alert(errorList.join('\n'));
            console.error(errorList.join('\n'));
        }

    };

    return (
        <form onSubmit={submitNewExpense}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={titleInput}
                        onChange={titleChangeHandler}
                        placeholder='Add title...'
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={amountInput}
                        onChange={amountChangeHandler}
                        min='0.01'
                        step='0.01' placeholder='Add amount...'
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        value={dateInput}
                        onChange={dateChangeHandler}
                        min='2022-01-01'
                    />
                </div>

            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;