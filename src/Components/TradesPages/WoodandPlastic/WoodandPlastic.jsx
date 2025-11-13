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

export const WoodandPlastic = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <CommonHeading heading="Insulation estimating services" />
      <p className=" p-3 paragrapg">
        Wood & plastic estimating services involve accurately assessing the
        material requirements for construction projects involving wood and
        plastic components. Our team meticulously calculates the necessary
        quantities, considering factors like dimensions, types of wood or
        plastic, labor costs, and transportation expenses.Our goal is to help
        clients achieve cost-efficiency without compromising on quality or
        durability Contact us  
        <span style={{ color: "#076e9a" }}>
          via Davidson@bidclerkestimating.com
        </span>
         or <span style={{ color: "#076e9a" }}>+1 917 300 1079.</span>
      </p>
    </div>
  );
  const text2 = (
    <div>
      <CommonHeading heading="Home Furnishing Estimating Services" />
      <p className=" paragrapg">
        Our Home Furnishing Estimation Services provide accurate cost estimates
        for furnishing your home. We analyze your space and needs, considering
        furniture types, fabrics, accessories, and delivery costs. Our goal is
        to help you plan and budget effectively for your home furnishing
        projects, ensuring you get the look and feel you desire within your
        budget.
      </p>
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
      <HeroSection text={text} src={require("../../../Images/WPHTHI1.png")} />
      <HalfImgHalfText
        text={text2}
        src={require("../../../Images/WPHTHI2.png")}
      />

      <Banner />

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
