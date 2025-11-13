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
import { BlueRows } from "../../CommonComponents/BlueRows";

export const LumberTakeOff = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
     
      <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            lumber takeoff Services
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        If you're a lumber contractor, framer, or vendor in need of dependable
        lumber takeoff services, you've come to the right place! <br />
        <b style={{ color: "#076e9a" }}>BidClerk Estimating</b> specializes in
        providing high-quality wooden and plastic materials tailored for
        construction projects. With our wide range of products and expert
        guidance, we ensure that your projects benefit from the best of natural
        and man-made materials. Contact us
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
      <CommonHeading heading="Our Lumber Estimator Expertise" />
      <p className=" p-3 paragrapg">
        {" "}
        We have an experienced lumber estimator who's worked with many
        contractors in North America. Our team follows strict guidelines from
        certified organizations like AACE and AIQS. They carefully examine your
        plans and provide detailed estimates for all wood components, ensuring
        accuracy and reliability in our wood-plastic composites estimates.
      </p>
    </div>
  );
  const text3 = (
    <div>
      <CommonHeading heading="REBAR & STRUCTURAL STEEL ESTIMATING SERVICES" />
      <p className=" p-3 paragrapg">
        Accurate estimates are crucial in construction to avoid overbidding or
        underbidding. Our rebar estimating services provide precise estimates
        for materials, accessories, and erection costs. We handle various
        projects, leveraging advanced 3D modeling for cost analysis and
        feasibility.Our deliverables include:{" "}
        <ul>
          <li> - Contract plans & numbers</li>
          <li> - Take-off Quantities </li>
          <li> - Bid Preparation </li>
          <li> - Rebar Weight </li>
          <li> - Structural Activity Codes (SAC) </li>
          <li> - Part Codes (Rebar, wire mesh and other accessories) </li>
          <li> - Steel grade (e.g. ASTM A108) </li>
          <li> - Structure wise or scope wise bid item number </li>
          <li> - Appendix </li>
          <li> - Locations</li>
          <li> - Reference Sections </li>
          {/* <li> - Concrete Contractor Marketing </li>
          <li> - Expert Witness </li>
          <li> - Litigation Assistance</li> */}
        </ul>
      </p>
    </div>
  );
  const row1 = (
    <>
      <ul>
        <li>Lumber Takeoffs </li>
        <li> Framing Takeoffs</li>
        <li>Lumber Cut Lists </li>
        <li> Bid Estimates</li>
      </ul>
    </>
  );

  const row2 = (
    <>
      <ul>
        <li>Budget Estimates </li>
        <li> Project Lead Generation</li>
        <li>Preliminary Estimates </li>
        <li>Bidding Assistance </li>
      </ul>
    </>
  );

  const row3 = (
    <>
      <ul>
        <li> Subcontractor Marketing</li>
        <li> Change Orders</li>
        <li>Value Engineering </li>
      </ul>
    </>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/LumberHTHI.png")}
      />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        <CommonHeading heading="What Do We Deliver In Our Lumber Takeoffs?" />
        <p className=" paragrapg">
          Our lumber takeoff services encompass timber/lumber, labor, and
          transportation estimates. Our thorough reports aid clients in securing
          bids and negotiating with suppliers. Furthermore, we offer precise
          lumber cut lists to optimize wood usage and minimize waste.
          <br />
          Included in Our Lumber Takeoff Deliverables:
          <ul>
            <li> Lumber takeoff EXCEL sheets </li>
            <li> Labor and material costs </li>
            <li> man-hours </li>
            <li> Marked up drawing plans </li>
            <li>Lumber cut list </li>
            <li>
              {" "}
              Bid summary covers all costs: materials, labor, equipment, profit,
              overheads, insurance, logistics, permits, taxes, and more.{" "}
            </li>
            <li> Complete review of inclusions and exclusions </li>
          </ul>
        </p>
      </div>
      <BlueRows
        row1={row1}
        row2={row2}
        row3={row3}
        heading="OUR RANGE OF LUMBER Takeoff services"
      />

      <div className=" d-flex justify-content-center align-items-center">
        <TURNAROUNDTIME />
      </div>
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text2}
          src={require("../../../Images/LumberHTHI.png")}
        />
      </div>

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
