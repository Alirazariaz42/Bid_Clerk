import React from "react";

export const HalfTextHalfImg = (props) => {
  return (
    <div>
      <div className=" row m-0 w-100 p-3">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className=" col-lg-8  col-12"
        >
          {" "}
          {props.text}{" "}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className=" col-lg-4 col-12 hthi2"
        >
          {" "}
          {props.Img}{" "}
        </div>
      </div>
    </div>
  );
};
