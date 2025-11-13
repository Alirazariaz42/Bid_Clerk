import React from "react";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
import { TURNAROUNDTIME } from "../../CommonComponents/TURNAROUNDTIME";

export const ResidentialEstimating = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <CommonHeading heading="Residential ESTIMATING SERVICES" />
      <p className=" p-3 paragrapg">
        Reliable residential appraisals are vital for every construction
        financial transaction. Our Home Estimating services offer accurate cost
        estimates for residential projects, assisting in budgeting, financial
        planning, client quoting, and contractor negotiations. With seasoned
        professionals and advanced software, we guarantee thorough analysis and
        precise regional pricing for labor and materials. Our efficient process
        follows industry best practices, making it simple to review and submit
        to vendors. Get in touch with us at 
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
      <CommonHeading heading="Why Choose BidClerk Estimating" />
      <p className=" p-3 paragrapg">
        {" "}
        <ul>
          <li> Detailed estimates with a high emphasis on accuracy </li>
          <li>
            {" "}
            Cost-effective solutions at market competitive rates (check prices){" "}
          </li>
          <li>
            {" "}
            Faster and timely delivery of estimates so you meet your deadlines
          </li>
          <li>Reduce overheads and only pay us when you need us </li>
          <li>
            Increase efficiency and get more jobs by bidding on more projects{" "}
          </li>
          <li> Consultation on smartly filing bids to acquire more project </li>
          <li> Help you Increase your bid-hit ratio and win more bids </li>
          <li> 24/7 chat & email support </li>
        </ul>
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection text={text} src={require("../../../Images/ResHTHI1.png")} />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        {/* <CommonHeading heading="Our Range of Industrial Estimating Services" />
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
        </p> */}
      </div>
      {/* <Banner /> */}
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text3}
          src={require("../../../Images/ResHTHI2.png")}
        />
        <div className=" d-flex justify-content-center align-items-center">
          <TURNAROUNDTIME />
        </div>
      </div>

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
