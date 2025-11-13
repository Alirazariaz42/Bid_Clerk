import React from "react";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
import { BlueRows } from "../../CommonComponents/BlueRows";

import { HalfTextHalfOffComponent } from "../../CommonComponents/HalfTextHalfOffComponent";

export const SpecialConstruction = () => {
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
          Special Construction EStimating services
        </span>
      </h1>
      <p className=" p-3 paragrapg">
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        Experience accuracy with BidClerk's custom Construction Estimating
        Services. Our expert team ensures accurate analysis and timely
        estimates, empowering your projects for success. Trust in our commitment
        to cost-effectiveness and reliability, delivering clarity and confidence
        at every step. Let BidClerk Estimating be your partner in achieving
        construction excellence.Contact us
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
      <CommonHeading heading="Commercial Plumbing  Estimating Services " />
      <p className=" paragrapg">
        {" "}
        At&nbsp;{" "}
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        , we're experts in fast, accurate commercial plumbing estimates. We
        break down every detail for multi-floor systems, including pipes,
        fittings, fixtures, valves, and more.
      </p>

      <CommonHeading heading="Residential Plumbing Estimating Services " />
      <p className=" paragrapg">
        {" "}
        Whether you're a small-scale plumber or a large residential plumbing
        contractor, accurate estimates are essential for quoting prices, bidding
        on jobs, and sourcing materials. We cover everything from water heaters
        and gas lines to main sewer lines and floor drains. Plus, we handle
        domestic HVAC systems, swimming pool plumbing, and more
      </p>
    </div>
  );

  const text4 = (
    <div className=" p-4">
      <CommonHeading
        heading="Our Special Construction Estimation Process
      "
      />
      <p className=" paragrapg">
        <b> Initial Consultation:</b> We discuss your project goals, design
        preferences, and budget to understand your needs. <br />
        <b> Site Evaluation: </b> We analyze the site for any factors affecting
        construction. <br />
        <b>Material and Equipment Suggestions </b> We recommend materials and
        equipment tailored to your project. <br />
        <b> Comprehensive Estimate:</b> We provide a detailed cost evaluation
        for materials, equipment, and labor. <br />
        <b> Presentation and Approval: </b> We present the estimate, address
        questions, and proceed upon agreement. <br />
        <b> Procurement and Construction Oversight: </b> We manage procurement
        and oversee construction to ensure quality. <br />
      </p>
    </div>
  );

  const text3 = (
    <div>
      <CommonHeading heading="Range of Plumbing Estimating Services" />
      <div className=" row w-100 m-0 justify-content-center">
        <div className=" col-sm-6 col-12 d-flex justify-content-center align-items-center">
          {" "}
          <div>
            <ul>
              <li> Material Takeoffs</li>
              <li>Budget Estimates</li>
              <li> Conceptual Estimates</li>
              <li>Detailed Design Development Estimates</li>
              <li> Bid Estimates</li>
              <li>Bid Reviews </li>
            </ul>{" "}
          </div>
        </div>
        <div className=" col-sm-6 col-12 d-flex justify-content-center align-items-center">
          {" "}
          <div>
            <ul>
              <li> Bidding Assistance</li>
              <li>Unbiased Third Party Estimate</li>
              <li> Procurement & Change Orders</li>
              <li> Project Cost Management</li>
              <li> Subcontractor Marketing</li>
              <li>Plumbing Project Lead Generation </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection text={text} src={require("../../../Images/SPHTHI1.png")} />

      <div className=" container-md mt-5">
        <HalfTextHalfOffComponent text={text4} />
      </div>
      <Banner />
      <div className=" container-md">
        <CommonHeading heading="What We Estimate" />
        <p className=" paragrapg">
          <b> Specialized Materials:</b> <br />
          Featuring high-strength alloys, tailored concrete mixtures, and
          distinct building materials designed to meet your project's demands.
          <br />
          <b>Safety Measures and Compliance: </b> <br />
          Incorporating specialized safety gear, fire control systems, and other
          precautions necessary to fulfill sector-specific regulations.
          <br />
          <b> Specialized Equipment: </b> <br />
          This includes heavy machinery, precise instruments, or dedicated tools
          needed for the bespoke requirements of your specialized construction
          project.
          <br />
          <b> Technology Integration:</b> <br />
          Examples include state-of-the-art HVAC systems, intelligent building
          technologies, or custom infrastructure essential for contemporary
          facilities.
          <br />
        </p>
      </div>
      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
