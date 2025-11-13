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

export const ThermalAndMostiure = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <CommonHeading heading="Thermal & Moisture Protection Estimating Services" />
      <p className=" p-3 paragrapg">
        At <b style={{ color: "#076e9a" }}>BidClerk Estimating</b>, we
        understand the importance of efficient thermal and moisture management
        in construction projects. Our calculation tools are designed to assist
        in planning and allocating resources for these essential elements,
        ensuring the longevity and durability of your project against
        environmental factors. Contact us
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
      <CommonHeading heading="Thermal Insulation Estimating" />
      <p className=" p-3 paragrapg">
        {" "}
        Our team of project evaluators inspect and meticulously detail each
        sector, using cutting-edge takeoff software to digitally map every facet
        of roofing works. These evaluations involve projected costs for
        internet-based roofing fixes, tin roofing, steel tops, carport roofs,
        metal coverings, slate toppings, shingle rooftops, and level roofs, all
        being precisely measured and accurately presented in a detailed Excel
        sheet.
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
      <ul className="   text-capitalize">
        <li> fire retardant cable sprays takeoffs </li>
        <li> damproofing takeoffs </li>
        <li> waterproofing takeoffs </li>
        <li> chemical grouting takeoffs </li>
        <li> traffic coatings takeoffs </li>
        <li> fiber insulation takeoffs </li>
        <li> plastic insulation takeoffs </li>
      </ul>
    </>
  );

  const row2 = (
    <>
      <ul className="   text-capitalize">
        <li> cellulose insulation takeoffs </li>
        <li> reflective insulation takeoffs </li>
        <li> cladding takeoffs </li>
        <li> roof and deck installation takeoffs </li>
        <li>EIFS( Exterior Insulation and Finish Systems) takeoffs </li>
        <li> Weather Barriers takeoffs </li>
      </ul>
    </>
  );

  const row3 = (
    <>
      <ul className="   text-capitalize">
        <li> Vapor Resistive Barriers takeoffs </li>
        <li> Steep Slope Roofing takeoffs </li>
        <li>Shingles (Asphalt, Metal, Slate) takeoffs </li>
        <li> Shingles (Asphalt, Metal, Slate) takeoffs</li>
        <li>Metal Siding takeoffs </li>
        <li> Vinyl Siding takeoffs</li>
      </ul>
    </>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection text={text} src={require("../../../Images/TMHTHI.png")} />
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text2}
          src={require("../../../Images/TMHTHI2.png")}
        />
      </div>
      <BlueRows
        row1={row1}
        row2={row2}
        row3={row3}
        heading="Thermal & Moisture Protection Takeoffs"
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
