import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import generateKey from '../../methods/generateUniqueKey';
import './Expenses.css';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);

    const filteredItems = props.items.filter((expense) => {
        console.log('FILTERING ITEMS...');
        const date = new Date(expense.date).getFullYear();
        return (date.toString() === filteredYear) || filteredYear === '0';
    })

    const modeValue = props.modeValue;
    console.log('Expenses props: ', props);
    console.log('modeValue: ', modeValue);
    return (
        <div className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {filteredItems.map((expense) => {
                return (<ExpenseItem
                    viewMode={modeValue}
                    key={generateKey()}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>
                )
            })
            }
        </div>
    )
}

export default Expenses;