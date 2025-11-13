import React, { useContext } from "react";
import { CommonHeading } from "./CommonHeading";
import { MyContext } from "../Store/MyContext";

export const TURNAROUNDTIME = () => {
  const contextvalue = useContext(MyContext);
  const changeFunction = contextvalue.changefunction;
  return (
    <div>
      {" "}
      <div className=" text-center mt-5 mb-5">
        <div className="BannerContainer ">
          <CommonHeading heading="Upload your plans here" />
          <p className=" paragrapg mt-3 text-uppercase">
            TURNAROUND TIME 2-3 Days!
          </p>
          <p className=" paragrapg text-uppercase fw-semibold">
            {" "}
            GET <span style={{ color: "#076E9A" }}>40% OFF</span> ON YOUR FIRST
            ESTIMATE
          </p>
          <button onClick={changeFunction} className="UploadBtnbutton">
            <i>Upload Plans</i>
          </button>
        </div>
      </div>
    </div>
  );
};
