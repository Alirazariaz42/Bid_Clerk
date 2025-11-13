import React, { useContext } from "react";

import { HalfTextHalfImg2 } from "../CommonComponents/HalfTextHalfImg2";
import { HalfTextHalfImg3 } from "../CommonComponents/HalfTextHalfImg3";
import { StandOutTrades } from "./StandOutTrades";
import { CommonHeading } from "./CommonHeading";
import { MyContext } from "../Store/MyContext";
import "animate.css";
export const HeroSection = (props) => {
  const contextvalue = useContext(MyContext);
  const changeFunction = contextvalue.changefunction;
  return (
    <div>
      <div className=" HeroSectionContainer">
        <div className=" container-md">
          {/* <CommonHeading heading={props.heading} /> */}
          <div className=" animate__animated animate__backInDown">
            <HalfTextHalfImg3 text={props.text} src={props.src} />
          </div>
          <div className=" animate__animated animate__bounceInUp mt-4">
            <StandOutTrades />
          </div>

          <div className=" text-center mt-5 mb-4">
            <button onClick={changeFunction} class="btnUpload">
              <i class="animation"></i>Upload plans<i class="animation"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
