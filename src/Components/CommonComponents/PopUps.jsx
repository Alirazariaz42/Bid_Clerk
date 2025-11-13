import React, { useContext } from "react";
import { MyContext } from "../Store/MyContext";

export const PopUps = () => {
  const contextvalue = useContext(MyContext);
  const changeFunction = contextvalue.changefunction;
  const closePopup = contextvalue.closePopup;
  return (
    <div className="popUpContainer">
      <div className="popUp">
        <div className="PopUpContentContainer">
          <button
            onClick={closePopup}
            className="btn btn-close btnclose"
          ></button>
          <div>
            <div className="PopUpContent">
              <h2 style={{ color: "#4EB0DA" }}>
                Say Goodbye To Cost Surprises
              </h2>
              <p className=" paragrapg">
                Trust Our Construction Cost Estimating Pros!
              </p>
            </div>
            <button
              onClick={() => {
                closePopup();
                changeFunction();
              }}
              style={{
                backgroundColor: "#4EB0DA",
                position: "relative",
                zIndex: "2",
              }}
              className=" fw-semibold w-100 btn btn-primary mt-3"
            >
              Get Estimation
            </button>
            <div className=" iconContainer">
              <img src={require("../../Images/IconPOP.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
