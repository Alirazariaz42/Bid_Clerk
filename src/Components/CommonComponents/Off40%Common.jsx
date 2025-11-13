import React, { useContext } from "react";
import { MyContext } from "../Store/MyContext";

export const Off_40_percent = () => {
  const contextvalue = useContext(MyContext);
  const changeFunction = contextvalue.changefunction;
  return (
    <>
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
    </>
  );
};
