import React from "react";

const Like = props => {
  let classes = "fa fa-heart";
  classes += props.liked === false ? "-o" : "";
  return (
    <i
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
      onClick={props.onClicked}
    />
  );
};

export default Like;
