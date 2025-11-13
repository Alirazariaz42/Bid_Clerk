import React from "react";

export const BlueRows = (props) => {
  return (
    <div>
      <div className=" BlueRowsContainer">
        <h3 className=" text-center text-uppercase"> {props.heading}</h3>
        <span>{props.description}</span>
        <div className="row m-0 w-100 justify-content-center mt-4">
          <div className=" col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            {" "}
            <div>
              {" "}
              <p className=" paragrapg"> {props.row1} </p>{" "}
            </div>{" "}
          </div>
          <div className=" col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            {" "}
            <div>
              {" "}
              <p className=" paragrapg"> {props.row2} </p>{" "}
            </div>{" "}
          </div>
          <div className=" col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            {" "}
            <div>
              {" "}
              <p className=" paragrapg"> {props.row3} </p>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
