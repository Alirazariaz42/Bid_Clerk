import React from "react";
// import "./GeneralRequirements.css";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
import { color } from "framer-motion";
export const FurnishingEstimating = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* <CommonHeading heading="" /> */}
      <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            Furnishings Estimating Services
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        We're committed to providing reliable and affordable furnishing
        estimating services. Our skilled team uses cutting-edge tools to deliver
        precise estimates, ensuring informed decisions and budget adherence for
        both residential and commercial projects. Contact us  
        <a
          className=" text-decoration-none"
          href="mailto:Davidson@bidclerkestimating.com"
        >
          {" "}
          <span style={{ color: "#028EC9" }}>
            {" "}
            via Davidson@bidclerkestimating.com{" "}
          </span>
        </a>
         or{" "}
        <a className=" text-decoration-none" href="tel:+1 917 300 1079">
          <span style={{ color: "#028EC9" }}>  +1 917 300 1079.</span>
        </a>
      </p>
    </div>
  );

  const text2 = (
    <div
    
    >
      <CommonHeading heading=" Our digital estimating covers" />
      <div className=" row m-0 w-100">
        <div className="col-md-6 col-12">
          {" "}
          <p className=" p-3 paragrapg">
            <ul>
              <li> Concrete Countertops</li>
              <li> Stone Countertops </li>
              <li> Plastic Laminates</li>
              <li> Wood Countertops </li>
              <li> Cultured Marble</li>
            </ul>
          </p>
        </div>
        <div className="col-md-6 col-12">
          {" "}
          <p className=" p-3 paragrapg">
            {" "}
            <ul>
              <li> Solid Surfacing</li>
              <li>Glass Countertops </li>
              <li>Tile </li>
              <li>Laboratory Countertops </li>
              <li> Specialty Sinks and Countertops</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
  const text3 = (
    <div>
      <CommonHeading heading="Home Furnishing Estimating Services" />
      <p className=" p-3 paragrapg">
        {" "}
        Our experts provide accurate home furnishing cost estimates tailored to
        your preferences and needs. We consider factors like house size,
        furniture type, and customization options to ensure your satisfaction.
        Plan your budget wisely and prioritize your furnishing needs with our
        customized estimates. Contact us today to get started!
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/FurnishingHTHI.png")}
      />
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text2}
          src={require("../../../Images/FurnishingHTHI2.png")}
        />
      </div>

      <Banner />

      <HalfImgHalfText
        text={text3}
        src={require("../../../Images/FurnishingHTHI3.png")}
      />

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
