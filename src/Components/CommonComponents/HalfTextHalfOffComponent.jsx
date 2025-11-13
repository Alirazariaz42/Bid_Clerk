import React, { useContext } from "react";
import { MyContext } from "../Store/MyContext";
// import {Off40%Common} from './Off40%Common'
export const HalfTextHalfOffComponent = (props) => {
  const contextvalue = useContext(MyContext);
  const changeFunction = contextvalue.changefunction;
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
          <div className="Off_40_percentContainer ">
            <div>
              <h2 className=" fw-light  text-uppercase">Hurry ui!</h2>
              <h3 className=" fw-bold  text-uppercase">
                get the <br />{" "}
                <span style={{ color: "#028EC9" }}>estimation</span> now
              </h3>
              <div className=" d-flex align-items-center">
                <p className=" paragrapg">
                  {" "}
                  Get our discount upto 40% avail this offer now{" "}
                </p>
                <div>
                  <button
                    onClick={changeFunction}
                    style={{ width: "120px" }}
                    class=" text-uppercase cleckHereBtn"
                  >
                    click here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
