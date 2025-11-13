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

export const InterionExterior = () => {
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
          Interior and Exterior Finishes Estimating Services
        </span>
      </h1>
      <p className=" p-3 paragrapg">
        In building construction, estimates for both exterior and interior
        finishes are essential. To get work and give customers accurate quotes,
        contractors need to do calculations for painting, plastering, stucco,
        and specialty coatings. Accurate estimates are vital to contractors, who
        are accountable for any inaccuracies in the estimates; for this reason,
        professionalism, experience, and tried-and-true methods are common in
        the estimation industry. For this reason, outsourcing estimations can
        save a lot of money compared to doing it internally—as long as accuracy
        is guaranteed. Exterior and interior coatings, metallics, patinas, and
        chrome are examples of expensive features.Contact us 
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

  const text4 = (
    <div className=" p-4">
      <CommonHeading heading="OUR PORTFOLIO IN interior and Exterior Finishes SERVICES" />
      <p className=" paragrapg">
        <ul>
          <li> Dams</li>
          <li>Bridges</li>
          <li>Residential Buildings</li>
          <li> Commercial Buildings</li>
          <li>Foundations For High Rise Buildings</li>
          <li>Highways</li>
          <li> Driveways</li>
          <li> Culverts And Sewers</li>
          <li> Marine Structures</li>
          <li> Fences </li>
        </ul>
      </p>
    </div>
  );
  const text3 = (
    <div>
      <CommonHeading heading="Our flooring estimate deliverables include" />
      <ul>
        <li> Digital flooring takeoff file</li>
        <li> Material spreadsheet </li>
        <li> Color-coded plans </li>
        <li> Seaming diagrams </li>
        <li>
          {" "}
          Takeoff summary including total square feet, seaming & welding linear
          feet, wall base, stair information, etc{" "}
        </li>

        <li> Review of bid documents and addendums </li>
      </ul>
    </div>
  );

  const row1 = (
    <>
      <ul>
        <li>Material Takeoffs </li>
        <li> Flooring Estimates</li>
        <li>Painting Estimates </li>
      </ul>
    </>
  );

  const row2 = (
    <>
      <ul>
        <li>Ceiling Estimates </li>
        <li> Drywall Estimates</li>
        <li> Stucco Estimates</li>
      </ul>
    </>
  );

  const row3 = (
    <>
      <ul>
        <li>Stucco Estimates </li>
        <li>Bid Estimate </li>
        <li> Bid Reviews</li>
      </ul>
    </>
  );

  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection text={text} src={require("../../../Images/IXHTHI1.png")} />

      <div className=" container-md mt-4">
        <HalfTextHalfImg2
          src={require("../../../Images/IXHTHI2.png")}
          text={text3}
        />
      </div>
      <BlueRows
        row1={row1}
        row3={row3}
        row2={row2}
        heading="OUR RANGE OF interior and Exterior Finishes Takeoff services"
      />
      <div className=" container-md mt-4">
        <HalfTextHalfOffComponent text={text4} />
      </div>
      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
