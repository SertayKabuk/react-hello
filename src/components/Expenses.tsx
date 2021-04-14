import { ExpenseItem, ExpenseItemProps } from "./ExpenseItem";
import "./Expenses.css";

type ExpenseProp = {
  expenseItemList: Array<ExpenseItemProps>;
};

const Expenses = ({ expenseItemList }: ExpenseProp): JSX.Element => {
  const items: Array<JSX.Element> = [];

  expenseItemList.forEach((element) => {
    items.push(
      <ExpenseItem
        message={element.message}
        title={element.title}
        date={element.date}
      ></ExpenseItem>
    );
  });

  return <div className="expenses">{items}</div>;
};

export { Expenses };
