import React from "react";

export const HalfImgHalfText = (props) => {
  return (
    <div>
      <div>
        <div className=" row m-0 w-100 ">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=" col-lg-5  col-12 p-0"
          >
            <img src={props.src} className="HTHI-Container" alt="" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=" col-lg-7  col-12 p-0"
          >
            {props.text}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
