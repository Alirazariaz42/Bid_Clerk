import React from "react";

export const HalfTextHalfImg2 = (props) => {
  return (
    <div>
      <div className=" row m-0 w-100 ">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className=" col-lg-8  col-12 p-0"
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
          className=" col-lg-4  col-12 p-0"
        >
          <img src={props.src} className="HTHI-Container" alt="" />
        </div>
      </div>
    </div>
  );
};
