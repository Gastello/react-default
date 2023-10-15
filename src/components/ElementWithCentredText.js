import "./ElementWithCentredText.css";

function ElementWithCentredText(props) {
  const classes = props.className;
  return <div className={"centred-text " + classes}>{props.children}</div>;
}

export default ElementWithCentredText;