import Expenses from './components/Expenses/Expenses';
import initialExpenses from './API/data';
import LightModeToggle from './components/LightMode/LightModeToggle';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';


function App() {

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseToListHandler = (newExpenseItem) => {
    setExpenses((prevExpenses) => {
      return [newExpenseItem, ...prevExpenses];
    });
  }

  const [modeValue, setModeValue] = useState(true);

  const getModeBooleanHandler = (item) => {
    console.log(item);
    if (item) setModeValue('dark-mode');
    if (!item) setModeValue('light-mode');

  }


  return (
    <div>
      <LightModeToggle viewModeToggleValue={getModeBooleanHandler} />
      <h2 className='app__title'>Expenses Tracker </h2>
      <NewExpense onSubmitExpense={addExpenseToListHandler} />
      <Expenses modeValue={modeValue} items={expenses} />
    </div>
  );
}

export default App;
