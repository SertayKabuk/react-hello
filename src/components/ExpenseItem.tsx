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


// Declaring type of props - see "Typing Component Props" for more examples
type ExpenseItemProps = {
    message: string;
  }; /* use `interface` if exporting so that consumers can extend */
  
  // Easiest way to declare a Function Component; return type is inferred.
  const ExpenseItem = ({ message }: ExpenseItemProps): JSX.Element => <h2>Expense Item {message}</h2>;

  export {ExpenseItem}


// /**
//  * @class ExpenseItem
//  */
//  import * as React from "react";

//  export class ExpenseItem extends React.Component  {
//    render() {
//       return <div style={{ color: "red" }}>Expense Item</div>;
//    }
//  }