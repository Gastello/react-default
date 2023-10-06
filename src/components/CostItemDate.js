function CostItemDate(props) {
  const date = props.date
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join(".");

  return <div className="item__date">{date}</div>;
}

export default CostItemDate;
