import { ExpenseItem } from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's gooooo!</h2>
      <ExpenseItem message="1" title="Item" date={new Date(2021, 2, 12)}></ExpenseItem>
      <ExpenseItem message="2" title="Item" date={new Date(2021, 2, 12)}></ExpenseItem>
    </div>
  );
}

export default App;
