import { useState } from "react";
import NewExpense from "./Components/NewExpenses/NewExpense";
import Expenses from "./Components/Expenses/Expenses"

const dummyexpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2025, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2024, 5, 12),
  },
];

function App() {

  const [expense, setExpense] = useState(dummyexpenses);

  const addExpenseHandler = (expense) => {
    setExpense(prevexpense => {
      return [expense, ...prevexpense]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expense}></Expenses>
    </div>
  );
}

export default App;
