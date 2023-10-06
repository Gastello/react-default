import CostItem from "./CostItem";

function CostItems(props) {
  return (
    <div className="page">
      {props.items.map((item, index) => (
        <CostItem
          name={item.name}
          cost={item.cost}
          date={item.date}
          key={index}
        />
      ))}
    </div>
  );
}

export default CostItems;
