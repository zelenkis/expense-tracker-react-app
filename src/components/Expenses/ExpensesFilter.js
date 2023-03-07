import React, { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const [year, setYear] = useState(props.selected);

    const filteredYearHandler = (selection) => {
        props.onChangeFilter(selection.target.value);
        setYear(year);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={filteredYearHandler}>
                    <option value='0'>Show all</option>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;