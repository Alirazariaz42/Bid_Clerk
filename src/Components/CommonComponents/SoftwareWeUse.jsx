import React from "react";
import { CommonHeading } from "./CommonHeading";

export const SoftwareWeUse = () => {
  return (
    <div>
      <CommonHeading heading="" />
      <p className=" fw-semibold fs-2 CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            Software’s We Use
            </span>
          </p>
      <div className=" row m-0 w-100 justify-content-center">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className=" col-md-4 col-sm-6 col-12 mt-0 mb-4 p-3"
        >
          <div
            style={{
              boxShadow:
                " 03px 3px 7px 3px rgba(150, 150, 150, 0.1), -3px -3px 7px 3px rgba(150, 150, 150, 0.1)",
              borderRadius: "30px",
            }}
            className=" text-center p-5 ps-md-4  "
          >
            <img
              src={require("../../Images/Softwarte.png")}
              className=" d-inline-block"
              width={200}
              alt=""
            />
            <p className=" paragrapg mt-3">
              A lot of our clients depend on Bluebeam for desktop, mobile, and
              server solutions.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className=" col-md-4 col-sm-6 col-12 mt-0 mb-4 p-3"
        >
          <div
            style={{
              boxShadow:
                " 03px 3px 7px 3px rgba(150, 150, 150, 0.1), -3px -3px 7px 3px rgba(150, 150, 150, 0.1)",
              borderRadius: "30px",
            }}
            className=" text-center p-5 ps-md-4  "
          >
            <img
              src={require("../../Images/Softwarte2.png")}
              className=" d-inline-block"
              width={200}
              alt=""
            />
            <p className=" paragrapg mt-3">
              OST includes powerful takeoff tools such as Typical Areas, Typical
              Groups.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className=" col-md-4 col-sm-6 col-12 mt-0 mb-4 p-3"
        >
          <div
            style={{
              boxShadow:
                " 03px 3px 7px 3px rgba(150, 150, 150, 0.1), -3px -3px 7px 3px rgba(150, 150, 150, 0.1)",
              borderRadius: "30px",
            }}
            className=" text-center p-5 ps-md-4  "
          >
            <img
              src={require("../../Images/Softwarte3.png")}
              className=" d-inline-block"
              width={200}
              alt=""
            />
            <p className=" paragrapg mt-3">
              The PlanSwift software was specifically designed for the
              construction industry, but it is not limited to it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
