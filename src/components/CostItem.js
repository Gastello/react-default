import "./CostItem.css";
import CostItemDate from "./CostItemDate";
function CostItem(props) {
  return (
    <div className="item">
      <div className="item__cost">{props.cost}$</div>
      <div className="item__name">{props.name}</div>
      <CostItemDate date={props.date} />
    </div>
  );
}

export default CostItem;
