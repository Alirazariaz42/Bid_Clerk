import React from "react";
import "./CommonStyle.css";
export const CommonHeading = (props) => {
  return (
    <div>
      <h2 className="CommonHeadingStyleContainer">
        <span className={`CommonHeadingStyle ${props.class}` }>{props.heading}</span>
      </h2>
    </div>
  );
};
