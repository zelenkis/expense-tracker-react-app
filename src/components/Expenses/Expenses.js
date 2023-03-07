import ExpenseItem from './ExpenseItem';
import generateKey from '../../methods/generateUniqueKey';
import expenses from '../../API/data';
import './Expenses.css';

function Expenses(props) {
    // console.log('Expenses props:', props);

    return (
        <div className="expenses">
            {
                expenses.map(function (expense) {
                    return (<ExpenseItem key={generateKey()}
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