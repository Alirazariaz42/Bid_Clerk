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
export const FramingEstimating = () => {
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
        <span className="CommonHeadingStyle">Framing Estimating Services</span>
      </h1>
      <p className=" p-3 paragrapg">
        Framing Estimating Services, a sub-section of construction estimating
        services, provide contractors of all sizes with the detailed cost
        breakdowns they need to make informed decisions. By utilizing framing
        estimating services, contractors can avoid budget overruns and ensure
        timely project completion. Without accurate framing estimates, projects
        can quickly spiral out of control, exceeding both budget and time
        constraints. Investing in framing estimating services from the outset is
        a wise step towards a successful and stress-free construction
        experience. Contact us  
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
    <div>
      <CommonHeading heading="Wood Framing Estimating Services" />
      <p className=" p-3 paragrapg">
        {" "}
        The process of accurately calculating the quantity, kind, and cost of
        wood is what wood frame estimating services involve. Several pieces of
        software are used in the process to estimate wood framing. A contractor
        may order more wood than is necessary, costing them money, if the amount
        of wood needed for the project is not accurately estimated. Time and
        money can be saved by using accurate wood framing estimating services to
        determine the exact amount of wood needed for framing and other uses
      </p>
    </div>
  );
  const text3 = (
    <div>
      <CommonHeading heading="Metal Framing Estimating Services" />
      <p className=" p-3 paragrapg">
        {" "}
        The process of accurately estimating how much steel, how much it will
        cost, and what kind of steel it will be used for is included in metal
        framing estimating services. When selecting metal for your steel frame,
        there are a number of things to take into account, from financial
        considerations to durability. If you begin the project without first
        learning about the metal frame, you could lose all of your money
        forever. Selecting the right metal kind and price is a difficult task,
        but <b style={{ color: "#076E9A" }}> BidClerk Estimating</b> Services is
        available to help with metal framing estimating.
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/FramingHTHI.png")}
      />
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text2}
          src={require("../../../Images/FrameHTHI2.png")}
        />
      </div>

      <Banner />

      <HalfImgHalfText
        text={text3}
        src={require("../../../Images/FramingHTHI3.png")}
      />

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
