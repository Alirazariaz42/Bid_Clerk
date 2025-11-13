import React, { useContext } from "react";
import "./CommonStyle.css";
import { MyContext } from "../Store/MyContext";
export const Banner = () => {
  const contextvalue = useContext(MyContext);
  const closeFunction = contextvalue.changefunction;
  return (
    <div>
      <div className=" bannerContainer">
        <div>
          <p className=" fw-semibold fs-4">
            <i>
              For a quick quote based on your project scope, call us at{" "}
              <a
                className=" text-light "
                href="tel:+1 917
              300 1079"
              >
                +1 917 300 1079
              </a>{" "}
              or email us at{" "}
              <a
                className=" text-light "
                href="mailto:Davidson@bidclerkestimating.com"
              >
                Davidson@bidclerkestimating.com
              </a>
            </i>
          </p>
        </div>
        <div className=" d-flex justify-content-center align-items-center flex-column">
          <div>
            <button onClick={closeFunction} className="uploadbutton">
              <i>Upload plans</i>
            </button>
          </div>
          <div className=" d-flex mt-2 ms-4">
            <img
              className=" d-inline"
              src={require("../../Images/Ellipse 5.png")}
              width={60}
              alt=""
            />
            <img
              className=" d-inline"
              src={require("../../Images/Ellipse 6.png")}
              width={60}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
