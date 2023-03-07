import { useState } from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <Card>
            <div className='expense-item' id={props.id}>
                <div>{props.date}</div>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>{props.amount} MDL</div>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;