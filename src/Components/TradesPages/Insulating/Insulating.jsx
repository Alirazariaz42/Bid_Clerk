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

export const Insulating = () => {
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
            Insulation estimating services
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        specializes in insulation estimating services, ensuring accuracy and
        efficiency to meet your project deadlines and secure bids. Whether it's
        a residential or industrial project, we meticulously measure walls,
        floors, and ceilings using cutting-edge technology, factoring in doors
        and windows for precise estimates. Our comprehensive approach covers all
        forms of insulation, including liquid foam, spray board, rolls, batts,
        loose-fill, and foam board. Contact us  
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
      <CommonHeading heading="OUR INSULATION ESTIMATING SERVICES" />
      <ul className=" text-capitalize paragrapg">
        <li> Residential & Commercial Insulation Estimation</li>
        <li> Industrial Mechanical Insulation Estimation</li>
        <li> Thermal Insulation Estimation</li>
        <li> Fireproofing & Firestopping Estimation</li>
        <li> Roofing Estimation</li>
        <li> Waterproofing & Dampproofing Estimation</li>
        <li> Acoustic & Sound Proofing Estimation</li>
        <li>
          {" "}
          Estimation of Insulation for boilers, HVAC systems, ductwork,
          pipeworks, valves, plumbing, equipment, etc.
        </li>
        <li> Change Order Estimates</li>
        <li> Preliminary Estimates</li>
        <li> Pre-built Material Estimate</li>
        <li> Value Engineering</li>
        <li> Project Cost Management</li>
        <li> Project Lead Generation </li>
      </ul>
    </div>
  );
  const text3 = (
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
      <HeroSection
        text={text}
        src={require("../../../Images/InsulationHTHI.png")}
      />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md mt-5">
        <HalfTextHalfImg2
          text={text2}
          src={require("../../../Images/INsulationHTHI2.png")}
        />
      </div>
      <Banner />

      <div className=" container-md">
        <HalfTextHalfImg2
          text={text3}
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
