import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpensesChart";
import ExpensesList from "./ExpenseList";
import './Expenses.css'


function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2023');

    // got the filtered year from ExpenseFilter Component 
    // by the function below
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    //used the filtered year here to sort the array
    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // THE CODE BELOW HAS BEEN SHIFTED TO EXPENSELIST COMPONENT
    // let expenseContent = <p>No Expenses for This Year</p>

    // if (filteredExpenses.length > 0) {

    //     expenseContent = filteredExpenses.map(
    //         (expense) => (
    //             <ExpenseItem
    //                 key={expense.id}
    //                 title={expense.title}
    //                 amount={expense.amount}
    //                 date={expense.date}>
    //             </ExpenseItem>)
    //     )

    // }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}>
                </ExpensesFilter>

                <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
                <ExpensesList items={filteredExpenses}></ExpensesList>

                {/* {expenseContent} */}

            </Card>
        </div>
    )
}

export default Expenses;