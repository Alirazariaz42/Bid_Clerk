import React from "react";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";

import { HalfTextHalfOffComponent } from "../../CommonComponents/HalfTextHalfOffComponent";


export const CommericalEstimating = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* <CommonHeading heading="Commercial Estimating Services" /> */}
      <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            Commercial Estimating Services
            </span>
          </h1>

      <p className=" p-3 paragrapg">
        We specialize in providing reliable and expert commercial cost
        estimating services exclusively for clients in the USA. With a strong
        technical understanding, our team delivers precise estimates tailored to
        manage budgets effectively for projects across the country. Each project
        is overseen by senior project managers with a proven track record in
        commercial estimation.Each project is scrutinized by senior project
        managers with a track record of estimating a diverse range of commercial
        projects. Contact us
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
      {/* <CommonHeading heading="Vital Role of General Requirements" /> */}
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
      <CommonHeading heading="The Range of Concrete Estimating Service" />
      <p className=" p-3 paragrapg">
        {" "}
        <ul>
          <li> - Concrete Quantity Takeoffs</li>
          <li> - Budget & Bid Estimates </li>
          <li> - Bid Preparation </li>
          <li> - Design Estimates </li>
          <li> - Change Order Estimates </li>
          <li> - Change Order Estimates </li>
          <li> - Change Order Estimates </li>
          <li> - Change Order Estimates </li>
          <li> - Value Engineering </li>
          <li> - Project Lead Generation </li>
          <li> - Project Lead Generation </li>
          {/* <li> - Concrete Contractor Marketing </li>
          <li> - Expert Witness </li>
          <li> - Litigation Assistance</li> */}
        </ul>
      </p>
    </div>
  );

  const text4 = (
    <div>
      <CommonHeading heading="Our Commercial Cost Estimating Services" />
      <div className=" row m-0 w-100">
        <div className=" col-sm-6 col-12">
          {" "}
          <ul className=" paragrapg text-uppercase">
            {" "}
            <li>Clearing & Demolition</li>
            <li>Earthwork</li>
            <li>Grading</li>
            <li>Drainage</li>
            <li>Utility Spoils</li>
            <li>Storm Sewer</li>
            <li>Water distribution</li>
            <li>Roadways</li>
            <li>Sidewalk</li>
            <li>Driveways</li>
            <li>Pavements</li>
          </ul>
        </div>
        <div className=" col-sm-6 col-12">
          {" "}
          <ul className=" paragrapg text-uppercase">
            {" "}
            <li> Site Furnishing</li>
            <li> Concrete Flatwork</li>
            <li>Retaining Walls</li>
            <li> Climbing Walls</li>
            <li> Fences & Gates</li>
            <li> Landscaping</li>
            <li> Irrigation</li>
            <li>Fountains</li>
            <li> Patio</li>
            <li>Gabions</li>
            <li>Docks</li>
          </ul>
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/CommericalHTHI.png")}
      />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        <CommonHeading heading="Our SiteWork Estimating Services Portfolio" />
        <p className=" paragrapg">
         <ul>
          <li> Do you need consultancy with the estimation and scheduling of commercial construction projects? </li>
          <li>Or you don’t have the expertise to perform bill of material for a specific trade, size, or complexity?  </li>
          <li> Or you are not confident about how to prepare and file a bidding proposal?\
             </li>
         </ul>
        </p>
      </div>
      <Banner />
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
