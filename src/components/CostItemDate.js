import ElementWithCentredText from "./ElementWithCentredText";
function CostItemDate(props) {
  const date = props.date
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join(".");

  return (
    <ElementWithCentredText className="item__date">
      {date}
    </ElementWithCentredText>
  );
}

export default CostItemDate;
