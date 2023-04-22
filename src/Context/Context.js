import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 500,
    category: "Deposits",
    date: "2021-01-19",
    id: "36aa3b11-670c-49ac-8d7f-bf2d19a7e6e6",
    type: "Income",
  },
  {
    amount: 100,
    category: "Phone",
    date: "2021-01-19",
    id: "36aa3b11-670c-49ac-8d1f-bf2d19a7e6e6",
    type: "Expense",
  },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === "Expense"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance}}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
