import React from "react";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { HalfTextHalfOffComponent } from "../../CommonComponents/HalfTextHalfOffComponent";
import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
export const Concrete = () => {
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
            concrete estimating services
            </span>
          </h1>
          
      <p className=" p-3 paragrapg">
        {" "}
        Our Concrete Estimating Services provide accurate and detailed estimates
        for all concrete-related aspects of your construction project. With our
        expertise and advanced software, we deliver precise calculations for
        materials, labor, equipment, and other necessary components. Whether
        it's foundation work, slabs, walls, or any other concrete structure, Our
        team ensures that you have a clear understanding of the costs involved.
        Trust BidClerk Estimating for reliable concrete estimating services that
        help you plan and budget effectively for your project.Contact us
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
      <CommonHeading heading="OUR PORTFOLIO IN CONCRETE TAKEOFF SERVICES" />
      <p className=" p-3 paragrapg">
        {" "}
        <ul>
          <li>Dams</li>
          <li> Bridges</li>
          <li> Residential Buildings</li>
          <li> Commercial Buildings</li>
          <li>Foundations For High Rise Buildings</li>
          <li> Highways</li>
          <li> Driveways</li>
          <li> Culverts And Sewers</li>
          <li> Marine Structures</li>
          <li> Fences </li>
          {/* <li> - Concrete Contractor Marketing </li>
          <li> - Expert Witness </li>
          <li> - Litigation Assistance</li> */}
        </ul>
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/ConcreteHTHI1.png")}
      />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        <CommonHeading heading="Our Estimation Process" />
        <p className=" paragrapg">
          At{" "}
          <span style={{ color: "#076e9a", fontWeight: "600" }}>
            BidClerk Estimating,
          </span>{" "}
          we conduct thorough concrete estimations by analyzing client design
          plans. Using software like Bluebeam, Planswift, or OST, we perform
          digital takeoffs and organize data in Excel spreadsheets. Our 24/7
          support ensures constant assistance. Our Concrete Estimating Services
          cover quantities of concrete needed for various structures and
          associated costs, including transportation and equipment expenses. We
          also detail concrete reinforcements like rebar, wire mesh, and dowels{" "}
        </p>
      </div>
      <Banner />
      <div className=" container-md">
        <HalfImgHalfText
          text={text3}
          src={require("../../../Images/ConcreteHIHT1.png")}
        />
        <HalfTextHalfOffComponent text={text4}/>
      </div>
      {/* <div className=" container-md">
        <SoftwareWeUse />
      </div> */}
      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
