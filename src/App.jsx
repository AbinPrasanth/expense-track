import React, { useState, useEffect } from "react";
import Form from "./Form.jsx";
import List from "./List.jsx";
import Total from "./Total.jsx";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Form addExpense={addExpense} />
      <List expenses={expenses} deleteExpense={deleteExpense} />
      <Total expenses={expenses} />
    </div>
  );
}

export default App;