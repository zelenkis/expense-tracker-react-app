import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <Card viewMode={props.viewMode}>
            <div className={'expense-item ' + props.viewMode} id={props.id}>
                <div>{props.date}</div>
                <div className={'expense-item__description ' + props.viewMode}>
                    <h2>{props.title}</h2>
                    <div className={'expense-item__price ' + props.viewMode} >{props.amount} MDL</div>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;