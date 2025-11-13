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

export const Metals = () => {
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
        <span className="CommonHeadingStyle">Metals Estimating Services</span>
      </h1>
      <p className=" p-3 paragrapg">
        {" "}
        <b style={{ color: "#076e9a" }}>BidClerk Estimating</b> is your reliable
        partner for accurate and dependable metal estimates tailored to your
        construction projects. We understand the critical role of metals in
        ensuring structural integrity and aesthetic appeal. Count on our
        expertise and commitment to deliver precise projections that meet your
        specific requirements.Contact us
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
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <CommonHeading heading="Vital Role of General Requirements" />
      <p className=" p-3 paragrapg">
        {" "}
        General requirements are the backbone of any construction project,
        ensuring compliance with regulations and meeting project needs. They
        provide detailed estimates for materials, labor, and equipment, enabling
        informed decision-making. Clear communication and adherence to budget
        constraints ensure project success and client satisfaction.
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
        <li>Precast estimation </li>
        <li>Cold-form steel estimation </li>
        <li>Steel frames takeoffs </li>
        <li> Rebar estimation </li>
      </ul>
    </>
  );
  const row2 = (
    <>
      <ul>
        <li> Structural steel takeoffs </li>
        <li> Bar bending schedules </li>
        <li> Change order management </li>
        <li> Rebar project management </li>
      </ul>
    </>
  );

  const row3 = (
    <>
      <ul>
        <li>CPM scheduling</li>
        <li>Conflict Resolution</li>
        <li>Consultancy on smartly filing bids</li>
      </ul>
    </>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/MetalsHTHI.png")}
      />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        <CommonHeading heading="Our Metal Estimation Process" />
        <p className=" paragrapg">
          <span style={{ color: "#076e9a", fontWeight: "600" }}>
            Initial Consultation
          </span>
          : We start by understanding your project goals, design preferences,
          and budget constraints. This helps us grasp the scope and vision of
          your construction project.
          <br />
          <span style={{ color: "#076e9a", fontWeight: "600" }}>
            Site Assessment
          </span>
          : When necessary, we conduct a thorough site inspection to consider
          specific factors affecting metal selection, such as environmental
          conditions or structural requirements.
          <br />
          <span style={{ color: "#076e9a", fontWeight: "600" }}>
            Material Selection
          </span>
          : Based on your project requirements, we recommend suitable metals and
          alloys considering factors like strength, corrosion resistance, and
          aesthetic preferences.
          <br />
          <span style={{ color: "#076e9a", fontWeight: "600" }}>
            In-Depth Estimation
          </span>
          :Our team provides a detailed analysis of the projected costs for each
          metal required, including quantities and any supplementary charges
          like fabrication or finishing
          <br />
          <span style={{ color: "#076e9a", fontWeight: "600" }}>
            Presentation and Approval
          </span>
          :We present the estimate and address your questions. Upon approval, we
          proceed with procurement.
          <br />
          <span style={{ color: "#076e9a", fontWeight: "600" }}>
            Procurement and Quality Assurance
          </span>
          :We manage the procurement process, ensuring materials meet specified
          standards. Our team conducts quality assessments to verify alignment
          with project criteria.
          <br />
        </p>
      </div>
      <BlueRows
        heading="Our steel estimating services include:"
        row1={row1}
        row2={row2}
        row3={row3}
      />

      <div className=" d-flex justify-content-center align-items-center">
        <TURNAROUNDTIME />
      </div>
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text3}
          src={require("../../../Images/MetalsHTHI2.png")}
        />
      </div>

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
