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

export const ConveyingSystem = () => {
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
            Conveying System Estimating Services
            </span>
          </h1>

      <p className=" p-3 paragrapg">
        At&nbsp;
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        our main goal is to provide accurate and comprehensive evaluations for
        transportation systems in various industries. Our team of experts is
        committed to helping you select and implement the perfect transport
        solutions to enhance the efficiency and productivity of your operations
        Contact us  
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
      <CommonHeading heading="List of our clients" />
      <ul className=" text-capitalize paragrapg">
        <li> General Contractors</li>
        <li> Subcontractors</li>
        <li>Projects managers</li>
        <li>investors</li>
        <li> Architects</li>
        <li> home builders</li>
        <li> owners</li>
        <li> Developers</li>
        <li>vendors </li>
      </ul>
    </div>
  );

  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection text={text} src={require("../../../Images/CSHTHI1.png")} />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        {/* <div>
          <CommonHeading heading="Conveying Systems Estimating Services" />
          <p className=" paragrapg">
            Our experts handle all types of complex commercial electrical
            systems with ease, providing innovative solutions with a precise
            engineering approach. From small system estimates to major upgrades
            and installations for large commercial spaces, we've worked on
            projects ranging from millions of dollars.
            <br />
            Our commercial electrical projects span high-rise buildings,
            offices, warehouses, institutional buildings, healthcare facilities,
            cinemas, and more. Additionally, we cover various electrical systems
            including HVAC wiring and controls, alarms and emergency controls,
            power generation and distribution, temperature controls, geothermal
            electric systems, integrated wiring systems, walk-in coolers and
            chillers, networks and communication, and more.
          </p>
        </div> */}

        <div>
          <CommonHeading heading="Our Conveying Systems Cost Estimation Process" />
          <p className=" paragrapg">
            <b>Initial Consultation:</b> We begin by exploring your project
            objectives, particular material handling requirements, and budget
            limitations. This enables us to comprehend the scope and vision of
            your operations.
            <br />
            <b>Detailed Estimate:</b> Our team offers a complete summary of the
            projected costs for each conveyor system type, encompassing
            equipment costs, installation, and any supplementary expenses like
            controls and integration.
            <br />
            <b>Presentation and Approval:</b> We reveal the estimate to you,
            clarifying each component and addressing any questions or concerns
            you may have. Once approved, we proceed with procurement. <br />
            <b>Procurement and Installation Management:</b>We handle the
            procurement process to guarantee that the conveyor systems meet the
            set criteria. Our team can also collaborate with equipment providers
            to supervise proper installation and integration.
          </p>
        </div>
      </div>
      <Banner />
      <div className=" container-md mt-5">
        <HalfTextHalfImg2
          text={text2}
          src={require("../../../Images/AboutpageHTHI.png")}
        />
      </div>

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
