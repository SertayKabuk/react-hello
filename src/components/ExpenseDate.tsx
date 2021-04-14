type ExpenseDateProp = {
  date: Date;
};

const ExpenseDate = ({ date }: ExpenseDateProp): JSX.Element => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export { ExpenseDate };
