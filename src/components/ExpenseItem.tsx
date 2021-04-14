//Class Components

// /**
//  * @class ExpenseItem
//  */
// import * as React from "react";

// export type Props = { text: string };

// export class ExpenseItem extends React.Component<Props>  {
//   render() {
//     const { text } = this.props;
//     return <div style={{ color: "red" }}>Expense Item {text}</div>;
//   }
// }

//Function Components
import { Card } from "./Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

// Declaring type of props - see "Typing Component Props" for more examples
interface ExpenseItemProps {
  id: number;
  message: string;
  title: string;
  date: Date;
} /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component;
const ExpenseItem = ({
  id,
  message,
  title,
  date,
}: ExpenseItemProps): JSX.Element => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{message}</div>
      </div>
    </Card>
  );
}

export { ExpenseItem };
export type { ExpenseItemProps };

//Class Components readonly

// /**
//  * @class ExpenseItem
//  */
//  import * as React from "react";

//  export class ExpenseItem extends React.Component  {
//    render() {
//       return <div style={{ color: "red" }}>Expense Item</div>;
//    }
//  }
