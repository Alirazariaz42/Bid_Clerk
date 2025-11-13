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
import { HalfTextHalfOffComponent } from "../../CommonComponents/HalfTextHalfOffComponent";
import { BlueRows } from "../../CommonComponents/BlueRows";

export const RebarEstimating = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <CommonHeading heading="rebar Estimating Services" />
      <p className=" p-3 paragrapg">
        {" "}
        <b style={{}}>Rebar Estimating Services </b> provides detailed and
        accurate estimates for construction projects, specializing in rebar
        detailing and estimation. With our commitment to accuracy and
        thoroughness, we ensure that every aspect of the project is carefully
        analyzed and accounted for. Our experienced team has successfully
        delivered comprehensive estimates to a diverse range of clients,
        ensuring efficient and accurate results for projects of any size or
        complexiContact us
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
        <li>Rebar shop drawings </li>
        <li>Bar listing in ASA format </li>
        <li>Foundation details </li>
        <li> Footing detailing </li>
      </ul>
    </>
  );
  const row2 = (
    <>
      <ul>
        <li> Total rebar estimation </li>
        <li> Bar bending schedules </li>
        <li> Roof truss and joint details </li>
        <li> Retaining walls detailing </li>
      </ul>
    </>
  );

  const row3 = (
    <>
      <ul>
        <li>Concrete masonry detailing</li>
        <li>Quality takeoffs and as-built drawings</li>
      </ul>
    </>
  );

  const text4 = (
    <div>
      <CommonHeading heading="Our Expertise In Rebar Detailing" />
      <p className=" paragrapg">
        {" "}
        We show our expertise in the following trades of Rebar detailing
        services
      </p>
      <ul className=" paragrapg">
        <li>Rebar shop drawings </li>
        <li> Bar listing in ASA format </li>
        <li> Foundation details</li>
        <li> Footing detailing</li>
        <li>Total rebar estimation</li>
        <li> Bar bending schedules</li>
        <li> Roof truss and joint details</li>
        <li> Retaining walls detailing</li>
        <li> Concrete masonry detailing</li>
        <li> Quality takeoffs and as-built drawings </li>
      </ul>
    </div>
  );
  const description = (
    <p className=" paragrapg text-center">
      Our expertise in rebar detailing encompasses a wide range of services,
      including:
    </p>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection text={text} src={require("../../../Images/REbarHTHI.png")} />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        {/* <CommonHeading heading="" /> */}
        <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            Reliable Rebar Estimating Services
            </span>
          </h1>
        <p className=" paragrapg">
          Looking for reliable Rebar estimating services for your construction
          project?{" "}
          <b>
            <span style={{ color: "#076e9a" }}>BidClerk Estimating</span>
          </b>{" "}
          has you covered. Our expert team specializes in delivering precise and
          high-quality Rebar detailing and estimating services. What sets our
          Rebar estimating services apart is our commitment to accuracy and
          thoroughness. With years of experience, we have successfully provided
          comprehensive estimates to a diverse range of clients. No matter the
          project size or complexity, we ensure efficient and accurate results.{" "}
        </p>
      </div>
      <BlueRows
        heading="Our Range Of Rebar Estimation"
        row1={row1}
        row2={row2}
        row3={row3}
        description={description}
      />

      <div className=" d-flex justify-content-center align-items-center">
        <TURNAROUNDTIME />
      </div>
      <div className=" container-md">
        <HalfTextHalfOffComponent text={text4} />
      </div>

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
