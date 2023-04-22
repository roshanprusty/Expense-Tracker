import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying : <br />
      Add {isIncome ? "Income " : "Expense "}
      for {isIncome ? "$250 " : "$50 "}
      in category {isIncome ? "Buisness " : "Food "}
      for {isIncome ? "Friday " : "Tomorrow "}
    </div>
  );
}; 

export default InfoCard;
