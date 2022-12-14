import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.onClick} className="button">
        Details
      </button>
    </React.Fragment>
  );
};

export default Button;
