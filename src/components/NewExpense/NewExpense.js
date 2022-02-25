import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [shouldShowForm, setShouldShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const clickHandler = () => {
    if (shouldShowForm === false) {
      setShouldShowForm(true);
      console.log("Clicked!");
    } else {
      setShouldShowForm(false);
    }
  };

  if (!shouldShowForm) {
    return (
      <div className="new-expense">
        <button onClick={clickHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        showFormHandler={clickHandler}
        formDisplay={setShouldShowForm}
      />
    </div>
  );
};

export default NewExpense;
