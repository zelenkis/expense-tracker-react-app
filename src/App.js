import Expenses from './components/Expenses/Expenses';
import expenses from './API/data';
import LightModeToggle from './components/LightMode/LightModeToggle';
import NewExpense from './components/NewExpense/NewExpense';


function App() {

  const addExpenseToListHandler = expenseItem => {
    console.log('App.js', 'submitting new expense to the list...');
    console.log(expenseItem);

  }

  return (
    <div>
      <LightModeToggle />
      <h2 className='app__title'>Expenses Tracker </h2>
      <NewExpense onSubmitExpense={addExpenseToListHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
