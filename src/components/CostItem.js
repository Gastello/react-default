import "./CostItem.css";
import ElementWithCentredText from "./ElementWithCentredText"
import CostItemDate from "./CostItemDate";
function CostItem(props) {
  return (
    <div className="item">
      <ElementWithCentredText className="item__cost">{props.cost}$</ElementWithCentredText>
      <ElementWithCentredText className="item__name">{props.name}</ElementWithCentredText>
      <CostItemDate date={props.date} />
    </div>
  );
}
// hi
export default CostItem;
