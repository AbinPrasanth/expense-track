import React from "react";

function Total({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div>
      <h2>Total Spent: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Total;