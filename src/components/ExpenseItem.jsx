import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let expenseDate = new Date();

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  let todays = mm + "/" + dd + "/" + yyyy;

  const expenseTitle = "Car Insurance";
  const expenseAmount = 300.0;

  return (
    <div className="expense-item">
      <div>{todays}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
      <div>ExpenseItem {props.names}</div>
    </div>
  );
};

export default ExpenseItem;
