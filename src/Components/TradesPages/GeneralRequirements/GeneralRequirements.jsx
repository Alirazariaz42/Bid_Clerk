import React from "react";
import "./GeneralRequirements.css";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
import { HalfTextHalfOffComponent } from "../../CommonComponents/HalfTextHalfOffComponent";
export const GeneralRequirements = () => {
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
            General Requirements
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        {" "}
        General requirements are the backbone of any construction project,
        ensuring compliance with regulations and meeting project needs. They
        provide detailed estimates for materials, labor, and equipment, enabling
        informed decision-making. Clear communication and adherence to budget
        constraints ensure project success and client satisfaction. Contact us  
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
      <CommonHeading heading="Key Elements of Effective Planning" />
      <p className=" p-3 paragrapg">
        {" "}
        <ul>
          <li>
            {" "}
            <strong> Project Goals::</strong> Define your vision and success
            criteria.{" "}
          </li>
          <li>
            {" "}
            <strong> Project Scope:  :</strong> Outline what's included (and
            not) in your project.{" "}
          </li>
          <li>
            {" "}
            <strong>Resources & Budget:  :</strong>  Plan your budget and secure
            the necessary people, materials, and equipment.
          </li>
          <li>
            {" "}
            <strong>Quality Standards:  :</strong> Set clear expectations for
            the finished product.{" "}
          </li>
          <li>
            {" "}
            <strong>Regulations:  :</strong> Ensure your project meets all legal
            requirements.
          </li>
          <li>
            {" "}
            <strong>Communication Plan:  :</strong>  Establish clear
            communication channels for a smooth project flow.
          </li>
        </ul>
      </p>
    </div>
  );
  const text6 = (
    <div>
      <CommonHeading heading="Who Have We Helped with Our General Requirements Services?" />
      <p className=" paragrapg">
        <span className=" fw-semibold mt-2">
          Understanding Your Needs: Tailored Construction Cost Estimating
          Services:
        </span>
        <br />
        <span className=" row w-100 mt-2">
          <span className="col-md-6 col-12">
            <ul className=" text-uppercase">
              <li>General Contractors</li>
              <li>Subcontractors</li>
              <li>Projects managers</li>
              <li>investors</li>
              <li>Architects</li>
            </ul>
          </span>
          <span className="col-md-6 col-12">
            <ul className=" text-uppercase">
              <li>home builders</li>
              <li>owners</li>
              <li>Developers</li>
              <li>vendors</li>
            </ul>
          </span>
        </span>
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection text={text} src={require("../../../Images/GRHTHI.png")} />
      <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      />
      <Banner />
      <div className=" container-md">
        <div className=" mt-3 mb-3">
          <HalfTextHalfOffComponent text={text6} />
        </div>

        <HalfTextHalfImg2
          text={text3}
          src={require("../../../Images/GCHTHI3.png")}
        />
      </div>
      <div className=" container-md">
        <SoftwareWeUse />
      </div>
      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
