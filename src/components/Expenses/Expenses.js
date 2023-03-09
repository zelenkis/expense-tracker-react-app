import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import generateKey from '../../methods/generateUniqueKey';
import './Expenses.css';
import Chart from '../Chart/Chart';


function Expenses(props) {
    // console.log('Expenses - Chart: ', props.items);

    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);

    const filteredItems = props.items.filter((expense) => {
        const date = new Date(expense.date).getFullYear();
        return (date.toString() === filteredYear) || filteredYear === '0';
    })



    const modeValue = props.modeValue;

    let expensesContent = (filteredItems.length > 0) ?
        filteredItems.map((expense) => {
            return (<ExpenseItem
                viewMode={modeValue}
                key={generateKey()}
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={new Date(expense.date).toLocaleDateString()}
            ></ExpenseItem>
            )
        }) : <div className='empty-expenses'>
            <p>No expenses found...</p>
        </div>

    return (
        <div className="expenses">
            <Chart items={filteredItems} />
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {expensesContent}

        </div>
    )
}

export default Expenses;