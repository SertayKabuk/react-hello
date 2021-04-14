import { ExpenseItem, ExpenseItemProps } from "./ExpenseItem";
import { Card } from "./Card";
import "./Expenses.css";

type ExpenseProp = {
  expenseItemList: Array<ExpenseItemProps>;
}

const Expenses = ({ expenseItemList }: ExpenseProp): JSX.Element => {
  const items: Array<JSX.Element> = [];

  expenseItemList.forEach((element) => {
    items.push(
      <ExpenseItem
        key={element.id} //key must be added if an array of elements created programmatically //skabuk
        id={element.id}
        message={element.message}
        title={element.title}
        date={element.date}
      ></ExpenseItem>
    );
  });

  return <Card className="expenses">{items}</Card>;
}

export { Expenses };
