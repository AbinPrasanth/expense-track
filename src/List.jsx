import React from "react";

function List({ expenses, deleteExpense }) {
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.description}</span> - <span>${expense.amount}</span> (
            {expense.category})
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;