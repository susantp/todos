import React from "react";

const Completed = props => {
  let classes = "fa fa-check-circle";
  classes += props.list.completed === false ? "-o" : "";
  return (
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={() => props.onClicked(props.list)}
    />
  );
};

export default Completed;
