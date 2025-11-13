import React from "react";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";

export const IndustrialEstimating = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <CommonHeading heading="" />
      <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            INDUSTRIAL ESTIMATING SERVICES
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        <b style={{ color: "#076e9a" }}>BidClerk Estimating</b> is recognized
        for providing comprehensive estimating solutions to EPC contractors,
        owners, engineering firms, investors, and partners in the North American
        industrial sector. Our estimating services are customized to meet the
        unique needs of our clients, spanning from project conceptualization to
        construction completion. Leveraging our robust methodology, informed by
        expertise and the latest technology, we ensure precise estimates,
        enabling effective cost prediction, coordination, and management
        throughout the project lifecycle Contact us  
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
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <CommonHeading heading="Industrial Structural Steal Estimating" />
      <p className=" p-3 paragrapg">
        {" "}
        Our <b style={{ color: "#076e9a" }}>BidClerk Estimating</b> specialize
        in steel estimating for structural projects. We've served numerous
        contractors and design firms with accurate estimates, aiding in
        planning, bidding, and procurement while minimizing waste. Our detailed
        takeoffs cover all structural components, ensuring clarity in project
        costs.
        <br />
        We generally quantify the following components:
      </p>
      <div className=" row w-100  m-0 justify-content-center">
        <div className=" col-md-4 col-sm-6 col-12">
          {" "}
          <ul className=" paragrapg">
            <li>Rebar</li> <li>Piping</li>
            <li>Railings</li>
          </ul>
        </div>
        <div className=" col-md-4 col-sm-6 col-12">
          {" "}
          <ul className=" paragrapg">
            <li>Roofing</li> <li>Siding</li> <li>Ladders</li>
          </ul>
        </div>
        <div className=" col-md-4 col-sm-6 col-12">
          {" "}
          <ul className=" paragrapg">
            <li>Louvers</li> <li>Platforms</li> <li>Grating</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const text3 = (
    <div>
      <CommonHeading heading="The Range of Concrete Estimating Service" />
      <p className=" p-3 paragrapg">
        {" "}
        <ul>
          <li> Concrete Quantity Takeoffs</li>
          <li> Budget & Bid Estimates </li>
          <li> Bid Preparation </li>
          <li> Design Estimates </li>
          <li> Change Order Estimates </li>
          <li> Change Order Estimates </li>
          <li> Change Order Estimates </li>
          <li> Change Order Estimates </li>
          <li> Value Engineering </li>
          <li> Project Lead Generation </li>
          <li> Project Lead Generation </li>
          {/* <li> - Concrete Contractor Marketing </li>
          <li> - Expert Witness </li>
          <li> - Litigation Assistance</li> */}
        </ul>
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/IndustrialHTHI.png")}
      />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        <CommonHeading heading="Our Range of Industrial Estimating Services" />
        <p className=" paragrapg">
          <div className=" row">
            <div className=" col-md-6 col-12">
              <ul className=" paragrapg">
                <li>
                  Comprehensive quantity takeoffs and cost estimates for all
                  divisions{" "}
                </li>
                <li> Estimates for quality assurance and quality control</li>
                <li> Expert eye witnesses</li>
                <li> Cold eyes reviews</li>
                <li> Bid Evaluation & Management</li>
                <li>Procurement Services </li>
              </ul>
            </div>
            <div className=" col-md-6 col-12">
              <ul className=" paragrapg">
                <li>Change Order Preparation & Review </li>
                <li>Project Scheduling </li>
                <li> Feasibility Studies</li>
                <li> Risk Analysis</li>
                <li> Productivity Analysis</li>
                <li>Project Cost Management </li>
              </ul>
            </div>
          </div>
        </p>
      </div>
      <Banner />
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text2}
          src={require("../../../Images/INdustrialHTHI2.png")}
        />
      </div>

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
