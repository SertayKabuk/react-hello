import { Expenses } from "./components/Expenses";
import { ExpenseItemProps } from "./components/ExpenseItem";

function App() {
  const items: Array<ExpenseItemProps> = [
    {
      id: 1,
      title: "Cat",
      message: "94.12",
      date: new Date(2020, 7, 14),
    },
    {
      id: 2,
      title: "Dog",
      message: "98.00",
      date: new Date(2000, 2, 7),
    },
    {
      id: 3,
      title: "Human",
      message: "00.05",
      date: new Date(1985, 1, 1),
    },
  ];

  return (
    <div>
      <Expenses expenseItemList={items}></Expenses>
    </div>
  );
}

export default App;
