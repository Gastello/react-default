import ConstItems from "./components/CostItems";

function App() {
  const ITEMS = [
    {
      name: "IPhone 15 Pro",
      cost: 599.99,
      date: new Date(2023, 9, 7),
    },
    {
      name: "Xiaomi Q1E",
      cost: 500.0,
      date: new Date(2023, 11, 12),
    },
    {
      name: "Dyson",
      cost: 699.99,
      date: new Date(2023, 11, 25),
    },
    {
      name: "Golf IV",
      cost: 1500.0,
      date: new Date(2023, 11, 29),
    },
  ];
  return (
    <>
      <ConstItems items={ITEMS} />
    </>
  );
}

export default App;
