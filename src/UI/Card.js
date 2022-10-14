import React from "react";
import "./Card.scss";

const Button = (props) => {
  return (
    <React.Fragment>
      <div className="card-component">{props.children}</div>
    </React.Fragment>
  );
};

export default Button;
